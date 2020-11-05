import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../Theme';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: 'white',
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  flexItemA: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  flexItemB: {
    flexGrow: 1,
  },
  count: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },
  text: {
    color: theme.colors.textSecondary,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.normal,
  },
});

function kFormatter(num) {
  return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num);
}

const CountItem = ({ name, count }) => {
  const resultCount = kFormatter(count);
  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <View style={styles.flexItemA}>
          <View>
            <Text style={styles.count}>{resultCount}</Text>
          </View>
          <View>
            <Text style={styles.text}>{name}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CountItem;