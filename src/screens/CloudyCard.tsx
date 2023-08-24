import {View, Text} from 'react-native';
import React from 'react';

//icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

//helpers
import {fonts, colors, appstyle} from '../theme';

const CloudyCard = () => {
  return (
    <View
      style={{
        ...appstyle.shadow,
        margin: 10,
        padding: 10,
        backgroundColor: '#F6EDFF',
        borderRadius: 10,
      }}>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            ...appstyle.shadow,
            padding: 10,
            borderRadius: 100,
          }}>
          <MaterialCommunityIcons name="hours-24" size={20} />
        </View>
        <Text style={{fontFamily: fonts.regular, fontSize: 16, padding: 10}}>
          Hourly forecast
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        {[0, 1, 2, 3, 4].map((item, index) => (
          <Text key={index} style={{fontFamily: fonts.regular, fontSize: 12}}>
            10 AM
          </Text>
        ))}
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        {[0, 1, 2, 3, 4].map((item, index) => (
          <Feather
            key={index}
            name="cloud-rain"
            size={25}
            color={index % 2 === 0 ? 'grey' : 'orange'}
          />
        ))}
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        {[0, 1, 2, 3, 4].map((item, index) => (
          <Text key={index} style={{fontFamily: fonts.regular, fontSize: 16}}>
            10°
          </Text>
        ))}
      </View>
    </View>
  );
};

export default CloudyCard;
