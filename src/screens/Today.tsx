import React, {FC} from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';

const Card = () => {
  return (
    <View style={styles.card}>
      <Image
        source={{uri: 'https://example.com/your-image-url.jpg'}}
        style={styles.image}
      />
      <Image
        source={{uri: 'https://source.unsplash.com/400x400?weather'}}
        style={{
          width: 20,
          height: 20,
          borderRadius: 10,
        }}
      />
      <Text>Wind Speed</Text>
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
    flex: 1,
    margin: 10,
    marginTop: 10,
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
  },
  image: {
    width: 150,
    height: 50,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default Today;
