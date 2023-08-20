import React from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';

//icons
import Feather from 'react-native-vector-icons/Feather';

//helpers
import {colors, appstyle, fonts} from '../theme';

const Card = () => {
  return (
    <View style={styles.card}>
      <View
        style={{
          width: 30,
          height: 30,
          borderRadius: 15,
          margin: 5,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <Feather name="wind" size={12} />
      </View>
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 12,
            fontFamily: fonts.semibold,
            color: colors.black,
            margin: 5,
          }}>
          Wind Speed
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 12,
            fontFamily: fonts.semibold,
            color: colors.black,
            margin: 5,
          }}>
          12 KM/hr
        </Text>
      </View>
    </View>
  );
};

const Today: FC = () => {
  const data = [1, 2, 3, 4];

  const renderItem = ({item}) => (
    <View style={styles.column}>
      <Card />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.toString()}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  card: {
    backgroundColor: 'rgba(208, 188, 255, 0.3)',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    margin: 5,
    height: 80,
    width: 170,

    flexDirection: 'row',
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default Today;
