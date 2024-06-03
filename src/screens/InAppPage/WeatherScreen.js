import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import * as Location from 'expo-location';
import moment from 'moment-timezone';
import 'moment/locale/tr'; 
import { Colors } from '../../constants';

moment.locale('tr');

const API_KEY = '49cc8c821cd2aff9af04c9f98c36eb74';

export default function App() {
  const [data, setData] = useState({});
  const [locationInfo, setLocationInfo] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async (latitude, longitude) => {
      if (latitude && longitude) {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`)
          .then(res => res.json())
          .then(data => {
            setData(data);
          });
      }
    };

    const getLocationAndWeather = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        fetchDataFromApi("40.7128", "-74.0060");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      fetchDataFromApi(location.coords.latitude, location.coords.longitude);

      Location.reverseGeocodeAsync({ latitude: location.coords.latitude, longitude: location.coords.longitude })
        .then((locationData) => {
          setLocationInfo(locationData[0]);
        });
    };

    getLocationAndWeather();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.locationText}>{locationInfo ? `${locationInfo.city}, ${locationInfo.country}` : ''}</Text>
      <WeatherForecastScroll weatherData={data.daily} />
      <StatusBar style="auto" />
    </View>
  );
}

const WeatherForecastScroll = ({ weatherData }) => {
  return (
    <ScrollView horizontal={true} style={styles.scrollView}>
      {weatherData && weatherData.slice(0, 7).map((data, idx) => (
        <ForecastItem key={idx} forecast={data} />
      ))}
    </ScrollView>
  );
};

const ForecastItem = ({ forecast }) => {
  const img = { uri: `http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png` };
  return (
    <View style={styles.forecastItemContainer}>
      <Text style={styles.day}>{moment(forecast.dt * 1000).format('dddd')}</Text>
      <Image source={img} style={styles.image} />
      <Text style={styles.temperature}>Gece : {forecast.temp.night} &#176;C</Text>
      <Text style={styles.temperature}>Gün : {forecast.temp.day} &#176;C</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  locationText: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 10,
    fontSize: 16,
    color: Colors.GETIR_PURPLE,
    fontWeight: 'bold',
  },
  scrollView: {
    width: '100%',
    height: '33%',
    paddingVertical: 20,
    
  },
  forecastItemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    backgroundColor: 'rgba(24, 24, 27, 0.8)',
    borderRadius: 10,
    marginHorizontal: 10,
    paddingVertical: 20,
  },
  day: {
    fontSize: 16,
    color: "white",
    backgroundColor: "#3c3c44",
    padding: 10,
    textAlign: "center",
    borderRadius: 50,
    fontWeight: "200",
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  temperature: {
    fontSize: 14,
    color: "white",
    fontWeight: "100",
    textAlign: "center",
  },
});
