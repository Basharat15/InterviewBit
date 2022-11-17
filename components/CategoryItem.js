import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, Platform, TouchableNativeFeedback } from "react-native";
import Colors from "../constants/Colors";

const CategoryItem = props => {
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
                 <Text style={styles.title}>{props.title}</Text>
                 <View style={styles.imgContainer}>
                 <Image style={styles.img} source={{ uri: props.imgUrl }} />
                 </View>
                </View>
        </TouchableCmp>
        </View>
    )};

const styles= StyleSheet.create({
    mainContainer:{
        flex:1,
        margin:10,
        height:180,
        overflow: 'hidden'
    },
    container:{
        flex: 1,
        borderRadius: 3,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 1,
        padding:10
// ,       backgroundColor:Colors.primary
            
    },
    title:{
        textAlign:'center',
        fontSize:16,
        marginTop:2,
        fontFamily:'RobotoBold'
        
    },
    imgContainer:{
        height:'80%',
        width:'95%',
        margin:3,
        overflow:'hidden'
        
    },
    img:{
        height:'100%',
        width:'100%',
        borderRadius:20
       
    }
});

export default CategoryItem;
