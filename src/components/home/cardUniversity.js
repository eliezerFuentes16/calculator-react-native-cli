//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
const CardUniversity = (props) => {
    return (
        <View style={[styles.container,{marginRight:props.index == props.data.length - 1?22:0}]}>
          <Image source={props.item.img} resizeMode="cover" style={styles.image} />
          <View style={styles.backgroundBlack}/>
          <Text style={styles.font}>{props.item.nombre}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width:145, 
        justifyContent:'center', 
        alignItems:'center', 
        paddingHorizontal:15, 
        paddingVertical:12, 
        borderRadius:12
    },
    image: {
        width:145, 
        height:46, 
        borderRadius:12, 
        position:'absolute'
    },
    backgroundBlack:{
        width:145, 
        height:46, 
        backgroundColor: 'black', 
        opacity:0.38, 
        position:'absolute',  
        borderRadius:12
    },
    font:{
        fontFamily:'ProximaNova-Regular',
        fontSize:18, 
        color:'white'
    }
});

//make this component available to the app
export default CardUniversity;
