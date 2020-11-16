import React, { useState } from 'react';
import { useDebounce } from 'use-debounce';

import useRepositories from '../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';


const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState('latest');
  const [searchValue, setSearchValue] = useState('');
  const [debouncedSearchValue] = useDebounce(searchValue, 500);

  const handleSearch = (value) => {
    setSearchValue(value);
  };
  
  const ob =
    orderBy === 'lowest' || orderBy === 'highest'
      ? 'RATING_AVERAGE'
      : 'CREATED_AT';

  const od = orderBy === 'lowest' ? 'ASC' : 'DESC';

  const variables = {
    orderBy: ob,
    orderDirection: od,
    searchKeyword: debouncedSearchValue,
    first: 8,
  };

  const { repositories, fetchMore } = useRepositories(variables);

  const onEndReach = () => {
    fetchMore();
  };

  return <RepositoryListContainer 
            repositories={repositories} 
            setOrderBy={setOrderBy}
            setSearchValue={setSearchValue}
            handleSearch={handleSearch}
            onEndReach={onEndReach}
            />;
};

export default RepositoryList;