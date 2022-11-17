import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, Platform, TouchableNativeFeedback } from "react-native";
import Colors from '../constants/Colors'
const AnswereItem = props => {

    return(
        <View style={styles.mainContainer}>
                <View style={styles.container}>
                 <View style={styles.mainHeadingContainer}><Text style={styles.mainHeadingText}>{props.mainHeading1}</Text></View>
                 {/* <Text style={styles.mainHeadingExplanationText}>{props.mainHeading1Explanation}</Text>
                 <Text style={styles.mainHeadingExampleText}>{props.mainHeading1Example}</Text> */}
                 <View style={styles.subHeadingContainer}><Text style={styles.subHeadingText}>{props.subHeading1}</Text></View>
                 <View style={styles.subHeadingExplanationContainer}><Text style={styles.subHeadingExplanation}>{props.subHeading1Explanation}</Text></View>
                 <View style={styles.subHeadingExampleContainer}><Text style={styles.subHeadingExampleText}>{props.subHeading1Example}</Text></View>
                 <View style={styles.subHeadingContainer}><Text style={styles.subHeadingText}>{props.subHeading2}</Text></View>
                 <View style={styles.subHeadingExplanationContainer}><Text style={styles.subHeadingExplanation}>{props.subHeading2Explanation}</Text></View>
                 <View style={styles.subHeadingExampleContainer}><Text style={styles.subHeadingExampleText}>{props.subHeading2Example}</Text></View>
                 <View style={styles.subHeadingContainer}><Text style={styles.subHeadingText}>{props.subHeading3}</Text></View>
                 <View style={styles.subHeadingExplanationContainer}><Text style={styles.subHeadingExplanation}>{props.subHeading3Explanation}</Text></View>
                 <View style={styles.subHeadingExampleContainer}><Text style={styles.subHeadingExampleText}>{props.subHeading3Example}</Text></View> 
                 <View style={styles.subHeadingContainer}><Text style={styles.subHeadingText}>{props.subHeading4}</Text></View>
                 <View style={styles.subHeadingExplanationContainer}><Text style={styles.subHeadingExplanation}>{props.subHeading4Explanation}</Text></View>
                 <View style={styles.subHeadingExampleContainer}><Text style={styles.subHeadingExampleText}>{props.subHeading4Example}</Text></View>
                 <View style={styles.subHeadingContainer}><Text style={styles.subHeadingText}>{props.subHeading5}</Text></View>
                 <View style={styles.subHeadingExplanationContainer}><Text style={styles.subHeadingExplanation}>{props.subHeading5Explanation}</Text></View>
                 <View style={styles.subHeadingExampleContainer}><Text style={styles.subHeadingExampleText}>{props.subHeading5Example}</Text></View>
                 <View style={styles.subHeadingContainer}><Text style={styles.subHeadingText}>{props.subHeading6}</Text></View>
                 <View style={styles.subHeadingExplanationContainer}><Text style={styles.subHeadingExplanation}>{props.subHeading6Explanation}</Text></View>
                 <View style={styles.subHeadingExampleContainer}><Text style={styles.subHeadingExampleText}>{props.subHeading6Example}</Text></View>
                 <View style={styles.subHeadingContainer}><Text style={styles.subHeadingText}>{props.subHeading7}</Text></View>
                 <View style={styles.subHeadingExplanationContainer}><Text style={styles.subHeadingExplanation}>{props.subHeading7Explanation}</Text></View>
                 <View style={styles.subHeadingExampleContainer}><Text style={styles.subHeadingExampleText}>{props.subHeading7Example}</Text></View>
                 <View style={styles.mainHeadingContainer}><Text style={styles.mainHeadingText}>{props.mainHeading2}</Text></View>
                 <View style={styles.mainHeadingExplanationContainer}><Text style={styles.mainHeadingExplanationText}>{props.mainHeading2Explanation}</Text></View>
                 <View style={styles.mainHeadingExampleContainer}><Text style={styles.mainHeadingExampleText}>{props.mainHeading2Example}</Text></View>     
                </View>
        </View> 
    )
};

const styles=StyleSheet.create({
    mainContainer:{
        height:'100%',
        width: '97%',
        margin:3,
    
    },
    container:{
        flex: 1,
        padding: 15,
        justifyContent: 'flex-start',

    },
    text:{
        fontSize:16
    },
    mainHeadingContainer:{
        padding:10,
    },
    mainHeadingText:{
        fontFamily:'RobotoBold',
        fontSize:18
    },
    subHeadingContainer:{
        padding:3
    },
    subHeadingText:{
        fontFamily:'Bold'
    },
    subHeadingExplanationContainer:{
        paddingHorizontal:15,

    },
    subHeadingExplanation:{

    },
    mainHeadingExplanationContainer:{

    },
    mainHeadingExplanationText:{
        fontFamily:'RobotRegular'
    },
    subHeadingExampleContainer:{
        // borderRadius: 3,
        // shadowColor: 'black',
        // shadowOpacity: 0.26,
        // shadowOffset: { width: 0, height: 2 },
        // shadowRadius: 10,
        // elevation: 1,
        padding:15,
      
    },
    subHeadingExampleText:{
        color:Colors.accent,
        fontFamily:'Regular'
    },
    mainHeadingExplanationContainer:{
        paddingHorizontal:15,
    },
    mainHeadingExampleText:{
        color:Colors.accent
    },
    mainHeadingExampleContainer:{
        // borderRadius: 3,
        // shadowColor: 'black',
        // shadowOpacity: 0.26,
        // shadowOffset: { width: 0, height: 2 },
        // shadowRadius: 10,
        // elevation: 1,
        padding:15
    },

})
export default AnswereItem;