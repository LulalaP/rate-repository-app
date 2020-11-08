import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useHistory } from 'react-router-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
  text: {
    color: '#DDDDDD',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

const AppBarTab = ({text, path}) => {
  const history = useHistory();
  return(
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={() => history.push(path)}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AppBarTab;