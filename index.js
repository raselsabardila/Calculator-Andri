/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Calculator from "./src/screens/Calculator.screen"

AppRegistry.registerComponent(appName, () => Calculator);
