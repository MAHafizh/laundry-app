/* eslint-disable no-unused-vars */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {IconBackButton, IconMapPin} from '../../assets';
import {WARNA_SEKUNDER, WARNA_ABU, WARNA_UTAMA} from '../../utils/constant';
import {PickUp, ServiceType, OrderItems} from '../../components';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ipaddress} from '../../utils/ipaddress';
import {jwtDecode} from 'jwt-decode';

const Order = () => {
  const navigation = useNavigation();
  const [orderItemsValues, setOrderItemsValues] = useState({});
  const [pickupDate, setPickupDate] = useState(new Date());
  const [serviceType, setServiceType] = useState();
  const [valueJenis, setValueJenis] = useState(null);
  const [valueDurasi, setValueDurasi] = useState(null);
  const [dateGMT7, setDateGMT7] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [respText, setRespText] = useState('');

  const handleOrderItemsValueChange = (itemName, itemValue) => {
    setOrderItemsValues(prevState => ({
      ...prevState,
      [itemName]: itemValue,
    }));
    console.log(`Received Value for ${itemName}: ${itemValue}`);
  };

  const handlePickupDate = date => {
    setPickupDate(date);
    setDateGMT7(moment(date).format('DD-MM-YYYY HH:mm'));
    console.log(dateGMT7);
  };

  const handleServiceType = (jenis, durasi) => {
    setValueJenis(jenis);
    setValueDurasi(durasi);
    const mixValue = `${jenis} - ${durasi}`;
    setServiceType(mixValue);
  };

  // console.log(orderItemsValues['T-Shirt']);
  console.log(serviceType);
  console.log(dateGMT7);

  const handleAddOrder = async () => {
    try {
      const refreshToken = await AsyncStorage.getItem('refreshToken');
      const decoded = jwtDecode(refreshToken);

      const response = await fetch(`http://${ipaddress}:5000/user/order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: decoded.userId,
          formal_shirt: orderItemsValues['Formal Shirt'],
          shirt: orderItemsValues['T-Shirt'],
          outer: orderItemsValues.Outer,
          jeans: orderItemsValues.Jeans,
          pants: orderItemsValues.Pants,
          underwear: orderItemsValues.Underwear,
          pickup_time: dateGMT7,
          service_type: serviceType,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setModalVisible(true);
        setRespText(data.msg);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButtonContainer}>
            <Image source={IconBackButton} style={styles.backButton} />
          </TouchableOpacity>
          <Text style={styles.title}>Order Details</Text>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.addressContainer}>
            <Text style={styles.textAddressTitle}>Address</Text>
            <TouchableOpacity style={styles.addressDetailsContainer}>
              <Image source={IconMapPin} style={styles.iconPin} />
              <Text style={styles.textAddressDetails}>
                Jl. Medokan Asri Barat VIII Blok J No. 22
              </Text>
            </TouchableOpacity>
          </View>
          <PickUp onDateChange={handlePickupDate} />
          <ServiceType
            valueJenis={valueJenis}
            valueDurasi={valueDurasi}
            onValueChange={(jenis, durasi) => handleServiceType(jenis, durasi)}
          />
          <OrderItems onItemValuesChange={handleOrderItemsValueChange} />
          <TouchableOpacity style={styles.button} onPress={handleAddOrder}>
            <Text style={styles.buttonText}>Order Now</Text>
          </TouchableOpacity>
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
              <Text style={styles.modalText}>{respText}</Text>
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
      </View>
    </ScrollView>
  );
};

export default Order;

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
  addressContainer: {
    marginHorizontal: 45,
    marginTop: 5,
  },
  addressDetailsContainer: {
    flexDirection: 'row',
    marginTop: 2,
    alignItems: 'center',
  },
  textAddressTitle: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Bold',
    color: 'black',
  },
  iconPin: {
    width: 13,
    height: 13,
    marginHorizontal: 2,
  },
  textAddressDetails: {
    color: 'black',
    fontFamily: 'TitilliumWeb-Light',
    fontSize: 14,
  },
  button: {
    marginVertical: 30,
    backgroundColor: WARNA_UTAMA,
    padding: 10,
    borderRadius: 15,
    marginHorizontal: 45,
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
