import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import SignInForm from './SignInForm';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const onSubmit = (values) => {
  console.log(values);
};

const SignIn = () => {
  return (
    <View>
      <Formik 
      initialValues={initialValues}
      onSubmit={onSubmit(1)}
      validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;