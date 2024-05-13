/* eslint-disable react-native/no-inline-styles */
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation, StackActions} from '@react-navigation/native';
import {SplashBackground, SplashLogo} from '../../assets';
import {WARNA_UTAMA} from '../../utils/constant';
import {IconPassword, IconEmail} from '../../assets';
import {ipaddress} from '../../utils/ipaddress';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [errorText, setErrorText] = useState('');

  const goToHome = () => {
    navigation.dispatch(StackActions.replace('MainApp', {screen: 'Home'}));
  };

  const handleLogin = async () => {
    try {
      const response = await fetch(`http://${ipaddress}:5000/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.toLocaleLowerCase(),
          password: password,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        await AsyncStorage.setItem('refreshToken', data.refreshToken);
        console.log('Login berhasil!');
        goToHome();
      } else {
        setModalVisible(true);
        setErrorText(data.msg);
      }
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
      Alert.alert('Login Gagal', 'Terjadi kesalahan pada server');
    }
  };

  return (
    <ImageBackground source={SplashBackground} style={styles.background}>
      <Image source={SplashLogo} style={styles.logo} />
      <View style={styles.container}>
        <Text style={styles.TitleWelcome}>Welcome Back!</Text>
        <Text style={styles.TitleDetails}>Please enter your details</Text>
        <View style={styles.inputContainer}>
          <Image source={IconEmail} style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputContainer}>
          <Image source={IconPassword} style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <View
          style={{
            marginTop: 162,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Text>Dont have an Account </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={{color: 'blue'}}>Click Here</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{errorText}</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                setModalVisible(false);
              }}>
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logo: {
    width: 222,
    height: 105,
    marginTop: 70,
  },
  container: {
    marginTop: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    width: '100%',
    height: '80%',
  },
  TitleWelcome: {
    fontFamily: 'TitilliumWeb-Black',
    color: WARNA_UTAMA,
    letterSpacing: 1,
    fontSize: 30,
    paddingTop: 16,
    paddingLeft: 47,
  },
  TitleDetails: {
    fontFamily: 'TitilliumWeb-Regular',
    paddingLeft: 47,
    color: WARNA_UTAMA,
    marginBottom: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderColor: 'black',
    borderWidth: 1,
    marginLeft: 45,
    marginRight: 45,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 15,
    marginLeft: 15,
  },
  button: {
    marginTop: 40,
    backgroundColor: WARNA_UTAMA,
    padding: 10,
    borderRadius: 15,
    marginLeft: 45,
    marginRight: 45,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'TitilliumWeb-Bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: WARNA_UTAMA,
    borderRadius: 15,
    padding: 10,
    elevation: 2,
  },
  modalButtonText: {
    color: 'white',
    fontFamily: 'TitilliumWeb-Bold',
    textAlign: 'center',
  },
});
