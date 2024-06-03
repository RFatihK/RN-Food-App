import React from 'react';
import { View, Text, Dimensions, TouchableOpacity } from "react-native";

const { width, height } = Dimensions.get('window');

const Button = ({
    title = "Devam", onPress = () => { },
    heightMultiplier = height * 0.07, widthMultiplier = width * 0.88
}) => {

    return (
        <TouchableOpacity
            onPress={onPress}
            style={{ flexDirection: 'row', }}
        >
            <View
                style={{
                    backgroundColor: '#5D39C1',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginHorizontal: '6%',
                    borderRadius: 25,

                    
                    height: heightMultiplier,
                    width: widthMultiplier,
                }}>
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: 'white'
                    }}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default Button;
