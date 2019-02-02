import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native';
import config from '../../config';

class Login extends Component {
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
    login() {
      fetch(config.baseUrl + 'login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }, 
        body: JSON.stringify(this.state.credentials)
      })
        .then((response) => response.json())
        .then(jsonResponse => {
          alert(JSON.stringify(jsonResponse));
        if (jsonResponse.confirmation === "success") {
          this.props.navigation.navigate("Tabs");
        } else {
          alert("Whoops")
          throw new Error(jsonResponse.message);
        }
      })
      .catch(err => {
        // alert(JSON.stringify(err.message));
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
        <Text>LOGIN PAGE</Text>
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
        <Button onPress={() => this.login()} title="Login" />
        <Button title="No account, Signup here!" onPress={() => this.props.navigation.navigate("Register")} />
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
export default Login;
