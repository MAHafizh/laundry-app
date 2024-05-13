/* eslint-disable react/no-unstable-nested-components */
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {
  IconFormalShirt,
  IconJeans,
  IconOuter,
  IconPants,
  IconTShirt,
  IconUnderwear,
  IconPlus,
  IconMinus,
} from '../../assets';
import {WARNA_SEKUNDER} from '../../utils/constant';

const ItemsContainer = ({title, onValueChange}) => {
  const Icon = () => {
    if (title === 'Formal Shirt') {
      return <IconFormalShirt />;
    }
    if (title === 'T-Shirt') {
      return <IconTShirt />;
    }
    if (title === 'Outer') {
      return <IconOuter />;
    }
    if (title === 'Jeans') {
      return <IconJeans />;
    }
    if (title === 'Pants') {
      return <IconPants />;
    }
    if (title === 'Underwear') {
      return <IconUnderwear />;
    }
    return <IconFormalShirt />;
  };

  const [value, setValue] = useState(0);

  const handleAdd = action => {
    if (action === 'plus') {
      setValue(prevValue => prevValue + 1);
      onValueChange(title, value + 1); // Memperbarui state di komponen induk
    } else if (action === 'minus' && value > 0) {
      setValue(prevValue => prevValue - 1);
      onValueChange(title, value - 1); // Memperbarui state di komponen induk
    }
  };

  // const handleAddOrder = async () => {
  //   try {
  //     const refreshToken = await AsyncStorage.getItem('refreshToken');
  //     const decoded = jwtDecode(refreshToken);

  //     const response = await fetch(`http://${ipaddress}:5000/user/order`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         user_id: decoded.userId,
  //         formal_shirt: values['Formal Shirt'],
  //         shirt: values['T-Shirt'],
  //         outer: values.Outer,
  //         jeans: values.Jeans,
  //         pants: values.Pants,
  //         underwear: values.Underwear,
  //       }),
  //     });
  //     const data = await response.json();
  //     if (response.ok) {
  //       console.log(data.msg);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Icon />
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.actionContainer}>
        <TouchableOpacity
          onPress={() => handleAdd('minus', title)}
          disabled={value[title] === 0}>
          <View style={styles.iconAction}>
            <IconMinus />
          </View>
        </TouchableOpacity>
        <Text style={styles.textAction}>{value}</Text>
        <TouchableOpacity onPress={() => handleAdd('plus', title)}>
          <View style={styles.iconAction}>
            <IconPlus />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemsContainer;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    height: 64,
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 20,
  },
  title: {
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 18,
    color: 'black',
    width: 97,
  },
  actionContainer: {
    backgroundColor: WARNA_SEKUNDER,
    width: 60,
    height: 24,
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 55,
  },
  textAction: {
    marginTop: -5.5,
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 14,
    color: 'black',
  },
});
