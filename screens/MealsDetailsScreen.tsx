import React, { useContext, useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { Paragraph, Text } from "react-native-paper";
import { MEALS } from "../data/dummyData";
import { FavoritesContext } from "../store/context/favorites-context";
import IconButton from "../components/IconButton";

const MealsDetailsScreen: React.FC<{ route: any; navigation: any }> = ({
  route,
  navigation,
}): React.ReactElement => {
  const mealId = route.params.mealId;
  const mealItem = MEALS.find((meal) => meal.id === mealId);
  const favoriteMealsCtx = useContext(FavoritesContext);

  const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

  const changeFavoriteStatusHandler = () => {
    if (mealIsFavorite) {
      favoriteMealsCtx.removeFavorite(mealId);
    } else {
      favoriteMealsCtx.addFavorite(mealId);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: mealItem?.title,
      headerRight: () => (
        <IconButton
          icon={mealIsFavorite ? "star" : "star-outline"}
          color="white"
          onPress={changeFavoriteStatusHandler}
        />
      ),
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: mealItem?.imageUrl }} />
      <Paragraph style={styles.mealTitle}>{mealItem?.title}</Paragraph>
      <View>
        <Paragraph>
          <Text style={styles.titles}>Duration: </Text>
          {mealItem?.duration}m
        </Paragraph>
        <Paragraph>
          <Text style={styles.titles}>Complexity: </Text>
          {mealItem?.complexity.toUpperCase()}
        </Paragraph>
        <Paragraph>
          <Text style={styles.titles}>Affordability: </Text>
          {mealItem?.affordability.toUpperCase()}
        </Paragraph>
        <Paragraph style={styles.titles}>Ingedients:</Paragraph>
        <View style={styles.container}>
          {mealItem?.ingredients.map((ingred, key) => (
            <Paragraph key={key}>- {ingred}</Paragraph>
          ))}
        </View>
        <Paragraph style={styles.titles}>Steps:</Paragraph>
        <View style={styles.container}>
          {mealItem?.steps.map((step, index) => (
            <Paragraph key={index}>
              {index + 1} - {step}
            </Paragraph>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mealTitle: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 250,
  },
  titles: {
    fontWeight: "bold",
  },
  container: {
    padding: 16,
  },
});

export default MealsDetailsScreen;
