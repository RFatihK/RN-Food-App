import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import { restaurantsData } from '../models/data/restaurantsData';
import { Colors } from "../constants";

export default function RestaurantHeader({ id }) {

    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.imageBackground}
                source={{ uri: restaurantsData[id].businessimages }}
            >
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 300,
    },
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        width: 40,
        height: 40,
        backgroundColor: Colors.light,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
    },
});
