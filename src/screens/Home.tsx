import React, {FC, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {colors, appstyle} from '../theme';

const Home: FC = () => {
  const [activeTab, setActiveTab] = useState('Today');

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
    borderBottomLeftRadius: 40,
    minHeight: 300,
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
    fontWeight: '600',
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
    marginHorizontal: 20,
    marginTop: 20,
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
