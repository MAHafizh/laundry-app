/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import ItemsContainer from '../OrderItemsButton';

const OrderItems = ({onItemValuesChange}) => {
  const [itemValues, setItemValues] = useState({
    'Formal Shirt': 1,
    'T-Shirt': 1,
    Outer: 1,
    Jeans: 1,
    Pants: 1,
    Underwear: 1,
  });

  const handleItemValueChange = (itemName, itemValue) => {
    setItemValues(prevState => ({
      ...prevState,
      [itemName]: itemValue,
    }));
    onItemValuesChange(itemName, itemValue);
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Order Items</Text>
      <View style={styles.contentWrapper}>
        <ItemsContainer title="Formal Shirt" onValueChange={handleItemValueChange} />
        <ItemsContainer title="T-Shirt" onValueChange={handleItemValueChange} />
        <ItemsContainer title="Outer" onValueChange={handleItemValueChange} />
        <ItemsContainer title="Pants" onValueChange={handleItemValueChange} />
        <ItemsContainer title="Jeans" onValueChange={handleItemValueChange} />
        <ItemsContainer title="Underwear" onValueChange={handleItemValueChange} />
      </View>
    </View>
  );
};

export default OrderItems;

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 45,
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'TitilliumWeb-Bold',
  },
});
