/* eslint-disable curly */
/* eslint-disable react/no-unstable-nested-components */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IconProfile, IconLocation, IconLogout} from '../../assets';

const FeatureContainer = ({title, onPress}) => {
  const Icon = () => {
    if (title === 'Profile') return <IconProfile />;
    if (title === 'Saved Address') return <IconLocation />;
    if (title === 'Log Out') return <IconLogout />;
    return <IconProfile />;
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.icon}>
        <Icon />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default FeatureContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 20,
    marginHorizontal: 45,
    width: 324,
    height: 64,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    borderRadius: 10,
  },
  icon: {
    paddingHorizontal: 15,
  },
  title: {
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 18,
    color: 'black',
  },
});
