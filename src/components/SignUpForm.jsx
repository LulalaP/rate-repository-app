import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import FormikTextInput from './FormikTextInput';

import theme from '../Theme';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#ffffff',
    padding: 15,
  },
  signupBtn: {
    padding: 15,
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
  },
  signupBtnText: {
    color: '#ffffff',
    alignSelf: 'center',
  },
});

const SignUpForm = ({ onSubmit }) => (
  <View style={styles.container}>
    <FormikTextInput testID="usernameField" name="username" placeholder="Username" />
    <FormikTextInput testID="passwordField" name="password" placeholder="Password" secureTextEntry />
    <FormikTextInput testID="passwordConfirmField" name="passwordConfirm" placeholder="password confirmation" secureTextEntry />
    <TouchableOpacity onPress={onSubmit} activeOpacity={0.8}>
      <View style={styles.signupBtn}>
        <Text testID="submitButton" style={styles.signupBtnText} fontWeight="bold">
          Sign up
        </Text>
      </View>
    </TouchableOpacity>
  </View>
);

export default SignUpForm;
