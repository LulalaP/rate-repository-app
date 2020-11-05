import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
  text: {
    color: '#DDDDDD',
    fontFamily: 'normal',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

const AppBarTab = ({text}) => {
  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

export default AppBarTab;