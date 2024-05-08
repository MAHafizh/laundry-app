import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ItemsContainer from '../OrderItemsButton';

const OrderItems = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Order Items</Text>
      <View style={styles.contentWrapper}>
        <ItemsContainer title="Formal Shirt" />
        <ItemsContainer title="T-Shirt" />
        <ItemsContainer title="Outer" />
        <ItemsContainer title="Pants" />
        <ItemsContainer title="Jeans" />
        <ItemsContainer title="Underwear" />
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
