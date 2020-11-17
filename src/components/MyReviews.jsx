import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import useAuthorizedUser from '../hooks/useAuthorizedUser';
import MyReviewItem from './MyReviewItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const MyReviews = () => {
  const variables = {
    includeReviews: true,
    first: 8,
  };
  const { authorizedUser, fetchMore, refetch } = useAuthorizedUser(variables);

  if (authorizedUser === undefined) return null;
  
  const reviews = authorizedUser.reviews;
  const reviewNodes = reviews
    ? reviews.edges.map(edge => edge.node)
    : [];

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <MyReviewItem item={item} refetch={refetch} />}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};
  

export default MyReviews;