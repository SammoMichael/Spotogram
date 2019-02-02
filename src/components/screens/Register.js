import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native';
import config from '../../config';

class Register extends Component {
    constructor() {
      super();
      this.state = {
        credentials: {
          email: "",
          password: "",
        } 
      };
    }

    updateText(text, field) {
      const newCredentials = Object.assign(this.state.credentials);
      newCredentials[field] = text;
      this.setState({
        credentials: newCredentials,
      });
    }
    register() {
      fetch(config.baseUrl + 'signup', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }, 
        body: JSON.stringify(this.state.credentials)
      })
        .then((response) => response.json())
        .then(jsonResponse => {
        if (jsonResponse.confirmation === "success") {
          this.props.navigation.navigate("Tabs");
        } else {
          throw new Error({
            message: "Sorry, something went wrong; please try again"
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
    }
  render() {
    return (
      <View style={{ 
          height:100+"%", 
          width:100+'%', 
          flex: 1, 
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(252,61,57)"
          }}
        >
        <Text>REGISTER PAGE</Text>
        <TextInput 
          value={this.state.email}  
          onChangeText={text => this.updateText(text, 'email')}
          editable
          
          placeholder="Username" style={styles.input}/>
        < TextInput 
          value={this.state.password}  
          onChangeText={text => this.updateText(text, 'password')}
          placeholder="Password" 
          editable
          secureTextEntry={true}
          style={styles.input}/>
        <Button onPress={() => this.register()} title="Signup" />
        <Button title="Login" onPress={() => this.props.navigation.navigate("Login")} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
   height: 50,
   width: 100 + "%",
   marginHorizontal: 50,
   backgroundColor: "rgb(255,255,255)",
   marginBottom: 10,
  }  
});
export default Register;
