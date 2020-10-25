import React, { useState } from 'react';
import {
	View,
	ScrollView,
	StyleSheet,
	Dimensions,
	ImageBackground,
} from 'react-native';
import TextComponent from '../components/TextComponent';
import DropDownPicker from 'react-native-dropdown-picker';
import HTML from 'react-native-render-html';
import NavHeader from '../components/NavHeader';
import Margin from '../components/Margin';

const NewsScreen = ({ route, navigation }) => {
	const { newsTitle, newsCategory, newsContent, news } = route.params;
	const [language, setLanguage] = useState('Somali');
	console.log(news.index);
	return (
		<View style={styles.screen}>

			<View style={{ flex: 1 }}>
				<ImageBackground
					style={{ flex: 1 }}
					source={{
						uri: news?.image,
					}}
				>
					<Margin size={4}/>
					<NavHeader sharePress={() => { }} backPress={() => navigation.goBack()} />

				</ImageBackground>
			</View>
			<DropDownPicker
				items={[
					{ label: 'Somali', value: 'Somali' },
					{ label: 'English', value: 'English' },
				]}
				defaultIndex={1}
				defaultValue="Somali"
				containerStyle={{ height: 40 }}
				onChangeItem={(item) => setLanguage(item.value)}
			/>
			<View style={{ flex: 2, paddingHorizontal: '6%' }}>
				<TextComponent
					title={
						language === 'Somali'
							? news?.somaliStory?.title
							: news?.story?.title
					}
					colour={'black'}
					size={30}
					align={'center'}
					weight={'bold'}
				/>
				<View
					style={{
						flexDirection: 'row',
						paddingVertical: '6%',
						textAlign: 'center',
					}}>
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
					<HTML
						html={
							language === 'Somali'
								? news?.somaliStory?.body
								: news?.story?.body
						}
						imagesMaxWidth={Dimensions.get('window').width}
					/>

					{/* <TextComponent
            title={}
            colour={'black'}
            size={15}
            flex={4}
            align={'justify'}
          /> */}
				</ScrollView>
			</View>
		</View>
	);
};

export const screenOptions = {
	headerStyle: {
		backgroundColor: '#FDD670',
		shadowColor: 'transparent',
	},
	title: '',
	headerShown: false,
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: 'white',
	},
});

export default NewsScreen;
