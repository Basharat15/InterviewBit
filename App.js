import React from 'react';
import {combineReducers,applyMiddleware} from 'redux';
import { createStoreHook } from 'react-redux';
import {Provider} from 'react-redux'
import ReduxThunk from 'redux-thunk'
// import {Provider} from 'react-redux';
import AppContainer from './navigation/AppContainer';
import 'react-native-gesture-handler';
import AuthReducer from './store/reducers/Auth';
import { createStore } from 'redux';


// export default function App() {
//   return(
//     <AppContainer/>
//   )
// }
const rootReducer = combineReducers({
  Auth:AuthReducer
});

const store = createStore(rootReducer,applyMiddleware(ReduxThunk))
export default function App() {
  return (
    <Provider store={store} >
      <AppContainer/>
    </Provider>
);
};