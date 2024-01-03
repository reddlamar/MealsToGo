import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthenticationContext } from "../authentication/authentication.context";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const { user } = useContext(AuthenticationContext);

  const saveFavourites = async (newFavourites, uid) => {
    try {
      await AsyncStorage.setItem(`favourites-${uid}`, newFavourites);
    } catch (e) {
      console.log("Error Saving:", e);
    }
  };

  const loadFavourites = async (uid) => {
    try {
      const savedFavourites = await AsyncStorage.getItem(`favourites-${uid}`);
      if (savedFavourites !== null) {
        setFavourites(JSON.parse(savedFavourites));
      }
    } catch (e) {
      console.log("Error Loading:", e);
    }
  };

  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = (restaurant) => {
    const filteredFavourites = favourites.filter(
      (favourite) => favourite.placeId !== restaurant.placeId,
    );
    setFavourites(filteredFavourites);
  };

  useEffect(() => {
    if (user) {
      const { uid } = user;
      loadFavourites(uid);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      const { uid } = user;
      saveFavourites(JSON.stringify(favourites), uid);
    }
  }, [favourites, user]);

  return (
    <FavouritesContext.Provider
      value={{ favourites, addToFavourites: add, removeFromFavourites: remove }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
