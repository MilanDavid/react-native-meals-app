import { useEffect, useLayoutEffect } from "react";
import { FlatList } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/dummyData";

const MealsOverviewScreen: React.FC<{ route: any; navigation: any }> = ({
  route,
  navigation,
}): React.ReactElement => {
  const catId = route.params.categoryId;
  const color = route.params.color;

  const displayedmeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(catId)
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    )?.title;
    
    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);

  const renderMealItem = (itemData: any) => {
    return <MealItem meal={itemData.item} bgColor={color} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedmeals}
        keyExtractor={(meal) => meal.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MealsOverviewScreen;
