import { FlatList } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummyData";

const MealsOverviewScreen: React.FC<{ route: any }> = ({
  route,
}): React.ReactElement => {
  const catId = route.params.categoryId;

  const displayedmeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(catId)
  );

  const renderMealItem = (itemData: any) => {
    return <MealItem meal={itemData.item} onPress={() => {}} />;
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
    padding: 16,
  },
});

export default MealsOverviewScreen;
