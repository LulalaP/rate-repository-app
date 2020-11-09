import { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";

import { GET_AUTHORIZED_USER } from "../graphql/queries";

const useAuthorizedUser = () => {
  const [authorizedUser, setAuthorizedUser] = useState();
  const getAuthorizedUser = useQuery(GET_AUTHORIZED_USER, {
    fetchPolicy: "cache-and-network",
  });

  const { called, networkStatus, loading, data, refetch } = getAuthorizedUser;

  useEffect(() => {
    if (called & (networkStatus > 6)) {
      const result = data ? data.authorizedUser : null;
      setAuthorizedUser(result);
    }
  }, [getAuthorizedUser]);

  return { authorizedUser, loading, refetch };
};

export default useAuthorizedUser;
