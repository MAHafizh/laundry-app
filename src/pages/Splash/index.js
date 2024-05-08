/* eslint-disable no-unused-vars */
import {ImageBackground, StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {SplashBackground, SplashLogo} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
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
