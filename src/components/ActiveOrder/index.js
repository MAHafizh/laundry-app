import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import {IconMesinCuci} from '../../assets';
import {WARNA_UTAMA, WARNA_ORANGE} from '../../utils/constant';

const ActiveOrder = ({title, status}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <IconMesinCuci />
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.status(status)}>{status}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ActiveOrder;

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 17,
    flexDirection: 'row',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    marginVertical: windowHeight * 0.02,
    alignItems: 'center',
  },
  text: {
    marginLeft: windowHeight * 0.03,
  },
  title: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-SemiBold',
    color: 'black',
  },
  status: status => ({
    fontSize: 14,
    fontFamily: 'TitilliumWeb-SemiBold',
    color: status === 'Selesai' ? WARNA_UTAMA : WARNA_ORANGE,
  }),
});
