import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  SafeAreaView,
  Image,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {RFPercentage} from 'react-native-responsive-fontsize';

import Flags from '../components/Flags';
import NewsCard from '../components/NewsCard';
import Margin from '../components/Margin';
import NavHeader from '../components/NavHeader';
import {announcementsUrl} from '../constants';
import {GET} from '../lib/requests';

const HomeScreen = ({navigation}) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [data, setData] = useState([]);

  const getData = async () => {
    console.log('hi');
    let dog = await GET({url: announcementsUrl}, (err, response) => {
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
    getData();
    setIsRefreshing(false);
  }, [isRefreshing]);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>Announcements</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <FontAwesomeIcon color="black" icon="bell" size={RFPercentage(3.6)} />
        </TouchableOpacity>
      </View>
      {/* <NavHeader backPress={()=> navigation.goBack()}/> */}
      <Flags />
      <View style={{padding: '2%', marginBottom: '10%'}}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          refreshing={isRefreshing}
          onRefresh={() => setIsRefreshing(true)}
          renderItem={({item}) => (
            <View style={styles.flatlistView}>
              <NewsCard
                title={item?.story?.title}
                body={item?.story?.description}
                newsPress={() =>
                  navigation.navigate('News', {
                    news: item,
                  })
                }
              />
              <Margin size={2} />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export const screenOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '2%',
  },
  headerText: {
    fontSize: RFPercentage(4),
    fontWeight: 'bold',
    fontFamily: 'Inter-Bold',
  },
  flatlistView: {},
});

export default HomeScreen;
