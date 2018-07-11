import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default class App extends Component {
  state = {
    items: [],
    inputValue: null
  }

  addNewItem = () => {
    const { items, inputValue } = this.state
    const newItems = items.concat(inputValue)
    this.setState({ items: newItems })
  }

  render() {
    const { inputValue, items } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.inputRow}>
          <TextInput 
            style={styles.input} 
            value ={inputValue} 
            onChangeText={value => this.setState({ inputValue: value })}
          />
          <TouchableOpacity style={styles.addButton} onPress={this.addNewItem}>
            <Text style={styles.buttonText}>ADD</Text>
          </TouchableOpacity>
          <Text style={styles.theValue}>{ inputValue }</Text>
        </View>
        {items.map((item, i) => {
          return (
            <Text key={i} style={styles.theValue}>
              {item}
            </Text>
          )
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addButton: {
    marginLeft: 10,
    justifyContent: "center",
    backgroundColor: "green"
  },
  buttonText: {
    margin: 5,
    color: "white",
  },
  inputRow: {
    flexDirection: "row"
  },
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
