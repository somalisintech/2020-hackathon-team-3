import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {RFPercentage} from 'react-native-responsive-fontsize';

import Flags from '../components/Flags';
import NewsCard from '../components/NewsCard';
import Margin from '../components/Margin';
import NavHeader from '../components/NavHeader';
import DropDownPicker from 'react-native-dropdown-picker';
import {GET} from '../lib/requests';
import {announcementsUrl} from '../constants';

const HomeScreen = ({navigation}) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [data, setData] = useState([]);
  const [language, setLanguage] = useState('Somali');

  const getData = async () => {
    await GET({url: announcementsUrl}, (err, response) => {
      if (err) {
        throw err;
      }
      setData(response);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setIsRefreshing(false);
  }, [isRefreshing]);

  useEffect(() => {
    setIsRefreshing(false);
  }, [isRefreshing]);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>Announcements</Text>
      </View>
      {/* <NavHeader backPress={()=> navigation.goBack()}/> */}
      <DropDownPicker
        items={[
          {label: 'Somali', value: 'Somali'},
          {label: 'English', value: 'English'},
        ]}
        defaultIndex={1}
        defaultValue="Somali"
        containerStyle={{height: 40}}
        onChangeItem={(item) => setLanguage(item.value)}
      />
      <ScrollView style={{padding: '2%', marginBottom: '10%'}}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          refreshing={isRefreshing}
          onRefresh={() => setIsRefreshing(true)}
          renderItem={({item}) => (
            <View style={styles.flatlistView}>
              <NewsCard
                title={
                  language === 'Somali'
                    ? item?.somaliStory?.title
                    : item?.story?.title
                }
                body={
                  language === 'Somali'
                    ? item?.somaliStory?.description
                    : item?.story?.description
                }
                readMore={
                  language === 'Somali' ? 'Akhri wax dheeraad ah' : 'Read More'
                }
                newsPress={() =>
                  navigation.navigate('News', {
                    news: item,
                    newsCategory: 'GOV.UK',
                    newsTitle: item.title,
                    newsContent: item.body,
                    newsDate: '4 days ago',
                  })
                }
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
    shadowColor: 'transparent',
  },
  title: '',
  headerShown: true,
  headerRight: () => (
    <TouchableOpacity>
      <FontAwesomeIcon color="" icon="bell" size={RFPercentage(3)} />
    </TouchableOpacity>
  ),
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '2%',
    paddingVertical: '5%',
  },
  headerText: {
    fontSize: RFPercentage(5.5),
    alignItems: 'center',
    fontFamily: 'DMSerifDisplay-Regular',
  },
  flatlistView: {},
});

export default HomeScreen;
