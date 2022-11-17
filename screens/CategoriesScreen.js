import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import 'react-native-gesture-handler';
import { CATEGORIES } from '../data/dummy-data';
import { FlatList } from 'react-native-gesture-handler';
import CategoryItem from '../components/CategoryItem';
import { Item, HeaderButtons } from 'react-navigation-header-buttons';
import * as AuthAction from '../store/actions/Auth';
import { useDispatch } from 'react-redux';
import HeaderButton from '../components/HeaderButton';
import Icon from 'react-native-vector-icons/Ionicons'


const CategoriesScreen = props => {

  const dispatch = useDispatch();
    const selectItemHandler = (id, title) => {
        props.navigation.navigate('SubCategories Screen', {
          categoryId: id,
          categoryTitle: title
        });
      };

    const renderCategoryItem = itemData => {
    return (
            <CategoryItem
            id={itemData.item.id}
            title={itemData.item.title}
            imgUrl={itemData.item.imgUrl}
            onSelect= {()=> {
                selectItemHandler(itemData.item.id, itemData.item.title);
            }}
            /> 
                )};
            return(
              <View>
              {/* <View>
              <Button title='Log Out'
               onPress={()=>{dispatch(AuthAction.Logout())}}
              />
              </View> */}
                    <FlatList
                        keyExtractor={(item, index) => item.id}
                        data={CATEGORIES}
                        renderItem={renderCategoryItem}
                        numColumns={2}
                        />
                        </View>
    );
};

export const ScreenOptions = navData => {
 const dispatch = useDispatch();
    return {
      
      headerTitle: 'All Technologies',
      headerRight:
       () => {
        return (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="Log Out"
              // iconName={Platform.OS === 'android' ? 'people' : 'people'}
              onPress={() => {
                
                dispatch(AuthAction.Logout())
              }}
  
            />
          </HeaderButtons>
        )
      },
  
      
    };
  };

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

});

export default CategoriesScreen;
