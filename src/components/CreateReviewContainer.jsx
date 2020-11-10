import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import CreateReviewForm from './CreateReviewForm';

const validationSchema = yup.object().shape({
  repoOwnerName: yup
    .string()
    .required('Repository owner name is required'),
  repoName: yup
    .string()
    .required('Repository name is required'),
  rating: yup
    .string()
    .required('Rating is required'),
  review: yup
    .string()
    .required('Review is required'),
});

const CreateReviewContainer = ({ initialValues, onSubmit }) => {

  return (
    <View>
      <Formik 
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default CreateReviewContainer;