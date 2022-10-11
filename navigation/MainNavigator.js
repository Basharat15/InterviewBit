import * as  React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../constants/Colors';
import CategoriesScreen ,{ScreenOptions as CategoriesScreenOptions} from '../screens/CategoriesScreen';
import SubCategoriesScreen ,{ScreenOptions as SubCategoriesScreenOptions} from '../screens/SubCategoriesScreen';
import QuestionsScreen ,{ScreenOptions as QuestionsScreenOptions} from '../screens/QuestionsScreen';
import AnsweresScreen,{ScreenOptions as AnsweresScreenOptions} from '../screens/AnsweresScreen';

const Stack = createStackNavigator()

const DefaultNavOption = {
       headerStyle: {
         
         backgroundColor: Colors.accent
       },
       headerTintColor: 'white'
     }
     const  MainNavigator= () =>{
        return(
               <Stack.Navigator screenOptions={DefaultNavOption}>
               <Stack.Screen
                 name="Categories Screen"
                 component={CategoriesScreen}
                 options={CategoriesScreenOptions}
               />
               <Stack.Screen
                 name="SubCategories Screen"
                 component={SubCategoriesScreen}
                 options={SubCategoriesScreenOptions}
               />
               <Stack.Screen
                 name="Questions Screen"
                 component={QuestionsScreen}
                 options={QuestionsScreenOptions}
               />
                <Stack.Screen
                 name="Answeres Screen"
                 component={AnsweresScreen}
                 options={AnsweresScreenOptions}
               />
              

             </Stack.Navigator>
        )
 };
 export default MainNavigator;