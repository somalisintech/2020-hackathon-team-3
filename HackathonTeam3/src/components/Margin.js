import React from 'react';
import {View} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Margin = (props) => {
  const percent = props.size ? `${props.size}%` : '1.8%';
  return <View style={{height: hp(percent)}} />;
};

export default Margin;
