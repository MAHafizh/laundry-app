/* eslint-disable no-unused-vars */
import {ImageBackground, StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {SplashBackground, SplashLogo} from '../../assets';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {
  useEffect(() => {
    const handleGetToken = async () => {
      try {
        const dataToken = await AsyncStorage.getItem('refreshToken');
        if (dataToken) {
          navigation.replace('MainApp', {screen: 'Home'});
        } else {
          setTimeout(() => {
            navigation.replace('Login');
          }, 3000);
        }
      } catch (error) {
        console.error('Failed to get token from AsyncStorage:', error);
      }
    };

    handleGetToken();
  }, [navigation]);

  return (
    <ImageBackground source={SplashBackground} style={styles.background}>
      <Image source={SplashLogo} style={styles.logo} />
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 222,
    height: 105,
  },
});
