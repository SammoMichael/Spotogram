import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { MainFeed } from './components/screens';

// const MainStack = SwitchNavigator({
//     main: MainFeed,

//     login: Login
// });
class Spotogram extends Component {
    render() {
    return <MainFeed />;
    }
}

export default Spotogram;
