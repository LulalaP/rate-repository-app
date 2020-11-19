import { useMutation } from '@apollo/react-hooks';

import { CREATE_REVIEW } from '../graphql/mutations';

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const createReview = async ({
    repoOwnerName, repoName, rating, review,
  }) => {
    mutate({
      variables: {
        // eslint-disable-next-line radix
        repoOwnerName, repoName, rating: parseInt(rating), review,
      },
    });
  };

  return [createReview, result];
};

export default useCreateReview;
