import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const ScreenB = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Screen B</Text>
      <StatusBar style="auto" />
      <Button
        onPress={() => navigation.navigate("ScreenA")}
        title="Go back to A"
      />
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
});
