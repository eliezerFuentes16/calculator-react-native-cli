import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    btn:{
        width:94,
        marginTop:5,
        height:78,
        borderRadius:24,
        justifyContent:"center",
        alignItems:"center",
        margin:0,
        fontSize:"54px"
    },
    fontPrimary:{
       color:"#48e", //FD6818
   },
   fontSecondary:{
    color:"#ddd",

   },
	smallTextLight:{
		fontSize:32,
	}, 
    screenSecondNumber:{
		color:"#000",
		alignSelf:"flex-end",
        fontSize:40
	},
    swicth:{
		position:"absolute",
		top:50,
		right:10,
		border:"1px solid #fff"
	},
});

export {styles};