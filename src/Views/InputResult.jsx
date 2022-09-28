import React from "react";
import { Text, View } from "react-native";
import { styles } from "../Styles/Styles";

function InputResult({secondsNumber, operation}){
    let displayTextSecond="flex";
    let stylesFontTextResult={fontSize:50};
    if(secondsNumber==""){
        displayTextSecond="none";
    }
    if(operation.length == 12){
      stylesFontTextResult={fontSize:50}
    }else if(operation.length == 13){
      stylesFontTextResult={fontSize:47}
    } else if(operation.length == 14){
      stylesFontTextResult={fontSize:44}
    } else if(operation.length == 15){
      stylesFontTextResult={fontSize:41}
    }  else if(operation.length >= 16){
      stylesFontTextResult={fontSize:38}
    }
    else{
      stylesFontTextResult={fontSize:50}
    }
    return (
        <View
            style={{
              height:200,
              width:"90%",
              justifyContent:"flex-end",
              alignSelf:"center"
            }}>
              <View style={styles.screenSecondNumber}>
                <Text style={[stylesFontTextResult,{color:"#000", fontWeight:"400",alignSelf:"flex-end",}]}>{operation}</Text>
                <Text style={{color:"#0008", fontSize:30, fontWeight:"400", alignSelf:"flex-end", display:displayTextSecond}}>= {secondsNumber} </Text>
              </View>
        </View>
    )
}
export{InputResult};