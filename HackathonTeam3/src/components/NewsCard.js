import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { RFPercentage } from 'react-native-responsive-fontsize'


const NewsCard = props => {


    return (
        <View style={styles.screen}>
            <TouchableOpacity activeOpacity={0.75} onPress={props.newsPress}>

                <Text style={styles.titleText}>{props.title}</Text>
                <Text style={styles.bodyText}>{props.body}</Text>

            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        borderWidth: 0.3,
        borderColor: 'grey',
        paddingHorizontal: '2%',
        padding: '1%'
    },
    titleText: {
        fontSize: RFPercentage(2.3),
        fontWeight: 'bold'
    },
    bodyText: {
        fontSize: RFPercentage(2)

    }
});


export default NewsCard;
