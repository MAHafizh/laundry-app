import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';

const dataType = [
  {label: 'Cuci Setrika', valueJenis: 'Cuci Setrika'},
  {label: 'Cuci Kering', valueJenis: 'Cuci Kering'},
  {label: 'Setrika Saja', valueJenis: 'Setrika Saja'},
];

const dataDuration = [
  {label: '1 Day', valueDurasi: '1 Day'},
  {label: '2 Day', valueDurasi: '2 Day'},
  {label: '3 Day', valueDurasi: '3 Day'},
];

const ServiceType = ({valueJenis, valueDurasi, onValueChange}) => {
  const [jenis, setJenis] = useState(valueJenis);
  const [durasi, setDurasi] = useState(valueDurasi);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Service Type</Text>
      <View style={styles.dropdownWrapper}>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={dataType}
          maxHeight={300}
          labelField="label"
          valueField="valueJenis"
          placeholder="Select Item"
          value={valueJenis}
          onChange={item => {
            setJenis(item.valueJenis);
            onValueChange && onValueChange(item.valueJenis, durasi);
          }}
        />
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={dataDuration}
          maxHeight={300}
          labelField="label"
          valueField="valueDurasi"
          placeholder="Select Item"
          value={valueDurasi}
          onChange={item => {
            setDurasi(item.valueDurasi);
            onValueChange && onValueChange(jenis, item.valueDurasi);
          }}
        />
      </View>
    </View>
  );
};

export default ServiceType;

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 45,
    marginTop: 10,
  },
  title: {
    fontFamily: 'TitilliumWeb-Bold',
    color: 'black',
    fontSize: 18,
  },
  dropdownWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dropdown: {
    height: 20,
    width: 143,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginTop: 9,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    fontFamily: 'TitilliumWeb-Regular',
    color: 'black',
    flex: 1,
    fontSize: 13,
  },
  placeholderStyle: {
    fontSize: 13,
    fontFamily: 'TitilliumWeb-Regular',
    color: 'black',
  },
  selectedTextStyle: {
    fontFamily: 'TitilliumWeb-Regular',
    color: 'black',
    fontSize: 13,
  },
  iconStyle: {
    width: 15,
    height: 15,
  },
});
