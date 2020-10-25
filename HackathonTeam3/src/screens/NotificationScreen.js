import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const NotificationScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>?</Text>
    </View>
  );
};

export const screenOptions = {
  headerTitle: 'Notifications',
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default NotificationScreen;
