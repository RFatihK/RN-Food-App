import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import * as Location from 'expo-location';
import Carousel from 'react-native-snap-carousel';
import { restaurantsData } from "../../models/data/restaurantsData";
import { AppBar } from '../../components';

export default class MapsScreen extends Component {
  state = {
    initialPosition: null,
    markers: [],
    coordinates: [],
  };

  componentDidMount() {
    this.requestLocationPermission();
  }

  requestLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status === 'granted') {
      this.locateCurrentPosition();
    } else {
      alert('Permission to access location was denied');
    }
  };

  locateCurrentPosition = async () => {
    try {
      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      this.setState({
        initialPosition: {
          latitude,
          longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.035,
        },
        coordinates: restaurantsData.map((restaurant) => ({
          name: restaurant.restaurantName,
          latitude: restaurant.coordinates.lat,
          longitude: restaurant.coordinates.lng,
          image: { uri: restaurant.businessimages },
          icon: require('../../assets/images/marker.png'),
        })),
      });
    } catch (error) {
      alert(error.message);
    }
  };

  onMarkerPressed = (index) => {
    this._carousel.snapToItem(index);
  };

  onCarouselItemPressed = (index) => {
    const restaurant = this.state.coordinates[index];
    const newRegion = {
      latitude: restaurant.latitude,
      longitude: restaurant.longitude,
      latitudeDelta: 0.09,
      longitudeDelta: 0.035,
    };
    this.mapView.animateToRegion(newRegion);
  };

  goToCurrentPosition = async () => {
    try {
      const location = await Location.getCurrentPositionAsync({});
      const initialPosition = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.09,
        longitudeDelta: 0.035,
      };
      this.mapView.animateToRegion(initialPosition);
    } catch (error) {
      alert(error.message);
    }
  };

  renderCarouselItem = ({ item, index }) => (
    <TouchableOpacity onPress={() => this.onCarouselItemPressed(index)}>
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Image style={styles.cardImage} source={item.image} />
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={styles.container}>
        <AppBar title={"Harita Sayfası"} />
        {this.state.initialPosition ? (
          <MapView
            ref={(map) => (this.mapView = map)}
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={this.state.initialPosition}>
            {this.state.coordinates.map((marker, index) => (
              <Marker
                key={index}
                coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                onPress={() => this.onMarkerPressed(index)}>
                <Image source={marker.icon} style={{ width: 45, height: 45 }} />
                <Callout>
                  <View style={styles.calloutContainer}>
                    <Text style={styles.calloutText}>{marker.name}</Text>
                    <Image style={styles.calloutImage} source={marker.image} />
                  </View>
                </Callout>
              </Marker>
            ))}
            <Marker
              coordinate={{
                latitude: this.state.initialPosition.latitude,
                longitude: this.state.initialPosition.longitude,
              }}
              title="Konumunuz">
              <Image source={require('../../assets/images/map_marker.png')} style={{ width: 32, height: 32 }} />
            </Marker>
          </MapView>
        ) : (
          <Text>Loading...</Text>
        )}
        <TouchableOpacity style={styles.goToButton} onPress={this.goToCurrentPosition}>
          <Text style={styles.buttonText}>Konumunuza Git</Text>
        </TouchableOpacity>
        <Carousel
          ref={(c) => {
            this._carousel = c;
          }}
          data={this.state.coordinates}
          containerCustomStyle={styles.carousel}
          renderItem={this.renderCarouselItem}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={300}
          removeClippedSubviews={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  carousel: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 48,
  },
  cardContainer: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    height: 200,
    width: 300,
    padding: -12,
    borderRadius: 24,
  },
  cardImage: {
    height: 150,
    width: 300,
    bottom: 0,
    position: 'absolute',
  },
  cardTitle: {
    color: 'white',
    fontSize: 22,
    alignSelf: 'center',
  },
  calloutContainer: {
    alignItems: 'center',
  },
  calloutText: {
    marginBottom: 5,
  },
  calloutImage: {
    width: 150,
    height: 150,
  },
  goToButton: {
    position: 'absolute',
    top: 60,
    right: 10,
    backgroundColor: '#5D3EBD',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
  },
});
