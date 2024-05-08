import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {IconBackButton, IconMapPin} from '../../assets';
import {WARNA_SEKUNDER, WARNA_ABU} from '../../utils/constant';
import {PickUp, ServiceType, OrderItems} from '../../components';

const Order = () => {
  const navigation = useNavigation();
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
          <PickUp />
          <ServiceType />
          <OrderItems />
        </View>
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
});
