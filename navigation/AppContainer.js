import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './MainNavigator';
import AuthStack from './AuthStack';
import StartupScreen from '../screens/StartupScreen'
import AuthScreen from '../screens/AuthScreen';
import SignUp from '../screens/SignUp';
import {useSelector} from 'react-redux';



const AppContainer = () =>{
  const isAuth = useSelector(state=>!!state.Auth.token); 
  // const didTryAutoLogin = useSelector(state=>!!state.Auth.didTryAutoLogin); 
  return (
    <NavigationContainer>
        {isAuth && <MainNavigator/>}
        {!isAuth && <AuthStack/>}
        {/* {!isAuth && !didTryAutoLogin && <StartupScreen/>} */}
  </NavigationContainer>
  );
};
export default AppContainer;
