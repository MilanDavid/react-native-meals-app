import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import { Card, Paragraph } from "react-native-paper";
import Meal from "../models/meal";

const MealItem: React.FC<{
  meal: Meal;
  bgColor: string;
  onPress: React.EventHandler<GestureResponderEvent>;
}> = ({ meal, onPress, bgColor }): React.ReactElement => {
  return (
    <View style={styles.card}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
      >
        <Card elevation={5} style={{ backgroundColor: bgColor }}>
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
