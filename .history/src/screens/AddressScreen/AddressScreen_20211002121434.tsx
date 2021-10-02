import React from 'react';
import {View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import countryList from 'country-list';

import styles from './styles';

const countries = countryList.getData();
console.log(countries);
const AddressScreen = () => {
  return (
    <View>
      <View style={styles.row}>
        <Picker>
          {countries.map(country => (
            <Picker.Item value="India" label="India" />
          ))}
        </Picker>
      </View>
    </View>
  );
};

export default AddressScreen;
