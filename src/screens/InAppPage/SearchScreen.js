import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { restaurantsData } from "../../models/data/restaurantsData";
import { AppBar } from '../../components';
import { Colors } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const SearchScreen = () => {
    const navigation = useNavigation();

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantsData);

    const handleSearch = (query) => {
        setSearchQuery(query);
        if (query.trim() === '') {
            setFilteredRestaurants(restaurantsData);
        } else {
            const filtered = restaurantsData.filter((restaurant) => {
                const isRestaurantMatch = restaurant.restaurantName.toLowerCase().includes(query.toLowerCase());
                const isProductMatch = restaurant.productData.some((product) =>
                    product.ProductName.toLowerCase().includes(query.toLowerCase())
                );
                return isRestaurantMatch || isProductMatch;
            });
            setFilteredRestaurants(filtered);
        }
    };

    const sortedRestaurants = filteredRestaurants.slice().sort((a, b) => a.farAway - b.farAway);

    const handlePress = (item) => {
        navigation.navigate('RestaurantHomeScreen', { id: item.id, restaurant: item });
    };

    return (
        <View style={styles.container}>
            <AppBar title={"Arama Sayfası"} />
            <View style={styles.space}></View>
            <View style={styles.searchBar}>
                <FontAwesome name="search" size={24} color="black" />
                <TextInput
                    style={styles.input}
                    placeholder="Restoran Ara..."
                    value={searchQuery}
                    onChangeText={handleSearch}
                />
            </View>

            <FlatList
                data={sortedRestaurants}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handlePress(item)}>
                        <View style={styles.restaurantCard}>
                            <Text>{item.restaurantName}</Text>
                            <Text>   </Text>
                            <Text>Uzaklık: {item.farAway}</Text>
                            <FlatList
                                data={item.productData.slice(0, 5)}
                                renderItem={({ item }) => (
                                    <View style={styles.productItem}>
                                        <Text>{item.ProductName}</Text>
                                    </View>
                                )}
                                keyExtractor={(item) => item.id.toString()}
                            />
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    space: {
        height: 20,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    input: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    restaurantCard: {
        width: SCREEN_WIDTH,
        height: SCREEN_WIDTH * 0.3,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: Colors.DARK_FIVE,
        paddingHorizontal: 16,
        paddingVertical: 12,
        justifyContent: 'space-between',
    },
});
