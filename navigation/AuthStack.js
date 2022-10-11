import * as  React from 'react';
import { Platform } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import AuthScreen,{ScreenOptions as AuthScreenOption} from '../screens/AuthScreen';
// import SplashScreen,{ScreenOptions as SplashScreenOption} from '../screen/SplashScreen';
import SignUp,{ScreenOptions as SignUpScreenOption} from '../screens/SignUp';

import Colors from '../constants/Colors';

const Stack = createStackNavigator()

const DefaultNavOption = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white'
  },
  headerTintColor: Platform.OS === 'android'? 'white':Colors.primary
}

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={DefaultNavOption}>
      
      <Stack.Screen
        name="Authenticate"
        component={AuthScreen}
        options={AuthScreenOption}
      />
      <Stack.Screen
        name="sign up"
        component={SignUp}
        options={SignUpScreenOption}
      />
       
    </Stack.Navigator>
  )
}

export default AuthStack;