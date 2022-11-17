import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, Platform, TouchableNativeFeedback } from "react-native";
import Colors from "../constants/Colors";

const SubCategoryItem = props => {
    let TouchableCmp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
      }
    return(
        <View style={styles.mainContainer}>
        <TouchableCmp
           style={{ flex: 1 }}
            onPress={props.onSelect}>
                <View style={styles.container}>
                 <Text style={styles.text}>{props.subCategory}</Text>
                </View>
        </TouchableCmp>
        </View> 
    )
};

const styles=StyleSheet.create({
    mainContainer:{
        height: 120,
        width: '70%',
        marginLeft:'15%',
        borderRadius: 10,
        overflow: 'hidden',
        margin:3,
        marginTop:50,

    },
    container:{
        flex: 1,
        borderRadius: 5,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 2,
        padding: 15,
        backgroundColor: Colors.primary,
        justifyContent:'center',
        alignItems:'center'
            
    },
    text:{
        fontSize:18,
        color:'white',
        fontFamily:'RobotoBold'
    }
});

export default SubCategoryItem;