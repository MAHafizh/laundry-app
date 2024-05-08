/* eslint-disable curly */
/* eslint-disable react/no-unstable-nested-components */

import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  IconAddSaldo,
  IconGetPoint,
  IconEkspress,
  IconKarpet,
  IconKiloan,
  IconSatuan,
  IconSetrika,
  IconVip,
} from '../../assets';
import {WARNA_SEKUNDER} from '../../utils/constant';

const ButtonIcon = ({title, type}) => {
  const Icon = () => {
    if (title === 'Add Saldo') return <IconAddSaldo />;
    if (title === 'Get Point') return <IconGetPoint />;
    if (title === 'Kiloan') return <IconKiloan />;
    if (title === 'Satuan') return <IconSatuan />;
    if (title === 'VIP') return <IconVip />;
    if (title === 'Karpet') return <IconKarpet />;
    if (title === 'Setrika Saja') return <IconSetrika />;
    if (title === 'Ekspress') return <IconEkspress />;
    return <IconAddSaldo />;
  };

  return (
    <TouchableOpacity style={styles.buttonIcon(type)}>
      <View style={styles.icon(type)}>
        <Icon />
      </View>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  buttonIcon: type => ({
    marginBottom: type === 'layanan' ? 12 : 0,
    marginRight: type === 'layanan' ? 30 : 0,
  }),
  icon: type => ({
    backgroundColor: WARNA_SEKUNDER,
    padding: type === 'layanan' ? 12 : 7,
    borderRadius: 10,
  }),
  text: type => ({
    fontFamily:
      type === 'layanan' ? 'TitilliumWeb-Light' : 'TitilliumWeb-Regular',
    fontSize: type === 'layanan' ? 14 : 10,
    textAlign: 'center',
    color: 'black',
  }),
});
