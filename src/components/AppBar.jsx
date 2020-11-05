import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  flexContainer: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  flexItemA: {
    flexGrow: 1,
    paddingRight: 20,
  },
  scrollView: {
    flexDirection: "row",
    marginHorizontal: 20,
    
  },
});

const AppBar = () => {
  return(
    <View style={styles.flexContainer}>
      <ScrollView style={styles.scrollView} horizontal>
        <View style={styles.flexItemA}>
          <Link to="/" text="Repositories" path="/" component={AppBarTab}></Link>
        </View>
        <View style={styles.flexItemA}>
          <Link to="/signin" text='Sign In' path="/signin" component={AppBarTab}></Link>
        </View>
      </ScrollView>
    </View>
  );
};

export default AppBar;