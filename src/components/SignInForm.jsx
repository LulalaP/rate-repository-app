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
  signinBtn: {
    padding: 15,
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
  },
  signinBtnText: {
    color: '#ffffff',
    alignSelf: 'center',
  },
});

const onSubmit = (values) => {
  console.log(values);
};

const SignIn = () => {
  return (
    <View style={styles.container}>
      <View>
        <FormikTextInput  name='username' placeholder='Username' />
      </View>
      <View>
        <FormikTextInput style={styles.signinForm} name="password" placeholder="Password" secureTextEntry={true} />
      </View>
      <TouchableOpacity onPress={onSubmit} activeOpacity={0.8}>
        <View style={styles.signinBtn}>
          <Text style={styles.signinBtnText} fontWeight='bold'>
            Sign in
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;