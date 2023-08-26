import React, {FC, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Geolocation from '@react-native-community/geolocation';
import moment from 'moment';
import FastImage from 'react-native-fast-image';

//icons

// helpers
import {colors, appstyle, fonts} from '../theme';
import {useCurrentMutation, useHourlyMutation} from '../api/weather';
import WeatherCard from './WeatherCard';
import CloudyCard from './CloudyCard';
import HourlyCard from './HourlyCard';

const {} = Dimensions.get('window');

const Home: FC = () => {
  const [activeTab, setActiveTab] = useState('Today');

  const insets = useSafeAreaInsets();

  useEffect(() => {
    Geolocation.getCurrentPosition(info => console.log(info));
  }, []);

  const [setCurrent, {isLoading, data, error}] = useCurrentMutation();
  const [setHourly, {data: hourlyData, isLoading: hourlyLoading}] =
    useHourlyMutation();

  useEffect(() => {
    setCurrent({
      lat: 28.6302755,
      lon: 77.3466113,
    });
  }, []);

  useEffect(() => {
    setHourly({
      lat: 28.6302755,
      lon: 77.3466113,
    });
  }, []);

  // useEffect(() => {
  //   if (hourlyData) {
  //     console.log(JSON.stringify(hourlyData));
  //   }
  // }, [hourlyData, hourlyLoading]);

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
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <ImageBackground
        source={{
          uri: 'https://source.unsplash.com/400x400?weather',
        }}
        imageStyle={styles.imageBackgroundImageStyle}
        style={{}}>
        <View
          style={[
            styles.imageBackground,
            {backgroundColor: 'rgba(0,0,0,0.4)'},
          ]}>
          <View style={[styles.header, {paddingTop: insets.top - 10}]}>
            <Text style={styles.headerText}>{data?.name}</Text>
            <Image
              source={{
                uri: 'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-1024.png',
              }}
              style={styles.headerIcon}
            />
          </View>

          <View style={[appstyle.rowBetween]}>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <Text
                style={{
                  fontFamily: fonts.bold,
                  color: colors.white,
                  fontSize: 70,
                }}>
                {Math.ceil(data?.main.temp ?? 0)}°
              </Text>
              <Text style={{fontFamily: fonts.regular, color: colors.white}}>
                Feels like {data?.main.feels_like}°
              </Text>
            </View>
            <View>
              <FastImage
                source={{
                  uri: `https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`,
                }}
                resizeMode="contain"
                style={{width: 'auto', height: 50}}
              />
              <Text style={{fontFamily: fonts.regular, color: colors.white}}>
                {data?.weather[0].main}
              </Text>
            </View>
          </View>
          <View style={[appstyle.rowBetween]}>
            <Text style={{fontFamily: fonts.medium, color: colors.white}}>
              {moment(new Date()).format('lll')}
            </Text>
            <View>
              <Text style={{fontFamily: fonts.regular, color: colors.white}}>
                Day -3°{' '}
              </Text>
              <Text style={{fontFamily: fonts.regular, color: colors.white}}>
                Night -1°
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      {/* <View style={styles.tabButtonsContainer}>{renderTabs()}</View> */}

      {/* <ScrollView>
        {[0, 1, 2, 3].map((_, index) => (
          <WeatherCard key={index.toString()} />
        ))}
      </ScrollView> */}

      {hourlyLoading && <ActivityIndicator color={colors.primary} />}
      {hourlyData?.list.map((item, index) => (
        <HourlyCard item={item} key={index.toString()} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  imageBackground: {
    width: 'auto',
    height: 300,
    justifyContent: 'space-between',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  imageBackgroundImageStyle: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
