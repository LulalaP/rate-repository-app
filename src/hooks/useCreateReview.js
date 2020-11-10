import { useMutation } from "@apollo/react-hooks";
import { useHistory } from "react-router-native";

import { CREATEREVIEW } from "../graphql/mutations";

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATEREVIEW);
  const history = useHistory();

  const createReview = async ({ repoOwnerName, repoName, rating, review }) => {
    mutate({  variables: { repoOwnerName, repoName, rating, review } });
  };

  return [createReview, result];
};

export default useCreateReview;
