
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Text, SafeAreaView, Image, ScrollView} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { RFPercentage } from 'react-native-responsive-fontsize';

import Flags from '../components/Flags';
import NewsCard from '../components/NewsCard';
import Margin from '../components/Margin';
import NavHeader from '../components/NavHeader';
import DropDownPicker from 'react-native-dropdown-picker';


const data = [
    {
        id: 1,
        title: "Pivotal Studies of Covid-19 Vaccines From AstraZeneca, J&J Resuming - The Wall Street Journal",
        body: "Paused studies of leading Covid-19 vaccine candidates from AstraZeneca PLC and Johnson "

    },
    {
        id: 2,
        title: "Azerbaijani president lays out conditions for Armenia cease-fire - Fox News",
        body: "LONDON As fighting rages between Azerbaijan and Armenia over the disputed breakaway "

    },
    {
        id: 3,
        title: "With Debates Behind Them, Biden And Trump Enter The Final Stretch Before Election Day - NPR",
        body: "Former Vice President Joe Biden focuses on the coronavirus in an address Friday in Wilmington",

    },
    {
        id: 4,
        title: "Early iPhone 12 Tests Show Ceramic Shield is Stronger and More Scratch Resistant Than iPhone 11 Glass - MacRumors",
        body: "Apple's new iPhone 12 models are protected by a Ceramic Shield cover glass that has nano-ceramic crystals infused right "

    },
]

const HomeScreen = ({ navigation }) => {

    const [isRefreshing, setIsRefreshing] = useState(false)

    useEffect(() => {
        setIsRefreshing(false)
    }, [isRefreshing]);

    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.headerView}>
                <Text style={styles.headerText}>Announcements</Text>

            </View>
            {/* <NavHeader backPress={()=> navigation.goBack()}/> */}
            <DropDownPicker
                items={[
                    {label: 'English', value: 'item1'},
                    {label: 'Somali', value: 'item2'},
                ]}
                defaultIndex={1}
                defaultValue="item1"
                containerStyle={{height: 40}}
                onChangeItem={item => console.log(item.label, item.value)}
            />
            <ScrollView style={{ padding: '2%', marginBottom: '10%' }}>
                <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    refreshing={isRefreshing}
                    onRefresh={() => setIsRefreshing(true)}
                    renderItem={({ item }) => (
                        <View style={styles.flatlistView}>
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
                            <Margin size={2} />
                        </View>

                    )}
                />
            </ScrollView>

        </SafeAreaView>

    );

};

// onPress={() => navigation.navigate('Notification')
export const screenOptions = {

  headerStyle: {
      backgroundColor: '#FDD670',
      shadowColor: 'transparent'
    },
  title: '',
  headerShown: true,
  headerRight:   () => (
    <TouchableOpacity >
        <FontAwesomeIcon color="" icon="bell" size={RFPercentage(3)} />
    </TouchableOpacity>
  ),

};



const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor:'white'
    },
    headerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '2%',
        paddingVertical: '5%'

    },
    headerText: {
        fontSize: RFPercentage(5.5),
        alignItems: 'center',
        fontFamily: 'DMSerifDisplay-Regular',

    },
    flatlistView: {
    }
});

export default HomeScreen;
