import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import countryList from 'country-list';

import Button from '../../components/Button/Button';
import styles from './styles';

const countries = countryList.getData();

const AddressScreen = () => {
  const [country, setCountry] = useState(countries[0].code);
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');

  console.log(zipcode);

  console.log(address);
  console.log(phone);

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
          value={address}
          onChangeText={setAddress}
        />
      </View>
      {/* City */}
      <View style={styles.row}>
        <Text style={styles.label}>City</Text>
        <TextInput
          style={styles.input}
          placeholder="City"
          value={city}
          onChangeText={setCity}
        />
      </View>
      {/* State */}
      <View style={styles.row}>
        <Text style={styles.label}>State</Text>
        <TextInput
          style={styles.input}
          placeholder="State"
          value={state}
          onChangeText={setState}
        />
      </View>
      {/* Zip Code */}
      <View style={styles.row}>
        <Text style={styles.label}>Zip Code</Text>
        <TextInput
          style={styles.input}
          placeholder="Zip Code"
          value={zipcode}
          onChangeText={setZipcode}
          keyboardType={'phone-pad'}
        />
      </View>
      <Button/>
    </View>
  );
};

export default AddressScreen;
