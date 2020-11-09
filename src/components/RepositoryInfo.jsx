import React from 'react';
import { Linking, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
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
    marginBottom: 10,
  },
  description: {
    color: theme.colors.textSecondary,
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.normal,
    marginBottom: 10,
  },
  signinBtn: {
    padding: 15,
    margin: 15,
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
  },
  signinBtnText: {
    color: '#ffffff',
    alignSelf: 'center',
    fontWeight: theme.fontWeights.bold,
  },
});
const RepositoryInfo = ({ repository }) => {
  const item = repository;
  
  const onSubmit = () => {
    Linking.openURL(`https://github.com/${item.fullName}`);
  }
  
  const reviews = item.reviews;

  const reviewNodes = reviews
    ? reviews.edges.map(edge => edge.node)
    : [];

  console.log('reviewss', reviewNodes);

  return (
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
      <TouchableOpacity onPress={onSubmit} activeOpacity={0.8}>
        <View style={styles.signinBtn}>
          <Text testID='submitButton' style={styles.signinBtnText} fontWeight='bold'>
            Open in GitHub
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
  

export default RepositoryInfo;