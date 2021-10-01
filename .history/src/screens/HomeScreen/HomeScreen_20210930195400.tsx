import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      {/* Render Product Compoenent */}
      <View style={styles.root}>
          <Image style={styles.image}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {},
  image:{},
});

export default HomeScreen;
