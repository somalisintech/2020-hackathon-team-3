import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableHighlight,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TextComponent from './TextComponent';
import {RFPercentage} from 'react-native-responsive-fontsize';

const NewsCard = (props) => {
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
            backgroundColor: '#FDD670',
          }}
        />
        <View style={styles.bodyView}>
          {/* component with date and category goes here */}
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
              title={'2 days ago'}
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
    // flex:1
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
