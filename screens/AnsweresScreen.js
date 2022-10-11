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
            heading={itemData.item.heading}
            explanation={itemData.item.explanation}
            example={itemData.item.example}
            />    
        )
    }
    return (
        <View style={styles.screen}>
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
      headerTitle: navData.route.params.questionTitle,

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
