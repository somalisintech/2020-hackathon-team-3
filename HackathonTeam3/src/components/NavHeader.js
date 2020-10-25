import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {RFPercentage} from 'react-native-responsive-fontsize';

const NavHeader = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={props.backPress}>
        <FontAwesomeIcon
          color="black"
          icon="chevron-left"
          size={RFPercentage(3)}
        />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
        <FontAwesomeIcon
          color="black"
          icon="share-square"
          size={RFPercentage(3)}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '1%',
  },
});

export default NavHeader;
