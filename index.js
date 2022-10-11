/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import InAppReview from 'react-native-in-app-review';

AppRegistry.registerComponent(appName, () => App);

