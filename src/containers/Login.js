import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

export default class LoginView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Welcome to trilly</Text>
        <TouchableHighlight
          ripple
          onPress={() => console.log("pressed")}
          style={styles.button}
          accessibilityLabel="Log in via facebook to get started"
        >
            
          <Text style={styles.buttonText}>Login in via facebook</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  heading: {
    fontSize: 28,
    marginBottom: 10
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#3b5998"
  },
  buttonText: {
    color: "#FFF"
  }
});
