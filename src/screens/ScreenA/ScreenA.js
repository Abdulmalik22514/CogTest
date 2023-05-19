import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const ScreenA = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>ScreenA</Text>
      <StatusBar style="auto" />
      <Button onPress={() => navigation.navigate("ScreenB")} title="Go to B" />
    </View>
  );
};

export default ScreenA;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
