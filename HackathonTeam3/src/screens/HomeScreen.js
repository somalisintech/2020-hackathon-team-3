import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import NewsCard from '../components/NewsCard';

const data = [
    {
        id: 1,
        title: "Pivotal Studies of Covid-19 Vaccines From AstraZeneca, J&J Resuming - The Wall Street Journal",
        body: "Paused studies of leading Covid-19 vaccine candidates from AstraZeneca PLC and Johnson &amp; Johnson are resuming, the companies said Friday.\r\nThe restarts mean testing of two of the most advanced Co… [+233 chars]"

    },
    {
        id: 2,
        title: "Azerbaijani president lays out conditions for Armenia cease-fire - Fox News",
        body: "LONDON As fighting rages between Azerbaijan and Armenia over the disputed breakaway territory of Nagorno-Karabakh, with hundreds dead and fears regional powers Turkey and Russia could be pulled in, U… [+2528 chars]"

    },
    {
        id: 3,
        title: "With Debates Behind Them, Biden And Trump Enter The Final Stretch Before Election Day - NPR",
        body: "Former Vice President Joe Biden focuses on the coronavirus in an address Friday in Wilmington",

    },
    {
        id: 4,
        title: "Early iPhone 12 Tests Show Ceramic Shield is Stronger and More Scratch Resistant Than iPhone 11 Glass - MacRumors",
        body: "Apple's new iPhone 12 models are protected by a Ceramic Shield cover glass that has nano-ceramic crystals infused right into the glass to improve durability. According to Apple, Ceramic Shield offers… [+1963 chars]"

    },
]

const HomeScreen = ({ navigation }) => {

    navigation.setOptions({
        headerTitle: "Latest News",
        headerRight: () => {
            return (
                <View style={{paddingRight: 7}}>
                    <TouchableOpacity onPress={() => { }}>
                    </TouchableOpacity>
                </View>
            );
        },
        headerLeft: () => {
            return (
                <View style={{paddingLeft: 7}}>
                    <TouchableOpacity onPress={() => { }}>
                    </TouchableOpacity>
                </View>
            );
        }
    });
    return (
        <View style={styles.screen}>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.flatlist}>
                        <NewsCard
                            title={item.title}
                            body={item.body}
                            newsPress={() => navigation.navigate('News', {
                                news: item,
                                newsCategory:'GOV.UK',
                                newsTitle:item.title,
                                newsContent:item.body,
                                newsDate:'4 days ago',
                            })}
                        />
                    </View>

                )}
            />
        </View>
    );

};

export const screenOptions = {
    headerTitle: "Latest News"
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        // paddingHorizontal: '2%'
        // backgroundColor: 'green'
    },
    flatlist: {

    }
});

export default HomeScreen;
