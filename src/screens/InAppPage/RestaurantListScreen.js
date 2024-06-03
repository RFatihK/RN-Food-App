import React from 'react';
import { StyleSheet, Text, FlatList, TouchableOpacity, Image, Dimensions, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Colors } from '../../constants';
import { restaurantsData } from '../../models/data/restaurantsData';

const SCREEN_WIDTH = Dimensions.get('window').width;

const RestaurantListScreen = () => {
    const navigation = useNavigation();

    const renderItem = ({ item }) => {
        const handlePress = () => {
            navigation.navigate('RestaurantHomeScreen', { id: item.id, restaurant: item });
        };
        
        return (
            <TouchableOpacity style={styles.restaurantCard} onPress={handlePress}>
                <Image
                    source={{ uri: item.businessimages }}
                    style={styles.restaurantImage}
                />
                <View style={styles.restaurantDetails}>
                    <Text style={styles.restaurantName}>{item.restaurantName}</Text>
                    <Text style={styles.restaurantDescription}>{item.businessDescription}</Text>
                    <Text style={styles.restaurantDistance}>{item.farAway} km uzaklıkta</Text>
                    <Text style={styles.restaurantDistance}>Tahmini teslimat {item.deliveryTime} dakika</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <FlatList
            data={restaurantsData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.restaurantList}
        />
    );
};    

const styles = StyleSheet.create({
    restaurantList: {
        paddingVertical: 16,
    },
    restaurantCard: {
        width: SCREEN_WIDTH * 1.1,
        height: SCREEN_WIDTH * 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: Colors.DARK_FIVE,
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    restaurantImage: {
        width: SCREEN_WIDTH * 0.4,
        height: SCREEN_WIDTH * 0.4,
        borderRadius: 10,
        marginRight: 12,
    },
    restaurantDetails: {
        flex: 1,
    },
    restaurantName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    restaurantDescription: {
        fontSize: 16,
        marginBottom: 6,
    },
    restaurantDistance: {
        fontSize: 14,
        color: Colors.gray,
    },
});

export default RestaurantListScreen;
