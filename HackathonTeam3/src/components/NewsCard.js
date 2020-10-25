import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TouchableHighlight } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage } from 'react-native-responsive-fontsize';

const NewsCard = props => {


    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.cardView} activeOpacity={0.80} onPress={props.newsPress}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={styles.imageStyle} source={{ uri: 'https://www.topworktops.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/i/silver-gray-corian-sample-thumb-2x.jpg' }} />
                </View>
                <View style={styles.bodyView}>
                    {/* component with date and category goes here */}

                    <Text style={styles.titleText}>{props.title}</Text>

                    <Text style={styles.bodyText}>{props.body}</Text>

                    <Text style={styles.readMoreText}>Read more</Text>
                </View>

            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex:1
        backgroundColor: '#fcfcfc'
    },
    cardView: {
        flex: 1,
        flexDirection: 'row',
    },
    titleText: {
        fontSize: RFPercentage(2.6),
        fontWeight: 'bold',
        fontFamily: 'DMSerifDisplay-Regular',
        textAlign: 'left'
    },
    bodyView: {
        flex: 1,
        padding: '2%',
        alignItems: 'stretch',
        justifyContent: 'space-between'

    },
    imageStyle: {
        height: hp('26%'),
        width: wp('30%'),
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
    },
    bodyText: {
        fontSize: RFPercentage(1.6),
        fontFamily: 'OpenSans-Light',

    },
    readMoreText: {
        color: 'rgb(0,122,255)',
        fontSize: RFPercentage(1.6),
        alignSelf: 'flex-end',
        alignItems: 'flex-end'
    }
});


export default NewsCard;
