import {StyleSheet, SafeAreaView, Platform} from "react-native";
import React from "react";
import HomePage from "./screens/HomePage";

export default App = () => {
  return (
      <SafeAreaView style={styles.safeBox}>
        <HomePage/>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeBox: {
    flex: 1,
    marginTop: Platform.OS === 'android'? 50: 0,
  },


});