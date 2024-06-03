import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get('window');

function MainCategoriesComponent(props) {
    const { data } = props;
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.listContainer}>
                {data.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        onPress={() => { }}
                        style={styles.itemContainer}>
                        <Image
                            style={styles.image}
                            source={{ uri: item.src }}
                        />
                        <Text style={styles.text}>{item.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F5F5F5",
        flex: 1,
    },
    listContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        paddingHorizontal: width * 0.02,
    },
    itemContainer: {
        width: width * 0.25,
        height: width * 0.24,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    image: {
        width: width * 0.18,
        height: width * 0.18,
        borderRadius: 10,
    },
    text: {
        fontSize: 12,
        color: '#616161',
        fontWeight: '500',
        textAlign: 'center',
    },
});

export default MainCategoriesComponent;
