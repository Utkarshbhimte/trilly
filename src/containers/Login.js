import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class LoginView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Welcome to trilly</Text>
        <Text>Login to get started</Text>
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
    fontSize: 18
  }
});
