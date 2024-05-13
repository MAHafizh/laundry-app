/* eslint-disable no-unused-vars */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {IconBackButton, ProfileImageDummy} from '../../assets';
import {WARNA_UTAMA, WARNA_SEKUNDER, WARNA_ABU} from '../../utils/constant';
import {FeatureContainer} from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ipaddress} from '../../../ipaddress';
import {jwtDecode} from 'jwt-decode';

const Account = () => {
  const navigation = useNavigation();
  const [name, setName] = useState();
  const [token, setToken] = useState();

  useEffect(() => {
    getNewToken();
  });

  const handleLogout = async () => {
    try {
      const refreshToken = await AsyncStorage.getItem('refreshToken');
      const response = await fetch(
        `http://${ipaddress}:5000/logout?refreshToken=${refreshToken}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      if (response.ok) {
        await AsyncStorage.removeItem('refreshToken');
        navigation.navigate('Login');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getNewToken = async () => {
    try {
      const refreshToken = await AsyncStorage.getItem('refreshToken');
      const response = await fetch(
        `http://${ipaddress}:5000/token?refreshToken=${refreshToken}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const data = await response.json();
      if (response.ok) {
        setToken(data.accessToken);
        const decoded = jwtDecode(data.accessToken);
        setName(decoded.name);
      } else {
        Alert.alert(data.msg);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButtonContainer}>
          <Image source={IconBackButton} style={styles.backButton} />
        </TouchableOpacity>
        <Text style={styles.title}>Account</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.profileContainer}>
          <Image source={ProfileImageDummy} style={styles.profileImage} />
          <Text style={styles.fullname}>{name}</Text>
        </View>
        <View>
          <FeatureContainer title="Profile" />
          <FeatureContainer title="Saved Address" />
          <FeatureContainer title="Log Out" onPress={handleLogout} />
        </View>
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButtonContainer: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    marginLeft: 15,
    marginTop: 17,
    backgroundColor: WARNA_SEKUNDER,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Bold',
    color: 'black',
    marginTop: 14,
  },
  contentContainer: {
    backgroundColor: WARNA_ABU,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: '100%',
  },
  profileContainer: {
    alignItems: 'center',
  },
  profileImage: {
    width: 157,
    height: 157,
    marginTop: 30,
  },
  fullname: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 13,
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Bold',
    color: 'black',
  },
  featureContainer: {
    backgroundColor: 'white',
    borderWidth: 1,
  },
});
