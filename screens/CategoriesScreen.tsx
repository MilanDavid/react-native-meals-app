import { FlatList } from "react-native";
import CategoryGridTime from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummyData";

const rederCategoryItem: React.FC = (itemData: any): React.ReactElement => (
  <CategoryGridTime title={itemData.item.title} color={itemData.item.color} />
);

const CategoriesScreen: React.FC = (): React.ReactElement => {
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
