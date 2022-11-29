import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import { Provider as PaperProvider } from "react-native-paper";

const Stack = createNativeStackNavigator();

const App: React.FC = (): React.ReactElement => {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <StatusBar style="dark" />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="MealsCategories">
            <Stack.Screen name="MealsCategories" component={CategoriesScreen} />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#24180f",
  },
});

export default App;
