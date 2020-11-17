import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { useParams } from 'react-router-native';
import useSingleRepository from '../hooks/useSingleRepository';
import RepositoryInfo from './RepositoryInfo';
import ReviewItem from './ReviewItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepositoryItem = () => {
  const { id } = useParams();
  const variables = {
    id: id,
    first: 8,
  };
  const { repository, fetchMore } = useSingleRepository(variables);
  if (repository === undefined) return null;
  
  const reviews = repository.reviews;

  const reviewNodes = reviews
    ? reviews.edges.map(edge => edge.node)
    : [];

  console.log('reviewss', reviewNodes);
  const onEndReach = () => {
    fetchMore();
  };

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem item={item} />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};
  

export default SingleRepositoryItem;