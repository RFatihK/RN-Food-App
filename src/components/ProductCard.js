import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../store/basketSlice'; 

import { Colors, Images } from '../constants';

const ProductCard = ({
    id = 'İd',
    ProductName = 'Ürün Adı',
    productDetail = 'Ürün Açıklaması',
    Price = '100.00',
    productImage, 
    navigate = () => { }
}) => {
    const [itemCount, setItemCount] = useState(0);
    const dispatch = useDispatch(); 

    const addToCart = () => {
        dispatch(addToBasket({ 
            id: id,
            ProductName: ProductName,
            productDetail: productDetail,
            Price: Price,
            productImage: productImage
        }));
        setItemCount(prevCount => prevCount + 1);
    };

    const removeFromCart = () => {
        if (itemCount > 0) {
            setItemCount(prevCount => prevCount - 1);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigate()} activeOpacity={0.8}>
                <Image
                    style={styles.image}
                    source={productImage} 
                />
            </TouchableOpacity>
            <View style={styles.detailsContainer}>
                <TouchableOpacity onPress={() => navigate()} activeOpacity={0.8}>
                    <Text numberOfLines={1} style={styles.titleText}>
                        {ProductName}
                    </Text>
                    <Text numberOfLines={2} style={styles.descriptionText}>
                        {productDetail}
                    </Text>
                </TouchableOpacity>
                <View style={styles.footerContainer}>
                    <Text style={styles.priceText}> {Price}$</Text>
                    <View style={styles.itemAddContainer}>
                        {itemCount > 0 ? (
                            <>
                                <AntDesign
                                    name="minus"
                                    color={Colors.DEFAULT_YELLOW}
                                    size={18}
                                    onPress={removeFromCart}
                                />
                                <Text style={styles.itemCountText}>{itemCount}</Text>
                            </>
                        ) : null}
                        <AntDesign
                            name="plus"
                            color={Colors.DEFAULT_YELLOW}
                            size={18}
                            onPress={addToCart}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 10,
        elevation: 2,
        backgroundColor: Colors.LIGHT_GREY,
    },
    image: {
        height: 120,
        width: 140,
        margin: 6,
        borderRadius: 8,
    },
    detailsContainer: {
        marginHorizontal: 5,
    },
    titleText: {
        width: 200,
        color: Colors.DEFAULT_BLACK,
        fontSize: 16,
        marginBottom: 8,
    },
    descriptionText: {
        width: 200,
        color: Colors.DEFAULT_GREY,
        fontSize: 12,
        marginBottom: 8,
    },
    priceText: {
        color: Colors.DEFAULT_YELLOW,
        fontSize: 18,
    },
    footerContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginHorizontal: 5,
    },
    itemAddContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.LIGHT_GREY,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 8,
    },
    itemCountText: {
        color: Colors.DEFAULT_BLACK,
        fontSize: 16,
        marginHorizontal: 8,
    },
});

export default ProductCard;
