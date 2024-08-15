import { StyleSheet, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./AppStack";

export default App = () => {
  return (
    <NavigationContainer>
        <AppStack />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  safeBox: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 50 : 0,
  },
});
