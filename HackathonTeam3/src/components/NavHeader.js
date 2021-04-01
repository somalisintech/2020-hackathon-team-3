import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { RFPercentage } from 'react-native-responsive-fontsize';

const NavHeader = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backPressStyle} activeOpacity={0.8} onPress={props.backPress}>
                <FontAwesomeIcon
                    color="black"
                    icon="chevron-left"
                    size={RFPercentage(2.8)}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.sharePressStyle} activeOpacity={0.8} onPress={props.sharePress}>
                <FontAwesomeIcon
                    color="black"
                    icon="share-square"
                    size={RFPercentage(2.8)}
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
    backPressStyle: {
        backgroundColor: 'rgba(220,220,220,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        width: 35,
        height: 35,
        borderRadius: 35 / 2,
        paddingRight: 2
    },
    sharePressStyle: {
        backgroundColor: 'rgba(220,220,220,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        width: 35,
        height: 35,
        borderRadius: 35 / 2,
        paddingLeft: 2
    }

});

export default NavHeader;
