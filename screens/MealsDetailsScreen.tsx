import React, { useLayoutEffect } from "react";
import { FlatList, Image, ScrollView, StyleSheet, View } from "react-native";
import { Card, List, Paragraph, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { MEALS } from "../data/dummyData";

const MealsDetailsScreen: React.FC<{
  route: { params: { mealId: string } };
  navigation: any;
}> = ({ route, navigation }): React.ReactElement => {
  const mealId = route.params.mealId;
  const mealItem = MEALS.find((meal) => meal.id === mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: mealItem?.title,
    });
  }, []);

  const renderSteps = ({ item, index }: any) => (
    <Paragraph key={index}>
      {index + 1} - {item}
    </Paragraph>
  );

  const renderIngred = ({ item, index }: any) => (
    <Paragraph key={index}>- {item}</Paragraph>
  );

  return (
    <ScrollView>
      <SafeAreaView>
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
      </SafeAreaView>
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
