import React from 'react';
import {View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import styles from './styles';

const AddressScreen = () => {
  return (
    <View>
      <View style={styles.row}>
          <Picker>
              <Picker.Item value='India' label='India'/>
          </Picker>
      </View>
    </View>
  );
};

export default AddressScreen;
