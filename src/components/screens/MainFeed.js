import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { PostFeed } from '../container';
import config from '../../config';

class Spotogram extends Component {
    render() {
        return (
            < View 
            style={{
            width: 100 + "%", 
            height: 100 + '%' }}>
                <View style={styles.tempNav}>
                    <Text>Spotogram</Text>
                </View>
                    <PostFeed />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tempNav: { 
        width: 100 + "%", 
        height: 56,
        marginTop: 20, 
        backgroundColor: "rgb(250,250,250)",
        borderBottomColor: "rgb(233,233,233)", 
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: "center",
        alignItems: "center",
    }
}); 
export default Spotogram;
