import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    padding: 50
  },
  button: {
    position: 'absolute',
    left: 20,
    right: 0,
    bottom: 10,
  },
});

const onPress = () => {
  return true;
};

const AppBar = () => {
  return(
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.button}>
          <AppBarTab text='repository'/>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default AppBar;