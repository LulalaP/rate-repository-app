import ApolloClient from 'apollo-boost';
import { APOLLO_URI } from "@env";

const createApolloClient = () => {
  return new ApolloClient({
    // Replace the IP address part with your own IP address!
    uri: APOLLO_URI,
  });
};

export default createApolloClient;