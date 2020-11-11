import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { PickerSelect } from './PickerSelect';
import SearchBar from './SearchBar';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export class RepositoryListContainer extends React.Component {
  renderItem = ({ item }) => (
    <RepositoryItem item={item} />
  );

  renderHeader = () => {
    const { setOrderBy, searchValue, handleSearch } = this.props;
    
    return (
      <>
        <SearchBar searchValue={searchValue} handleSearch={handleSearch} />
        <PickerSelect setOrderBy={setOrderBy} />
      </>
    )
  }

  render () {
    const { repositories } = this.props;

    const repositoryNodes = repositories.edges
      ? repositories.edges.map(edge => edge.node)
      : [];

    return (
      <FlatList
        testID='RepositoryListContainer'
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem = {this.renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={this.renderHeader}
      />
    );
  }
};

export default RepositoryListContainer;