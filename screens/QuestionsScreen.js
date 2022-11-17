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

            onSelect= {()=> {
                selectItemHandler(itemData.item.id);
            }}
            />    
        )
    }
    return (
        <View style={styles.screen}>
          <View style={styles.levelView}>
          <Text style={styles.levelText}>All Questions</Text>
          </View>
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
    levelView:{
      height:50,
      width:'85%',
      marginTop:5,
      marginBottom:5,
      borderRadius:20,
      backgroundColor:'orange',
      alignItems:'center',
      justifyContent:'center'
  },
  levelText:{
    fontSize:16,
    padding:5,
    fontFamily:'RobotoLight'
  }
});

export default QuestionsScreen;
