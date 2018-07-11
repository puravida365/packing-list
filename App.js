import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default class App extends Component {
  state = { inputValue: null }
  render() {
    const { inputValue } = this.state
    return (
      <View style={styles.container}>
        <TextInput 
          style={styles.input} 
          value ={inputValue} 
          onChangeText={value => this.setState({ inputValue: value })}
        />
        <Text style={styles.theValue}>{ inputValue }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: { 
    height: 40,
    width: "50%",
    backgroundColor: "gray",
    borderWidth: 1,
    borderColor: "lightgray"
  },
  theValue: {
    margin: 10,
    fontSize: 18
  }
});
