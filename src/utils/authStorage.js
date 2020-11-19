import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  getAccessToken = async () => {
    // Get the access token for the storage
    const token = await AsyncStorage.getItem(
      `${this.namespace}:token`,
    );

    // eslint-disable-next-line no-unneeded-ternary
    return token ? token : [];
  }

  setAccessToken = async (accessToken) => {
    // Add the access token to the storage
    await AsyncStorage.setItem(`${this.namespace}:token`, accessToken);
  }

  removeAccessToken = async () => {
    // Remove the access token from the storage
    await AsyncStorage.removeItem(`${this.namespace}:token`);
  }
}

export default AuthStorage;
