import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import countryList from 'country-list';

import styles from './styles';

const countries = countryList.getData();

const AddressScreen = () => {
  const [country, setCountry] = useState(countries[0].code);
  const [fullname, setFullname] = useState('');

  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <Picker selectedValue={country} onValueChange={setCountry}>
          {countries.map(country => (
            <Picker.Item value={country.code} label={country.name} />
          ))}
        </Picker>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Full name (First and Last Name)</Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={fullname}
          onChangeText={setFullname}
        />
      </View>
    </View>
  );
};

export default AddressScreen;
