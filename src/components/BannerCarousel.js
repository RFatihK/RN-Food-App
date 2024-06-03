import React, { useState, useEffect, useRef } from "react";
import { View, Image, FlatList, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const BannerCarousel = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const flatListRef = useRef(null);

    const handleNext = () => {
        if (flatListRef.current) {
            const newIndex = (activeIndex + 1) % data.length;
            setActiveIndex(newIndex);
            flatListRef.current.scrollToIndex({ index: newIndex, animated: true });
        }
    };

    useEffect(() => {
        if (data && data.length > 0) {
            const interval = setInterval(() => {
                handleNext();
            }, 2000); 
    
            return () => clearInterval(interval);
        }
    }, [activeIndex, data]);

    return (
        <View style={{ height: height * 0.24 }}>
            <FlatList
                ref={flatListRef}
                data={data}
                renderItem={({ item }) => (
                    <Image source={{ uri: item }} style={{ width: width, height: height * 0.24, resizeMode: "stretch" }} />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                keyExtractor={(item, index) => index.toString()}
                onMomentumScrollEnd={(event) => {
                    const contentOffsetX = event.nativeEvent.contentOffset.x;
                    const newIndex = Math.floor(contentOffsetX / width);
                    setActiveIndex(newIndex);
                }}
                testID="banner-carousel"
            />
        </View>
    );
};

export default BannerCarousel;
