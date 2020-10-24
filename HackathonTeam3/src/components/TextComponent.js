import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

import { RFPercentage } from 'react-native-responsive-fontsize'


const TextComponent = props => {
    return (
      <View style = {{flex: props.flex}}>
        <Text style={{color: props.colour, fontSize: props.size, fontWeight:props.weight, textAlign: props.align, backgroundColor: props.backgroundColor, paddingVertical: props.padding}}>
          {props.title}
        </Text>
      </View>
    );
};


export default TextComponent;
