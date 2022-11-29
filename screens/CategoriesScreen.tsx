import { FlatList } from "react-native";
import CategoryGridTime from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummyData";

const CategoriesScreen: React.FC<{ navigation: any }> = ({
  navigation,
}): React.ReactElement => {
  const rederCategoryItem = (itemData: any) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverview");
    };

    return (
      <CategoryGridTime
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item: any) => item.id}
      renderItem={rederCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
