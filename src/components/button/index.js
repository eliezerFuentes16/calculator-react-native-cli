//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

// create a component
const ButtonDesign = (props) => {
    return (
        <View style={styles.container}>
            {props.state.routes.map((route, index) => {
                const { options } = props.descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const icon = options.icono;
                const useIcon = options.iconUse;
                const isFocused = props.state.index === index;

                const onPress = () => {
                    const event = props.navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // navigation.navigate(route.name, { screen: route.name });
                        props.navigation.navigate(route.name);

                    }

                };

                const onLongPress = () => {
                    props.navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        activeOpacity={0.9}
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.touch}
                        key={index}
                    >
                        <View style={styles.padding}>
                            {useIcon?
                                label == 'Perfil'?
                                <View style={styles.designPerfil}>
                                    <View style={styles.contentImage}>
                                        <Image source={require('../../../assets/img/profile.jpeg')} resizeMode="cover" style={{width:25, height:25, borderRadius:25,}}/>
                                    </View>
                                    <View style={styles.contentLabelPerfil}>
                                        <Text style={[styles.label,{ opacity:isFocused?1:0.5 }]}>
                                            {label}
                                        </Text>
                                    </View>
                                </View>
                              :
                                <View style={styles.designButton}>
                                    <Icon name={icon} size={hp('2%')} color={isFocused ? 'black' : '#7E7E7E'} style={{opacity:isFocused?1:0.5,}} />
                                    <View style={styles.contentLabel}>
                                        <Text style={[styles.label,{ opacity:isFocused?1:0.5 }]}>
                                            {label}
                                        </Text>
                                    </View>
                                </View>
                            :
                            <View style={styles.contentPlus}>
                              <View style={styles.designPlus}>
                                <Icon2 name={icon} size={hp('2%')} color="white" />
                              </View>
                            </View>
                            }
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        backgroundColor: '#D6E2FF', 
        borderTopColor:"#9A9A9A3B", 
        borderTopWidth:0.5, 
        height: 78, 
        marginBottom:0, 
        justifyContent: 'space-around', 
        alignItems: 'center'
    },
    touch: {
        flex:1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    padding: {
        paddingVertical:15
    },
    designButton: {
        width:'100%',
        height:'100%', 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    contentImage:{
        width:25, 
        height:25, 
        borderRadius:25,
        elevation:5
    },
    designPerfil: {
        width:'100%',
        height:'100%', 
        justifyContent: 'center', 
        alignItems: 'center',
        marginTop:-5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
    },
    contentLabel: {
        flex: 1, 
        marginTop:8
    },
    contentLabelPerfil:{
        flex: 1, 
        marginTop:3.5
    },
    label: {
        color: 'black', 
        fontFamily:'ProximaNova-Regular', 
        fontSize:hp('1.3%'), 
    },
    contentPlus: {
        flex:1,
        alignItems:'center'
    },
    designPlus: {
        height:29, 
        width:29, 
        justifyContent:'center', 
        alignItems:'center', 
        backgroundColor: '#000000', 
        borderRadius:50
    }

});

//make this component available to the app
export default ButtonDesign;
