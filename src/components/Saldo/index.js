import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {WARNA_UTAMA} from '../../utils/constant';
import ButtonIcon from '../ButtonIcon';
import Gap from '../Gap';

const Saldo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.infoSaldo}>
        <View style={styles.text}>
          <Text style={styles.labelSaldo}>Saldo:</Text>
          <Text style={styles.valueSaldo}>Rp. 1000</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.labelPoint}>Point:</Text>
          <Text style={styles.valuePoint}>100 Points</Text>
        </View>
      </View>
      <View style={styles.buttonAksi}>
        <ButtonIcon title="Add Saldo" />
        <Gap width={10} />
        <ButtonIcon title="Get Point" />
      </View>
    </View>
  );
};

export default Saldo;

// const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 17,
    marginHorizontal: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    marginTop: -windowHeight * 0.05,
    flexDirection: 'row',
    height: 90,
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoSaldo: {
    width: '60%',
  },
  labelSaldo: {
    fontFamily: 'TitilliumWeb-Regular',
    fontSize: 20,
    color: 'black',
  },
  valueSaldo: {
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 20,
    color: 'black',
  },
  labelPoint: {
    fontFamily: 'TitilliumWeb-Regular',
    fontSize: 12,
    color: 'black',
  },
  valuePoint: {
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 12,
    color: WARNA_UTAMA,
  },
  buttonAksi: {
    flexDirection: 'row',
    marginLeft: 25,
  },
});
