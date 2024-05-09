/* eslint-disable no-unused-vars */
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {HeaderBackground, HeaderLogo} from '../../assets';
import {ButtonIcon, Saldo, ActiveOrder} from '../../components';
import {WARNA_ABU} from '../../utils/constant';
import {jwtDecode} from 'jwt-decode';

const Home = () => {
  const [name, setName] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    getNewToken();
  });

  const getNewToken = async () => {
    try {
      const refreshToken = await AsyncStorage.getItem('refreshToken');
      const response = await fetch(
        `http://192.168.0.170:5000/token?refreshToken=${refreshToken}`,
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
        console.log(decoded);
        setName(decoded.name);
      } else {
        Alert.alert(data.msg);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={HeaderBackground} style={styles.header}>
          <Image source={HeaderLogo} style={styles.logo} />
          <View style={styles.greeting}>
            <Text style={styles.welcome}>Selamat Datang, </Text>
            <Text style={styles.uname}>{name} </Text>
          </View>
        </ImageBackground>
        <Saldo />
        <View style={styles.services}>
          <Text style={styles.label}>Services</Text>
          <View style={styles.serviceIcon}>
            <ButtonIcon title="Kiloan" type="layanan" />
            <ButtonIcon title="Satuan" type="layanan" />
            <ButtonIcon title="VIP" type="layanan" />
            <ButtonIcon title="Karpet" type="layanan" />
            <ButtonIcon title="Setrika Saja" type="layanan" />
            <ButtonIcon title="Ekspress" type="layanan" />
          </View>
        </View>
        <View style={styles.activeOrder}>
          <Text style={styles.label}>Actice Order</Text>
          <ActiveOrder title="Pesanan No. 000001" status="Selesai" />
          <ActiveOrder title="Pesanan No. 000002" status="Proses" />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.3,
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  logo: {
    width: windowWidth * 0.25,
    height: windowHeight * 0.06,
  },
  greeting: {
    marginTop: windowHeight * 0.06,
  },
  welcome: {
    fontSize: 24,
    fontFamily: 'TitilliumWeb-Regular',
    color: 'black',
  },
  uname: {
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'TitilliumWeb-Bold',
    color: 'black',
  },
  services: {
    paddingLeft: 30,
    paddingTop: 15,
  },
  label: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Bold',
    color: 'black',
  },
  serviceIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    flexWrap: 'wrap',
  },
  activeOrder: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 10,
    backgroundColor: WARNA_ABU,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});
