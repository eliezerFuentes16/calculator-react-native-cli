//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Plus = () => {
    return (
        <View style={styles.container}>
            <Text>Plus</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D6E2FF',
    },
});

//make this component available to the app
export default Plus;
