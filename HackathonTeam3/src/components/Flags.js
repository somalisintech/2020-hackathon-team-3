import React, { useState, useEffect } from 'react'
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';


const Flags = (props) => {

    const [language, setLanguage] = useState('English');

    return (

        <View style={styles.flagsView}>
            <TouchableOpacity activeOpacity={0.80} onPress={props.onSomaliaPress}>
                <Image style={styles.flagButton} source={require('../../assets/images/somalia.png')} />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.80} onPress={props.onBritainPress}>
                <Image style={styles.flagButton} source={require('../../assets/images/uk.png')} />
            </TouchableOpacity>

        </View>
    )
};

const styles = StyleSheet.create({
    flagsView: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        paddingRight: '2%'
    },
    flagButton: {
        height: RFPercentage(3.2),
        width: RFPercentage(4.5),
        borderRadius: 5,
        margin: 4
    }
});

export default Flags;



