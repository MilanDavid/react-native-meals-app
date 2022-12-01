import { useLayoutEffect } from "react";
import MealsList from "../components/Meals/MealsList";
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

  return <MealsList list={displayedmeals} bgColor={color}/>;
};

export default MealsOverviewScreen;
