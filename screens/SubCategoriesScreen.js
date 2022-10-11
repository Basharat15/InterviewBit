import React from 'react';
import { View, Text, StyleSheet,FlatList, Button } from 'react-native';
import SubCategoryItem from '../components/SubCategoryItem';
import Colors from '../constants/Colors';
import {   CATEGORIES,  SUBCATEGORIES } from '../data/dummy-data';


const SubCategoriesScreen = props => {
    const categoryId = props.route.params.categoryId;
    const displayedSubCategories = SUBCATEGORIES.filter(
        SubCategory => SubCategory.categoryIds.indexOf(categoryId)  >= 0
      );

      const selectItemHandler = (id, title) => {
        props.navigation.navigate('Questions Screen', {
          subCategoryId: id,
          subCategory: title,
          
        });
      };

    
    const renderSubCategory = itemData => {
        return(
            <SubCategoryItem
            subCategory={itemData.item.subCategory}
            subCategoryTitle={itemData.item.subCategoryTitle}
            onSelect= {()=> {
                selectItemHandler(itemData.item.id, itemData.item.subCategory);
            }}
            />    
        )
    }
    return (
        <View style={styles.screen}>
          <View style={styles.levelView}>
          <Text style={styles.levelText}>Plese Select Your Level</Text>
          </View>
        <FlatList
        data={displayedSubCategories}
        keyExtractor={(item, index) => item.id}
        renderItem={renderSubCategory}
        style={{ width: '100%' }}
         />
        </View>
    );
};

export const ScreenOptions = navData => {
    return {
      headerTitle: navData.route.params.categoryTitle,

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
        width:'75%',
        marginTop:20,
        borderRadius:20,
        backgroundColor:Colors.primary,
        alignItems:'center',
        justifyContent:'center'
    },
    levelText:{
      fontSize:16,
    }
});

export default SubCategoriesScreen;
