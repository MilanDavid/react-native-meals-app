import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";

const App: React.FC = (): React.ReactElement => {
  return (
    <View>
      <StatusBar style="auto" />
      <SafeAreaView>
        <CategoriesScreen />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default App;
