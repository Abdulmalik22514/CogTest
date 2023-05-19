import RootNavigator from "./src/navigation/RootNav";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
