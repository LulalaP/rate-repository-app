import React from 'react';
import useSignUp from '../hooks/useSignUp';
import useSignIn from '../hooks/useSignIn';
import SignUpContainer from './SignUpContainer';

const initialValues = {
  username: '',
  password: '',
  passwordConfirm: '',
};

const SignUp = () => {
  const [signIn] = useSignIn();
  const [signUp, result] = useSignUp();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signUp({ username, password });
      if(result) await signIn({ username, password });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SignUpContainer initialValues={initialValues} onSubmit={onSubmit} />
  );
};

export default SignUp;