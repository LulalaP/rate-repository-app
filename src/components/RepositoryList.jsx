import React, { useState } from 'react';

import useRepositories from '../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState('latest');
  
  const ob =
    orderBy === 'lowest' || orderBy === 'highest'
      ? 'RATING_AVERAGE'
      : 'CREATED_AT';

  const od = orderBy === 'lowest' ? 'ASC' : 'DESC';

  const variables = {
    orderBy: ob,
    orderDirection: od,
  };

  const { repositories } = useRepositories(variables);

  return <RepositoryListContainer repositories={repositories} setOrderBy={setOrderBy}/>;
};

export default RepositoryList;