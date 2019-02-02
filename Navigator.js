import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator, createAppContainer } from "react-navigation";
import App from './App';
import {
    Login, Camera, Profile, Register
} from './src/components/screens';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}
const IntroStack = createStackNavigator({
    Login,
    Register, 
});

const Tabs = createBottomTabNavigator({
    feed: App,
    camera: Camera,
    profile: Profile
});

const AppNavigator = createSwitchNavigator({
    Tabs,
    Intro: IntroStack
}, {
    initialRouteName: "Intro"
});


export default createAppContainer(AppNavigator);