/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Navigator from './Navigator';
import {name as appName} from './app.json';

AppRegistry.registerComponent('spotogram', () => Navigator);
