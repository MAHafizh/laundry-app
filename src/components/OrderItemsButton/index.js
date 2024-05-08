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

const ItemsContainer = ({title}) => {
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

  const [values, setValues] = useState({
    'Formal Shirt': 0,
    'T-Shirt': 0,
    Outer: 0,
    Jeans: 0,
    Pants: 0,
    Underwear: 0,
  });

  const handleAdd = (action, item) => {
    const newValues = {...values};

    if (action === 'plus') {
      newValues[item] += 1;
    } else if (action === 'minus' && newValues[item] > 0) {
      newValues[item] -= 1;
    }

    setValues(newValues);
  };
  console.log('===========');
  console.log('Formal Shirt', values['Formal Shirt']);
  console.log('T-Shirt', values['T-Shirt']);
  console.log('Outer', values.Outer);
  console.log('Pants', values.Pants);
  console.log('Jeans', values.Jeans);
  console.log('Underwear', values.Underwear);
  console.log('===========');

  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Icon />
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.actionContainer}>
        <TouchableOpacity
          onPress={() => handleAdd('minus', title)}
          disabled={values[title] === 0}>
          <View style={styles.iconAction}>
            <IconMinus />
          </View>
        </TouchableOpacity>
        <Text style={styles.textAction}>{values[title]}</Text>
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
