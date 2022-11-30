import { FlatList } from "react-native";
import CategoryGridTime from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummyData";

const CategoriesScreen: React.FC = ({
  navigation,
}: any): React.ReactElement => {
  const rederCategoryItem = (itemData: any) => {
    const pressHandler = (color: string) => {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
        color: color,
      });
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
