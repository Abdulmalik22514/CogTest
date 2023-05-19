// In App.js in a new project

import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenA from "../screens/ScreenA/ScreenA";
import ScreenB from "../screens/ScreenB/ScreenB";

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ScreenA" component={ScreenA} />
      <Stack.Screen name="ScreenB" component={ScreenB} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
