import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, View } from "react-native";
import { Card, Paragraph } from "react-native-paper";
import Meal from "../models/meal";

const MealItem: React.FC<{
  meal: Meal;
  bgColor?: string;
}> = ({ meal, bgColor }): React.ReactElement => {
  const navigation = useNavigation<any>();

  const selectMealItemHandler = (id: string) => {
    navigation.navigate("MealsDetails", {
      mealId: id,
    });
  };

  return (
    <View style={styles.card}>
      <Pressable
        onPress={() => selectMealItemHandler(meal.id)}
        style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
      >
        <Card
          elevation={5}
          style={{ backgroundColor: bgColor ? bgColor : "gold" }}
        >
          <Card.Title title={meal.title} titleStyle={{ color: "black" }} />
          <Card.Cover source={{ uri: String(meal.imageUrl) }} />
          <Card.Content>
            <Paragraph style={{ color: "black" }}>
              Duration: {meal.duration}m
            </Paragraph>
            <Paragraph style={{ color: "black" }}>
              Complexity: {meal.complexity.toUpperCase()}
            </Paragraph>
            <Paragraph style={{ color: "black" }}>
              Affordability: {meal.affordability.toUpperCase()}
            </Paragraph>
          </Card.Content>
        </Card>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
  },
});

export default MealItem;
