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
    this.input.clear()
    setTimeout(() => this.input.focus(), 100)
  }

  clearItems = () => {
    this.setState({items: []})
  }

  renderInputRow = () => {
    const {inputValue} = this.state

    return (
      <View style={styles.inputRow}>
        <TextInput 
          ref={taco => this.input = taco}
          style={styles.input} 
          value ={inputValue} 
          onChangeText={value => this.setState({ inputValue: value })}
          onSubmitEditing={this.addNewItem}
          autoFocus
        />
        <TouchableOpacity style={styles.addButton} onPress={this.addNewItem}>
          <Text style={styles.buttonText}>ADD</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.addButton, {backgroundColor: "gray"}} 
          onPress={this.clearItems}
        >
        <Text style={styles.buttonText}>Clear</Text>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    const { inputValue, items } = this.state
    return (
      <View style={styles.container}>
        {this.renderInputRow()}
        {items.map((item, i) => {
          return (
            <Text key={i} style={styles.theValue}>
              {item}
            </Text>
          )
        })}
      </View>
    )
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
    borderWidth: 1,
    borderColor: "lightgray"
  },
  theValue: {
    margin: 10,
    fontSize: 18
  }
});
