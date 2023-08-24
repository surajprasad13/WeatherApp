import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

//icons
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors, fonts, appstyle} from '../theme';

const WeatherCard = () => {
  return (
    <View style={styles.innerCard}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            ...appstyle.shadow,
            padding: 10,
            borderRadius: 100,
          }}>
          <Feather name="wind" size={15} />
        </View>
        <View style={{padding: 5}}>
          <Text style={{fontFamily: fonts.regular}}>Wind Speed</Text>
          <Text
            style={{
              fontFamily: fonts.medium,
              fontSize: 15,
              marginTop: 5,
            }}>
            120/hr
          </Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'flex-end',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <AntDesign name="caretdown" size={10} color={colors.red} />
        <Text style={{textAlign: 'right'}}>2km/hr</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  innerCard: {
    ...appstyle.shadow,
    margin: 7,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#F6EDFF',
    flex: 1,
    justifyContent: 'center',
  },
});

export default WeatherCard;
