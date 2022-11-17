import React from 'react';
import { View, Text, StyleSheet,FlatList, Button } from 'react-native';
import AnswereItem from '../components/AnswereItem';
import Colors from '../constants/Colors';
import { ANSWERES, QUESTIONS } from '../data/dummy-data';


const AnsweresScreen = props => {
    const questionId = props.route.params.questionId;
    const displayedAnsweres = ANSWERES.filter(
      answere => answere.questionIds.indexOf(questionId) >= 0)
    
    const renderAnswere = itemData => {
        return(
            <AnswereItem
            mainHeading1={itemData.item.mainHeading1}
            mainHeading1Explanation={itemData.item.mainHeading1Explanation}
            mainHeading1Example={itemData.item.mainHeading1Example}
            subHeading1={itemData.item.subHeading1}
            subHeading1Explanation={itemData.item.subHeading1Explanation}
            subHeading1Example={itemData.item.subHeading1Example}
            subHeading2={itemData.item.subHeading2}
            subHeading2Explanation={itemData.item.subHeading2Explanation}
            subHeading2Example={itemData.item.subHeading2Example}
            subHeading3={itemData.item.subHeading3}
            subHeading3Explanation={itemData.item.subHeading3Explanation}
            subHeading3Example={itemData.item.subHeading3Example}
            subHeading4={itemData.item.subHeading4}
            subHeading4Explanation={itemData.item.subHeading4Explanation}
            subHeading4Example={itemData.item.subHeading4Example}
            subHeading5={itemData.item.subHeading5}
            subHeading5Explanation={itemData.item.subHeading5Explanation}
            subHeading5Example={itemData.item.subHeading5Example}
            subHeading6={itemData.item.subHeading6}
            subHeading6Explanation={itemData.item.subHeading6Explanation}
            subHeading6Example={itemData.item.subHeading6Example}
            subHeading7={itemData.item.subHeading7}
            subHeading7Explanation={itemData.item.subHeading7Explanation}
            subHeading7Example={itemData.item.subHeading7Example}
            mainHeading2={itemData.item.mainHeading2}
            mainHeading2Explanation={itemData.item.mainHeading2Explanation}
            mainHeading2Example={itemData.item.mainHeading2Example}

            />    
        )
    }
    return (
        <View style={styles.screen}>
            <View>
                {/* <Text>{navData.route.params.quesitonTitle}</Text> */}
            </View>
        <FlatList
        data={displayedAnsweres}
        keyExtractor={(item, index) => item.id}
        renderItem={renderAnswere}
        style={{ width: '100%' }}
         />
        </View>
    );
};

export const ScreenOptions = navData => {
    return {
      headerTitle:"Answere"

    };
  };

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default AnsweresScreen;
