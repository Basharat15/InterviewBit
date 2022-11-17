import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, Platform, TouchableNativeFeedback } from "react-native";
import Colors from "../constants/Colors";

const QuestionItem = props => {
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
                 <Text style={styles.text}>{props.question}</Text>
                 
                </View>
        </TouchableCmp>
        </View> 
    )
};

const styles=StyleSheet.create({
    mainContainer:{
        height: 70,
        width: '97%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden',
        margin:3,

    },
    container:{
        flex: 1,
        borderRadius: 5,
        shadowColor:'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 2,
        padding: 15,
        justifyContent: 'flex-start',
        // backgroundColor:Colors.primary
            
    },
    text:{
        fontSize:16,
        fontFamily:'Roboto-Light'
        
    }
});

export default QuestionItem;