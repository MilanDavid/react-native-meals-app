import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Meal from "../../models/meal";
import MealItem from "../MealItem";

const MealsList: React.FC<{ list: Meal[]; bgColor?: string }> = ({
  list,
  bgColor,
}): React.ReactElement => {
  const renderMealItem = (itemData: any) => {
    return <MealItem meal={itemData.item} bgColor={bgColor} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        keyExtractor={(meal) => meal.id}
        renderItem={renderMealItem}
        scrollEnabled
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MealsList;
