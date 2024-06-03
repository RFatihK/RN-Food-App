import React from 'react';
import { View, Modal, ActivityIndicator, StyleSheet, StatusBar } from 'react-native';

const Loader = ({ isLoading = true }) => {
    return (
        <Modal transparent visible={isLoading}>
            <StatusBar hidden />
            <View style={styles.modalBackground}>
                <View>
                    <ActivityIndicator size={70} color="blue" />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Loader;
