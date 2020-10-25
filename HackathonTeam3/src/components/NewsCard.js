import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RFPercentage } from 'react-native-responsive-fontsize';
import format from 'date-fns/format'
import formatDistanceStrict from 'date-fns/formatDistanceStrict'
import moment from 'moment';
import TextComponent from './TextComponent';

const COLORS = ['#FFC93C', '#40A8C4', '#D2EBF7'];

const NewsCard = (props) => {

    const convertTimestamp = () => {
        const date = moment(props.updatedAt).toDate();
        const updatedAt = date;

        const now = new Date()

        const oneHour = 60 * 60 * 1000;
        const oneDay = 60 * 60 * 24 * 1000;
        const oneWeek = 60 * 60 * 24 * 7 * 1000;

        let formattedDate = null;

        if ((now - updatedAt) < oneHour) {
            formattedDate = formatDistanceStrict(updatedAt, now, { unit: 'minute' }) + ' ago';
        } else if ((now - updatedAt) < oneDay) {
            formattedDate = formatDistanceStrict(updatedAt, now, { unit: 'hour' }) + ' ago'
        } else if (((now - updatedAt) > oneDay) && (now - updatedAt) < oneWeek) {
            formattedDate = formatDistanceStrict(updatedAt, now, { unit: 'day' }) + ' ago'
        } else if ((now - updatedAt) > oneWeek) {
            formattedDate = 'on ' + format(updatedAt, 'd/L/u')
        } else {
            console.log('less')
        }

        return formattedDate;
    };


    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.cardView}
                activeOpacity={0.8}
                onPress={props.newsPress}>
                <View
                    style={{
                        borderRadius: 20,
                        flex: 2,
                        backgroundColor: COLORS[props.index % 3],
                    }}
                />
                <View style={styles.bodyView}>
                    <View
                        style={{
                            flexDirection: 'row',
                            paddingVertical: '5%',
                            textAlign: 'center',
                        }}>
                        <TextComponent
                            title={'GOV.UK'}
                            colour={'grey'}
                            size={10}
                            align={'left'}
                            flex={1}
                        />
                        <TextComponent
                            title={convertTimestamp()}
                            colour={'grey'}
                            size={10}
                            flex={1}
                            align={'right'}
                        />
                    </View>
                    <Text style={styles.titleText}>{props.title}</Text>
                    <Text style={styles.titleText}>{props.title}</Text>
                    <Text style={styles.bodyText}>{props.body}</Text>
                    <Text style={styles.readMoreText}>{props.readMore}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    cardView: {
        flex: 3,
        flexDirection: 'row',
    },
    titleText: {
        fontSize: RFPercentage(1.6),
        fontWeight: 'bold',
        fontFamily: 'DMSerifDisplay-Regular',
        textAlign: 'left',
    },
    bodyView: {
        flex: 2,
        padding: '2%',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        paddingHorizontal: '6%',
    },
    imageStyle: {
        height: hp('26%'),
        width: wp('30%'),
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },
    bodyText: {
        fontSize: RFPercentage(1.6),
        fontFamily: 'OpenSans-Light',
    },
    readMoreText: {
        color: 'rgb(0,122,255)',
        fontSize: RFPercentage(1.6),
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
    },
});

export default NewsCard;
