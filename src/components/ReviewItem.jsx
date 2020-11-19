import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { format } from 'date-fns';
import theme from '../Theme';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: 'white',
  },
  flexContainerA: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 15,
  },
  flexContainerB: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flex: 1,
  },
  nameText: {
    marginBottom: 4,
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold,
  },
  dateText: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.normal,
    color: theme.colors.textSecondary,
    padding: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    flexGrow: 0,
    marginRight: 20,
    height: 60,
    width: 60,
    borderWidth: 3,
    borderColor: theme.colors.primary,
    borderRadius: 30,
    justifyContent: 'center',
  },
  ratingText: {
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.primary,
    alignSelf: 'center',
  },
});

const ReviewItem = ({ item }) => {
  if (!item) return null;
  const date = format(new Date(item.createdAt), 'dd.MM.yyyy');

  return (
    <View style={styles.container}>
      <View style={styles.flexContainerA}>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
        <View style={styles.flexContainerB}>
          <View>
            <Text style={styles.nameText}>{item.user.username}</Text>
          </View>
          <View>
            <Text style={styles.dateText}>{date}</Text>
          </View>
          <View>
            <Text>{item.text}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ReviewItem;
