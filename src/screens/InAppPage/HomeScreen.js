import React from 'react';
import { StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native';

import { HomeBannerImage } from '../../models/data/BannerImages';
import { HomeCategories } from "../../models/data/Categories";
import WeatherScreen from "./WeatherScreen"
import { BannerCarousel, AppBar, AddressHeader, MainCategoriesComponent } from '../../components';
import { Colors } from '../../constants';
import RestaurantListScreen from './RestaurantListScreen';


const HomeScreen = () => {
  

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>

        <AppBar title={"Ana Sayfa"} />
        <BannerCarousel data={HomeBannerImage} />
        <AddressHeader />
        <WeatherScreen/>
  
        <RestaurantListScreen/>


      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5D3EBD',
  },
});

export default HomeScreen;
