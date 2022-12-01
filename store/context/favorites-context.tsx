import React, { createContext, useState } from "react";

interface ContextState {
  // set the type of state you want to handle with context e.g.
  ids: string[];
  addFavorite: Function;
  removeFavorite: Function;
}

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id: string) => {},
  removeFavorite: (id: string) => {},
} as ContextState);

const FavoritesContextProvider: React.FC<{ children: React.ReactElement }> = ({
  children,
}): React.ReactElement => {
  const [favoriteMealIds, setFavoriteMealsIds] = useState<string[]>([]);

  const addFavorite = (id: string) => {
    setFavoriteMealsIds((currentFavIds: string[]) => [...currentFavIds, id]);
  };

  const removeFavorite = (id: string) => {
    setFavoriteMealsIds((currentFavIds: string[]) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  };

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
