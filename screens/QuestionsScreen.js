import React from 'react';
import { View, Text, StyleSheet,FlatList, Button } from 'react-native';
import QuestionItem from '../components/QuestionItem'
import Colors from '../constants/Colors';
import { QUESTIONS } from '../data/dummy-data';


const QuestionsScreen = props => {
    const subCategoryId = props.route.params.subCategoryId;
    const displayedQuestions = QUESTIONS.filter(
      question => question.subCategoryIds.indexOf(subCategoryId) >= 0)
      const selectItemHandler = (id, title) => {
        props.navigation.navigate('Answeres Screen', {
          questionId: id,
          questionTitle: title
        });
      };

    
    const renderQuestion = itemData => {
        return(
            <QuestionItem
            question={itemData.item.question}
            quesitonTitle={itemData.item.questionTitle}

            onSelect= {()=> {
                selectItemHandler(itemData.item.id, itemData.item.questionTitle);
            }}
            />    
        )
    }
    return (
        <View style={styles.screen}>
        <FlatList
        data={displayedQuestions}
        keyExtractor={(item, index) => item.id}
        renderItem={renderQuestion}
        style={{ width: '100%' }}
         />
        </View>
    );
};

export const ScreenOptions = navData => {
    return {
      headerTitle: navData.route.params.subCategory,

    };
  };

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default QuestionsScreen;
