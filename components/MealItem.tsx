import { GestureResponderEvent, Pressable, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import Meal from "../models/meal";

const MealItem: React.FC<{
  meal: Meal;
  onPress: React.EventHandler<GestureResponderEvent>;
}> = ({ meal, onPress }): React.ReactElement => {
  return (
    <Pressable onPress={onPress}>
      <Card style={styles.card}>
        <Card.Title title={meal.title} />
        <Card.Cover source={{ uri: String(meal.imageUrl) }} />
      </Card>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
  },
});

export default MealItem;
