import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';

const dataType = [
  {label: 'Cuci Setrika', value1: '1'},
  {label: 'Cuci Kering', value1: '2'},
  {label: 'Setrika Saja', value1: '3'},
];

const dataDuration = [
  {label: '1 Day', value2: '1'},
  {label: '2 Day', value2: '2'},
  {label: '3 Day', value2: '3'},
];
const ServiceType = () => {
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);

  // console.log('value1 1: ', value1);
  // console.log('Value 2: ', value2);

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
          valueField="value1"
          placeholder="Select item"
          value={value1}
          onChange={item => {
            setValue1(item.value1);
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
          valueField="value2"
          placeholder="Select item"
          value={value2}
          onChange={item => {
            setValue2(item.value2);
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
