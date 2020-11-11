import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';

const SearchBar = ({ searchValue, handleSearch }) => {
  const onChangeSearch = (query) => {
    handleSearch(query);
  };

  return (
    <Searchbar
      placeholder='Search'
      onChangeText={onChangeSearch}
      value={searchValue}
    />
  );
};

export default SearchBar;