import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const ScreenB = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18 }}>Screen A</Text>
      <StatusBar style="auto" />
      <Pressable
        onPress={() => navigation.navigate("ScreenA")}
        style={styles.buttonStyle}
      >
        <Text style={{ fontSize: 18 }}>Back to A</Text>
      </Pressable>
    </View>
  );
};

export default ScreenB;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonStyle: {
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7f7fff",
    borderRadius: 2,
    marginTop: 20,
  },
});
