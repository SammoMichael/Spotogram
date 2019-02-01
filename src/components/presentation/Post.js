import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import config from '../../config';

class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            liked: false,
            screenWidth: Dimensions.get("window").width
          }
     }

     likeToggled(){
         this.setState({
            liked: !this.state.liked
         });
     }
    componentDidMount(){
        this.setState({
            screenWidth: Dimensions.get("window").width,
        })
    }
    render() {
        const heartIconColor = (this.state.liked) ? "rgb(251, 61,57)" : null;

        const imageHeight = Math.floor(this.state.screenWidth + 1.1);
        const imageUri = "https://lh3.googleusercontent.com/b3MqpOjUaRPF__09OwzVSS2nBUZAxu9ufwzdDCU6KMdgvJatzVCPMy2KDJuA1OKxLQQyXEnzPJN7qB3Uxuih9XEx"
        + "=s" +
        imageHeight + "-c";
        
        return (
            <View backgroundColor="white" style = {{ flex: 1, width: 100 + "%", height: 100 + '%' }}>
                <View style={ styles.tempNav }>
                    <Text>Spotogram</Text>
                </View >
                <View style={ styles.userBar }>
                    <View style= {{flexDirection: "row", alignItems: "center"}} >
                    
                    < Image style={ styles.userPic }
                        source = {{
                        uri: "https://lh3.googleusercontent.com/5VtQqeEUHQqVfHByUEHsTYC0bNj--wYpTow0Gleq_Ss2wfTgZ89Fvd7aICM-kbq8M7l4IG9X1LmHE0ArxNRjEdin4vk"
                        }}
                    />
                    <Text style={{ marginLeft: 10 }}>Jubei</Text>
                </ View>
                   <View>
                        <Text style={{ fontSize: 30 }}>...</Text>
                    </View>
                </View>
                <View>
                </View>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => {
                        this.likeToggled();
                    }}
                >
                 < Image 
                    style={{ width: this.state.screenWidth, height: imageHeight }}
                    source = {
                     {
                         uri: imageUri
                     }
                 }
                 />
                 </TouchableOpacity>
                 <View style={styles.iconBar} >
                    <Image style={[styles.icon, {height: 40, width: 45, tintColor: heartIconColor}]} source={config.images.heartIcon} />
                    <Image style={[styles.icon, {height: 36, width: 36}]} source={config.images.bubbleIcon} />
                    <Image style={[styles.icon, {height: 40, width: 30}]} source={config.images.arrowIcon} />
                 </View>
                 <View style={styles.iconBar}>
                    < Image style = {
                        [styles.icon, {
                            height: 30,
                            width: 30,
                            tintColor: heartIconColor
                        }]
                    }
                    source = {
                        config.images.heartIcon
                    }
                    />
                    <Text>128 Likes</Text>
                 </View>
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
    },
    userBar: {
        width: 100 + "%",
        height: config.styleConstants.rowHeight,
        backgroundColor: "rgb(255,255,255)",
        flexDirection: "row",
        paddingHorizontal: 10,
        justifyContent: "space-between"
    },
    userPic: {
        height: 40,
        width: 40,
        borderRadius: 20,
     },
     iconBar: {
        height: config.styleConstants.rowHeight,
        width: 100 + "%",
        borderColor: "rgb(233,233,233)",
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",

     },
     icon: {
         marginLeft: 5,
         padding: 20,
     },
}); 
export default Post;
