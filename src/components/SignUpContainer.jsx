import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import SignUpForm from './SignUpForm';

const validationSchema = yup.object().shape({
  username: yup
    .string().min(1).max(35)
    .required('Username is required'),
  password: yup
    .string().min(5).max(50)
    .required('Password is required'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null])
    .required('Password Confirmation is required'),
});

const SignUpContainer = ({ initialValues, onSubmit }) => {

  return (
    <View>
      <Formik 
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignUpContainer;