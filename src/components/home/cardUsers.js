//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

// create a component
const CardUsers = (props) => {
    return (
        <View style={styles.container}>
          <View style={styles.bannerColor}/>
          <View style={styles.sectionOne}>
            <View>
              <Image source={{uri:props.item.image}} resizeMode="cover" style={styles.image} />
              <Text style={styles.name}>{props.item.name}</Text>
            </View>
            <View style={{justifyContent:'flex-end',}}>
              <TouchableOpacity activeOpacity={0.8} onPress={()=>props.connect(props.item.id)} style={styles.button}>
                <Text style={styles.connect}>+ Conectar</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.sectionTwo}>
            <View style={styles.tag}>
              <Text style={styles.textTag}>{props.item.university}</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.textTag}>{props.item.study}</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.textTag}>{props.item.yearStudy}° año</Text>
            </View>
          </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width:'100%', 
        height:165, 
        backgroundColor: '#FFFFFF', 
        borderRadius:23
    },
    bannerColor: {
        width:'100%', 
        height:31, 
        backgroundColor: '#FFE292',
        borderTopLeftRadius:23, 
        borderTopRightRadius:23, 
        position:'absolute', 
        top:0
    },
    sectionOne: {
        flexDirection:'row', 
        marginTop:19, 
        height:95, 
        width:'100%', 
        paddingHorizontal:19, 
        justifyContent:'space-between'
    },
    image: {
        width:62, 
        height:62, 
        borderRadius:62
    },
    name:{
        fontFamily:'ProximaNova-Regular',
        // fontWeight:'bold', 
        color:'black',
        fontSize:hp('2.4%'), 
        marginTop:9
    },
    button: {
        width:115, 
        height:27, 
        backgroundColor: '#3B79FA', 
        borderRadius:7, 
        justifyContent:'center', 
        alignItems:'center', 
        marginBottom:15
    },
    connect: {
        fontFamily:'ProximaNova-Regular',
        fontSize:15, 
        color:'white'
    },
    sectionTwo: {
        marginTop:10,
         width:'100%',
         height:25, 
         flexDirection:'row', 
         paddingHorizontal:19
    },
    tag: {
        backgroundColor: '#EFEFEF', 
        borderRadius:11, 
        paddingHorizontal:6, 
        paddingVertical:2.5, 
        justifyContent:'center', 
        alignItems:'center', 
        marginRight:7
    },
    textTag: {
        fontFamily:'ProximaNova-Regular',
        fontSize:hp('1.7%'),
        color:'black',
    }
});

//make this component available to the app
export default CardUsers;
