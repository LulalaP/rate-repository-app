import { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_REPOSITORY } from '../graphql/queries';

const useSingleRepository = ({ id }) => {
  const [repository, setRepository] = useState([]);
  const getRepository = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables: { id },
  });

  const { called, networkStatus, loading, data, refetch } = getRepository;

  useEffect(() => {
    if (called & (networkStatus > 6)) {
      console.log(called)
      const fetchedRepository = data ? data.repository : null;
      setRepository(fetchedRepository);
    }
  }, [getRepository]);


  return { repository, loading, refetch };
};

export default useSingleRepository;