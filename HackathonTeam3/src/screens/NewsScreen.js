import React from 'react';
import {View, StyleSheet} from 'react-native';

const NewsScreen = () => {
  return <View style={styles.screen} />;
};

export const screenOptions = {
  headerTitle: 'Detail',
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default NewsScreen;
