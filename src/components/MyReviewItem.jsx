import React from 'react';
import { useHistory } from "react-router-native";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { format } from 'date-fns'
import theme from '../Theme';

import useDeleteReview from '../hooks/useDeleteReview';

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
  flexContainerC: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
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
  viewButton: {
    padding: 15,
    margin: 15,
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
  },
  deleteButton: {
    padding: 15,
    margin: 15,
    backgroundColor: '#d73a4a',
    borderRadius: 4,
  },
  buttonText: {
    color: '#ffffff',
    alignSelf: 'center',
    fontWeight: theme.fontWeights.bold,
  },
});

const MyReviewItem = ({ item, refetch }) => {
  const history = useHistory();
  const [deleteReview] = useDeleteReview();

  if(!item) return null;
  const date = format(new Date(item.createdAt), 'dd.MM.yyyy');

  const handleViewRepository = () => {
    history.push(`/repositories/${item.repository.id}`);
    return true;
  };

  const handleDeleteReview = () => {
    Alert.alert(
      'Delete review',
      'Are you sure you want to delete this review?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'OK', onPress: async() => {
          const id = item.id;
          await deleteReview({id});
          refetch();
        } 
        }
      ],
      { cancelable: false }
    );
    return true;
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.flexContainerA}>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
        <View style={styles.flexContainerB}>
          <View>
            <Text style={styles.nameText}>{item.repository.fullName}</Text>
          </View>
          <View>
            <Text style={styles.dateText}>{date}</Text>
          </View>
          <View>
            <Text>{item.text}</Text>
          </View>
        </View>
      </View>
      <View style={styles.flexContainerC}>
        <TouchableOpacity onPress={handleViewRepository} activeOpacity={0.8}>
          <View style={styles.viewButton}>
            <Text style={styles.buttonText}>
              View repository
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDeleteReview} activeOpacity={0.8}>
          <View style={styles.deleteButton}>
            <Text style={styles.buttonText}>
              Delete review
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
  

export default MyReviewItem;