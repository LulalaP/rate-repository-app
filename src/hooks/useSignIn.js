import { useMutation } from "@apollo/react-hooks";

import { AUTHORIZE } from "../graphql/mutations";
import AuthStorage from '../utils/authStorage';

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHORIZE);
  const authA = new AuthStorage('authA');

  const signIn = async ({ username, password }) => {
    mutate({  variables: { username, password } });
    await authA.setAccessToken(result.data.authorize.accessToken);
    const tokenA = await authA.getAccessToken();
    console.log('tokenA', tokenA);
    console.log('username', username, 'password', password);
  };

  return [signIn, result];
};

export default useSignIn;
