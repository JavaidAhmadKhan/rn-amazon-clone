import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import countryList from 'country-list';

import styles from './styles';

const countries = countryList.getData();

const AddressScreen = () => {
  const [country, setCountry] = useState(countries[0].code);
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('')

  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <Picker selectedValue={country} onValueChange={setCountry}>
          {countries.map(country => (
            <Picker.Item value={country.code} label={country.name} />
          ))}
        </Picker>
      </View>
      {/* Full Name */}
      <View style={styles.row}>
        <Text style={styles.label}>Full name (First and Last Name)</Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={fullname}
          onChangeText={setFullname}
        />
      </View>
      {/* Phone Number */}
      <View style={styles.row}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phone}
          onChangeText={setPhone}
          keyboardType={'phone-pad'}
        />
      </View>
      {/* Address */}
      <View style={styles.row}>
        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={phone}
          onChangeText={setPhone}
        />
      </View>
    </View>
  );
};

export default AddressScreen;
