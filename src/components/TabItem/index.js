/* eslint-disable prettier/prettier */
/* eslint-disable curly */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  IconHomeActive,
  IconHomeInactive,
  IconOrderActive,
  IconOrderInactive,
  IconAccountActive,
  IconAccountInactive,
} from '../../assets';
import { WARNA_UTAMA, WARNA_DISABLE } from '../../utils/constant';

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  // eslint-disable-next-line react/no-unstable-nested-components
  const Icon = () => {
    if (label === 'Home') return isFocused ? <IconHomeActive /> : <IconHomeInactive />;
    if (label === 'Order') return isFocused ? <IconOrderActive /> : <IconOrderInactive />;
    if (label === 'Account') return isFocused ? <IconAccountActive /> : <IconAccountInactive />;
    return <IconHomeInactive />;
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text:(isFocused) => ({
    fontSize: 13,
    color: isFocused ? WARNA_UTAMA : WARNA_DISABLE,
    marginTop: 8,
  }),
});
