import React from 'react';
import { View, Text } from 'react-native';

const RepositoryItem = ({ item }) => (
  <View >
    <Text>fullName:{item.fullName}</Text>
    <Text>description:{item.description}</Text>
    <Text>language:{item.language}</Text>
    <Text>forks:{item.forksCount}</Text>
    <Text>stars:{item.stargazersCount}</Text>
    <Text>rating:{item.ratingAverage}</Text>
    <Text>review:{item.reviewCount}</Text>
  </View>
);



export default RepositoryItem;