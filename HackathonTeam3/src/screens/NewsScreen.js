import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Text} from 'react-native';
import TextComponent from '../components/TextComponent';
import DropDownPicker from 'react-native-dropdown-picker';
const NewsScreen = ({route, navigation}) => {
const { newsTitle , newsCategory, newsContent, news} = route.params;


    return (
        <View style={styles.screen}>
        <View style={{flex: 1,backgroundColor: '#FDD670'}} />
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
        <View style={{flex: 3, paddingHorizontal: '6%', }}>

          <TextComponent
              title={newsTitle}
              colour={'black'}
              size={30}
              align={'center'}
              weight={'bold'}
          />
          <View style={{flexDirection:'row', paddingVertical: '6%', textAlign:'center'}}>
            <TextComponent
                title={newsCategory}
                colour={'grey'}
                size={15}
                align={'left'}
                flex={1}
            />
            <TextComponent
                title={'2 days ago'}
                colour={'grey'}
                size={15}
                flex={1}
                align={'right'}
            />
          </View>
          <ScrollView>
          <TextComponent
              title={'It continues to be the aim that all pupils, in all year groups, remain in school full-time throughout the autumn term.This guidance is intended to support schools, both mainstream and alternative provision, to prepare for this. It applies to primary, secondary (including sixth forms), post-16 academies, infant, junior, middle, upper, school-based nurseries and boarding schools. We expect independent schools to follow the control measures set out in this document in the same way as state-funded schools. The guidance also covers expectations for children with special educational needs and disability (SEND), including those with education, health and care plans, in mainstream schools.'}
              colour={'black'}
              size={15}
              flex={4}
              align={'justify'}
          />
          </ScrollView>
        </View>

        </View>
    );

};

export const screenOptions = {

  headerStyle: {
      backgroundColor: '#FDD670',
      shadowColor: 'transparent'
    },
  title: '',
  headerShown: true,

};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white'
    }
});


export default NewsScreen;
