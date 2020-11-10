import React from 'react';
import { useHistory } from "react-router-native";
import useCreateReview from '../hooks/useCreateReview';
import CreateReviewContainer from './CreateReviewContainer';

const initialValues = {
  repoOwnerName: '',
  repoName: '',
  rating: '',
  review: '',
};

const CreateReview = () => {
  const [createReview] = useCreateReview();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { repoOwnerName, repoName, rating, review } = values;

    try {
      const { data } = await createReview({ repoOwnerName, repoName, rating, review });
      console.log('create a review', data);
      if (data.createReview.repositoryId) {
        history.push(`/repositories/${data.createReview.repositoryId}`);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <CreateReviewContainer initialValues={initialValues} onSubmit={onSubmit} />
  );
};

export default CreateReview;