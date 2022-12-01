import React, { useContext } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { MEALS } from "../data/dummyData";
import { FavoritesContext } from "../store/context/favorites-context";
import MealsList from "../components/Meals/MealsList";
import { Paragraph, Text } from "react-native-paper";

const FavoritesScreen: React.FC = (): React.ReactElement => {
  const favoritesCtx = useContext(FavoritesContext);

  const favoritesList = MEALS.filter((item) =>
    favoritesCtx.ids.includes(item.id)
  );

  if (favoritesList.length === 0) {
    return (
      <View style={styles.noFavs}>
        <Text>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList list={favoritesList} />;
};

const styles = StyleSheet.create({
  noFavs: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FavoritesScreen;
