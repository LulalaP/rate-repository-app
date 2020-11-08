import { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";

import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const [repositories, setRepositories] = useState([]);
  const getRepositories = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });

  const { called, networkStatus, loading, data, refetch } = getRepositories;

  useEffect(() => {
    if (called & (networkStatus > 6)) {
      const fetchedRepositories = data ? data.repositories : [];
      setRepositories(fetchedRepositories);
    }
  }, [getRepositories]);

  return { repositories, loading, refetch };
};

export default useRepositories;