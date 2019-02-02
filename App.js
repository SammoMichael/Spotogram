import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Spotogram from './src/Spotogram.js';
import PostFeed from './src/components/container/PostFeed';

export default class App extends Component {
  render() {
   return (
   <View >
     <Spotogram />
     {/* <PostFeed />  */}

   </View>

   );
    // return (
    //   < View >
    //     <Spotogram />

    //     <PostFeed />
    //   </View>
    // );
  }
}
