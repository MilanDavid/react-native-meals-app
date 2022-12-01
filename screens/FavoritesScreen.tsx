import React from "react";
import { StyleSheet, View } from "react-native";
import { MEALS } from "../data/dummyData";
import MealsList from "../components/Meals/MealsList";
import { Text } from "react-native-paper";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";

const FavoritesScreen: React.FC = (): React.ReactElement => {
  // const favoritesCtx = useContext(FavoritesContext);
  const favoritesIds = useSelector((state: RootState) => state.favorites.ids);

  const favoritesList = MEALS.filter((item) => favoritesIds.includes(item.id));

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
