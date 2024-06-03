import React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { Colors, Images } from '../constants';

export default function FoodCard({
    onPressFoodCard,
    restaurantName = "Restaurant Name",
    farAway = 0,
    businessAddress = "Business Address",
    averageReview = 0,
    numberOfReview = 0,
    images = Images.AVATAR,
}) {
    return (
        <TouchableOpacity onPress={onPressFoodCard}>
            <View style={[styles.cardView, { width: screenWidth }]}>
                <Image
                    style={styles.image}
                    source={images}
                />
                <View style={styles.infoContainer}>
                    <Text style={styles.restaurantName}>{restaurantName}</Text>
                    <View style={styles.detailsContainer}>
                        <View style={styles.distance}>
                            <Icon
                                name='place'
                                type='material'
                                color={Colors.grey}
                                size={18}
                                iconStyle={{
                                    marginRight: 5
                                }}
                            />
                            <Text style={styles.distanceText}>{farAway} Min</Text>
                        </View>
                        <Text style={styles.address}>{businessAddress}</Text>
                    </View>
                </View>
                <View style={styles.review}>
                    <Text style={styles.average}>{averageReview}</Text>
                    <Text style={styles.numberOfReview}>{numberOfReview} reviews</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardView: {
        marginHorizontal: 9,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'white',
        flexDirection: 'row',
        elevation: 3,
    },
    image: {
        width: 120,
        height: 120,
        resizeMode: 'cover',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    infoContainer: {
        flex: 1,
        padding: 10,
    },
    restaurantName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.black,
        marginBottom: 5,
    },
    detailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    distance: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    distanceText: {
        fontSize: 14,
        color: Colors.grey2,
    },
    address: {
        flex: 1,
        fontSize: 14,
        color: Colors.grey2,
    },
    review: {
        position: "absolute",
        top: 10,
        right: 10,
        backgroundColor: Colors.DARK_TWO,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    average: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: 'bold',
    },
    numberOfReview: {
        color: Colors.white,
        fontSize: 12,
    }
});
