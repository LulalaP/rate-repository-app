import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';
import RepositoryList from './RepositoryList';
import SingleRepositoryItem from './SingleRepositoryItem';
import AppBar from './AppBar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import CreateReview from './CreateReview';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#e1e4e8',
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar/>
      <Switch>
        <Route path="/repositories/:id">
          <SingleRepositoryItem />
        </Route>
        <Route path="/createreview">
          <CreateReview />
        </Route>
        <Route path="/">
          <RepositoryList />
        </Route>
        <Route path="/signin" exact>
          <SignIn />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;