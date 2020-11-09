import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useHistory } from "react-router-native";
import theme from '../Theme';
import CountItem from './CountItem';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: 'white',
  },
  tinyLogo: {
    width: 50,
    height: 50,
    margin: 20,
    borderRadius:5,
  },
  language: {
    backgroundColor: theme.colors.primary,
    padding: 10,
    borderRadius:5,
  },
  languageText: {
    color: 'white',
  },
  flexContainerA: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  flexContainerB: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: 20,
    flex: 0.8,
  },
  flexContainerC: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
  },
  fullname: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },
  description: {
    color: theme.colors.textSecondary,
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.normal,
  },
});

const RepositoryItem = ({ item }) => {
  const history = useHistory();

  const onPress = () => {
    history.push(`/repositories/${item.id}`);
  };
  
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.flexContainerA}>
          <View >
            <Image
              style={styles.tinyLogo}
              source={{
                uri: item.ownerAvatarUrl,
              }}
            />
          </View>
          <View style={styles.flexContainerB}>
            <View>
              <Text testID='fullName' style={styles.fullname}>{item.fullName}</Text>
            </View>
            <View>
              <Text style={styles.description}>{item.description}</Text>
            </View>
            <View style={styles.language}>
              <Text style={styles.languageText}>{item.language}</Text>
            </View>
          </View>
        </View>
        <View style={styles.flexContainerC}>
          <CountItem name='stars' count={item.stargazersCount} />
          <CountItem name='forks' count={item.forksCount} />
          <CountItem name='rating' count={item.ratingAverage} />
          <CountItem name='review' count={item.reviewCount} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
  

export default RepositoryItem;