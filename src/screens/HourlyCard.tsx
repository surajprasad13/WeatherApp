import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {HourlyListItem} from '../types/weather';

interface HourlyCardProp {
  item: HourlyListItem;
}

const HourlyCard: FC<HourlyCardProp> = ({item}) => {
  return (
    <View>
      <Text>HourlyCard</Text>
    </View>
  );
};

export default HourlyCard;
