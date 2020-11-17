import { useMutation, useApolloClient } from "@apollo/react-hooks";
import { useContext } from 'react';
import { useHistory } from "react-router-native";

import { AUTHORIZE } from "../graphql/mutations";
import AuthStorageContext from '../contexts/AuthStorageContext';

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHORIZE);
  const history = useHistory();
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    mutate({  variables: { username, password } });
    await authStorage.setAccessToken(result.data.authorize.accessToken);
    apolloClient.resetStore();
    history.push("/");
  };

  return [signIn, result];
};

export default useSignIn;
