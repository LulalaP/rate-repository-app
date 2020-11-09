import { useMutation } from "@apollo/react-hooks";

import { AUTHORIZE } from "../graphql/mutations";

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHORIZE);

  const signIn = async ({ username, password }) => {
    mutate({  variables: { username, password } });
    console.log('username', username, 'password', password);
    console.log('Token', result.data.authorize.accessToken);
  };

  return [signIn, result];
};

export default useSignIn;
