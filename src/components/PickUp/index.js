import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {IconKalender} from '../../assets';
import moment from 'moment';

const PickUp = () => {
  const getDefaultPickupTime = () => {
    const now = new Date();
    const nextHour = new Date(now);
    if (now.getMinutes() > 1) {
      nextHour.setHours(nextHour.getHours() + 1);
    }
    nextHour.setMinutes(0);
    nextHour.setSeconds(0);
    return nextHour;
  };
  const [tanggal, setTanggal] = useState(getDefaultPickupTime());
  const [show, setShow] = useState(false);
  const minimumTime = new Date();
  const maximumTime = new Date();

  const handleTanggal = date => {
    setTanggal(date);
  };

  const toggleDatePicker = () => {
    setShow(!show);
  };

  minimumTime.setHours(9, 0, 0);
  maximumTime.setHours(17, 0, 0);

  return (
    <View style={styles.pickupContainer}>
      <Text style={styles.textPickupTitle}>Pickup Time</Text>
      <View style={styles.inputWrapper}>
        <TouchableOpacity style={styles.iconWrapper} onPress={toggleDatePicker}>
          <IconKalender />
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <Text style={styles.input}>
            {moment(tanggal).format('DD-MM-YYYY')}
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.input} placeholder="Pickup Time">
            {moment(tanggal).format('HH:mm')}
          </Text>
        </View>
      </View>
      <DatePicker
        modal
        minuteInterval={60}
        locale="device"
        theme="dark"
        mode="datetime"
        is24hourSource="device"
        minimumDate={minimumTime}
        maximumDate={maximumTime}
        open={show}
        date={tanggal}
        onConfirm={date => {
          handleTanggal(date);
          setShow(date);
        }}
        onCancel={() => {
          setShow(false);
        }}
      />
    </View>
  );
};

export default PickUp;

const styles = StyleSheet.create({
  pickupContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 45,
    marginTop: 15,
    height: 80,
  },
  textPickupTitle: {
    paddingLeft: 30,
    paddingTop: 12,
    fontFamily: 'TitilliumWeb-SemiBold',
    color: 'black',
    fontSize: 14,
  },
  inputContainer: {
    borderWidth: 1,
    height: 21,
    width: 110,
    borderRadius: 7,
    marginVertical: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    marginLeft: 10,
    fontFamily: 'TitilliumWeb-Regular',
    color: 'black',
    fontSize: 10,
    marginVertical: 1.5,
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 5,
    alignItems: 'center',
  },
  iconWrapper: {
    marginLeft: 8,
  },
});
