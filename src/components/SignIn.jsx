import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';

import SignInForm from './SignInForm';

const initialValues = {
  username: '',
  password: '',
};

const onSubmit = (values) => {
  console.log(values);
};

const SignIn = () => {
  return (
    <View>
      <Formik initialValues={initialValues} onSubmit={onSubmit(1)}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;