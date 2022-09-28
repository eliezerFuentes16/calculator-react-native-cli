import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { styles } from "../../Styles/Styles";

function Button({value, isOrange, onPress}){
    let btnStyle;
    if(isOrange){
        btnStyle=styles.fontPrimary;
    }else{
        btnStyle=styles.fontSecondary;    
    }
    return(
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Text style={ [styles.smallTextLight,btnStyle]}>
                {value}  
            </Text> 
        </TouchableOpacity>
    )
}
export {Button};