import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList, TextInput, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';

import { RestaurantHeader, ProductCard, AppBar } from '../../components';
import { restaurantsData } from '../../models/data/restaurantsData';
import { Colors } from '../../constants';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const SCREEN_WIDTH = Dimensions.get('window').width;
const RestaurantHomeScreen = ({ navigation, route }) => {
    const { id } = route.params;
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    const handleSearch = (query) => {
        setSearchQuery(query);
        const filtered = restaurantsData[id].productData.filter((item) =>
            item.ProductName.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    const products = searchQuery ? filteredProducts : restaurantsData[id].productData;

    return (
        <KeyboardAwareScrollView extraScrollHeight={100}>
            <View style={styles.container}>
                <AppBar />
                <RestaurantHeader id={id} navigation={navigation} />
                <View style={styles.view2}>
                    <View style={styles.view3}>
                        <Text style={styles.text2}>{restaurantsData[id].restaurantName}</Text>
                        <Text style={styles.text3}>{restaurantsData[id].businessDescription}</Text>
                        <Text style={styles.text3}>{restaurantsData[id].foodType}</Text>
                        <View style={styles.view4}>
                            <Icon name="map-marker" type="material-community" color={Colors.GETIR_PURPLE} size={15} />
                            <Text style={styles.text5}>{restaurantsData[id].businessAddress.businessCity}</Text>
                            <Text style={styles.text5}>{restaurantsData[id].businessAddress.businessDistrict}</Text>
                            <Text style={styles.text5}>{restaurantsData[id].businessAddress.businessNeighborhood}</Text>
                        </View>
                    </View>
                    <View style={styles.view5}>
                        <View style={styles.view7}>
                            <Text style={styles.text6}>{restaurantsData[id].farAway} mi uzaklıkta</Text>
                        </View>
                    </View>
                    <View style={styles.view8}>
                        <Text style={styles.text6}>Teslimat</Text>
                        <View style={styles.view9}>
                            <Text style={styles.text9}>{restaurantsData[id].deliveryTime}</Text>
                            <Text style={styles.text11}>dk</Text>
                        </View>
                    </View>
                </View>
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
                    data={products}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <ProductCard
                            id={item.id}
                            ProductName={item.ProductName}
                            productDetail={item.productDetail}
                            Price={item.Price}
                            productImage={item.productImage}
                            navigate={() => { }}
                        />
                    )}
                />

            </View>
        </KeyboardAwareScrollView>
    );
}

export default RestaurantHomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view2: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
    },
    view3: {
        flex: 8,
    },
    text2: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.GETIR_PURPLE,
    },
    text3: {
        fontSize: 15,
        color: Colors.black,
    },
    view4: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    text5: {
        fontSize: 15,
        color: Colors.black,
        marginLeft: 5
    },
    text6: {
        fontSize: 15,
        color: Colors.black,
        marginLeft: 5
    },
    view5: {
        flex: 3,
        alignItems: 'center'
    },
    view7: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    view8: {
        flex: 3,
        alignItems: 'center'
    },
    text9: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Colors.black
    },
    text11: {
        fontSize: 15,
        color: Colors.black
    },
    view9: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e3e3e3',
        padding: 10,
        marginHorizontal: 20,
        borderRadius: 10,
        marginTop: 10,
    },
    input: {
        marginLeft: 10,
        flex: 1,
    },
});
