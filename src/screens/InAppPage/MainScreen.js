import { StyleSheet, ScrollView, SafeAreaView, View } from 'react-native';
import React from 'react';

import { MainBannerImage } from "../../models/data/BannerImages";
import { BannerCarousel, AddressHeader, MainCategoriesComponent, AppBar } from '../../components';
import { MainCategories } from "../../models/data/Categories";
import { Colors } from '../../constants';

const MainScreen = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <SafeAreaView style={styles.container}>
        <AppBar title={"Main Sayfa"} />
        <AddressHeader />
        <BannerCarousel data={MainBannerImage} />
        <MainCategoriesComponent data={MainCategories} />
      </SafeAreaView>
    </ScrollView>
  )
}

export default MainScreen;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND_COLOR,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
