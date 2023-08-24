import React, {FC, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

//icons

// helpers
import {colors, appstyle, fonts} from '../theme';
import {useCurrentMutation} from '../api/weather';
import WeatherCard from './WeatherCard';
import CloudyCard from './CloudyCard';

const Home: FC = () => {
  const [activeTab, setActiveTab] = useState('Today');

  Geolocation.getCurrentPosition(info => console.log(info));

  // const [setCurrent, {isLoading, data, error}] = useCurrentMutation();

  // useEffect(() => {
  //   setCurrent({
  //     lat: 57,
  //     lon: -2.15,
  //   });
  // }, []);

  const data = [0, 1, 2, 3];

  const renderTabs = () => {
    return ['Today', 'Tomorrow', '10 Days'].map(tabTitle => (
      <TouchableOpacity
        key={tabTitle}
        style={[
          styles.tabButton,
          activeTab === tabTitle && styles.activeTabButton,
        ]}
        onPress={() => setActiveTab(tabTitle)}>
        <Text style={[activeTab === tabTitle && styles.activeTabButtonText]}>
          {tabTitle}
        </Text>
      </TouchableOpacity>
    ));
  };

  return (
    <ScrollView>
      <ImageBackground
        source={{
          uri: 'https://source.unsplash.com/400x400?weather',
        }}
        imageStyle={styles.imageBackgroundImageStyle}
        style={styles.imageBackground}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Hello Weather</Text>
          <Image
            source={{
              uri: 'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-1024.png',
            }}
            style={styles.headerIcon}
          />
        </View>
      </ImageBackground>
      <View style={styles.tabButtonsContainer}>{renderTabs()}</View>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({item, index}) => <WeatherCard />}
        keyExtractor={(item, index) => index.toString()}
      />

      <FlatList
        data={data}
        renderItem={({item, index}) => <CloudyCard />}
        keyExtractor={(item, index) => index.toString()}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageBackground: {
    width: 'auto',
    height: 300,
    borderBottomLeftRadius: 40,
  },
  imageBackgroundImageStyle: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  headerText: {
    fontFamily: fonts.semibold,
    color: colors.white,
    fontSize: 16,
  },
  headerIcon: {
    width: 20,
    height: 20,
    tintColor: 'white',
  },
  tabButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 14,
    ...appstyle.shadow,
  },
  activeTabButton: {
    backgroundColor: colors.primary,
  },

  activeTabButtonText: {
    color: colors.white,
  },
  tabContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
