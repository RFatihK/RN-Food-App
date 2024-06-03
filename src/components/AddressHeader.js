import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import * as Location from 'expo-location';

const { height } = Dimensions.get('window');

const AddressHeader = () => {
  const [locationInfo, setLocationInfo] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') return;

      let location = await Location.getCurrentPositionAsync({});

      Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      }).then((locationData) => {
        setLocationInfo(locationData[0]);
      });
    })();
  }, []);

  return (
    <View testID="header-main" style={styles.headerMain}>
      <View style={styles.headerOne}>
        <Image style={styles.image} source={{ uri: "https://cdn.getir.com/misc/emoji/house.png" }} />
        <View style={styles.headerOneView}>
          <Text testID="place-text" style={{ fontWeight: '600', fontSize: 16 }}>Ev</Text>
          <Text style={{ fontWeight: '500', fontSize: 11.5, color: '#6E7480', marginLeft: 6, marginRight: 3 }}>
            {locationInfo ? `${locationInfo.subregion}, ${locationInfo.region}, ${locationInfo.city}` : 'Konum Bilgisi Yok'}
          </Text>
          <Entypo testID="right-icon" name="chevron-right" size={22} color="#5D3EBD" />
        </View>
      </View>
      <View style={styles.headerTwo}>
        <Text style={styles.text} >TVS</Text>
        <Text style={styles.text} >
          13<Text style={styles.text} >dk</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerMain: {
    height: height * 0.064,
    flexDirection: 'row',
    backgroundColor: '#F7D102',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerOne: {
    height: height * 0.064,
    width: '81%',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '3%',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  image: {
    height: 30,
    width: 30,
  },
  headerOneView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
    paddingLeft: 8,
    borderLeftColor: '#F3F2FD',
    borderLeftWidth: 2,
    height: height * 0.035,
  },
  headerTwo: {
    width: '20%',
    height: height * 0.065,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingRight: 10,
  },
  text: {
    fontSize: 16, color: '#5D3EBD', fontWeight: 'bold', textAlign: 'center'
  }
});

export default AddressHeader;
