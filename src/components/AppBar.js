import React from 'react';
import { Dimensions, View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons';
import { useSelector } from 'react-redux'; 
import { Images } from '../constants';
const { width, height } = Dimensions.get('window');

const AppBar = ({ title }) => {
    const navigation = useNavigation();
    
    const basketItems = useSelector(state => state.basket.items);
    const totalPrice = basketItems.reduce((total, item) => total + item.Price * item.quantity, 0);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.backButton}
            >
                <Feather name="chevron-left" size={24} color="white" />
            </TouchableOpacity>

            <Text style={styles.titleText}>{title}</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Basket")}
                style={styles.cartButton}
            >
                <View style={styles.priceContainer}>
                    <View style={styles.cartIconContainer}>
                        <Image
                            style={styles.cartIcon}
                            source={Images.cart}
                        />
                    </View>
                    <Text style={styles.priceText}>
                        {totalPrice.toFixed(2)}{"\u20BA"}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#5C3EBC',
        width: width,
        height: height * 0.055,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    titleText: {
        fontWeight: "bold",
        fontSize: 15,
        color: "white",
    },
    cartButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#F3EFFE",
        height: 30,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    cartIconContainer: {
        marginRight: 5,
    },
    cartIcon: {
        width: 23,
        height: 23,
    },
    priceText: {
        color: "#5D3EBD",
        fontWeight: "bold",
        fontSize: 12,
    },
});

export default AppBar;
