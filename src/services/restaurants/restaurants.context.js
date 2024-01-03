import React, { useContext, useState, useEffect, createContext } from "react";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

import { LocationContext } from "../location/location.context";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const getRestaurants = (restaurantLocation) => {
    setIsLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      restaurantsRequest(restaurantLocation)
        .then(restaurantsTransform)
        .then((results) => {
          setRestaurants(results);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(setIsLoading(false));
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const locationStr = `${location.lat},${location.lng}`;
      getRestaurants(locationStr);
    }
  }, [location]);
  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
