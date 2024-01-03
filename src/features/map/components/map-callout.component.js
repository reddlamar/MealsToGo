import React from "react";

import { Callout } from "react-native-maps";
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.component";

export const MapCallout = ({ restaurant, navigation }) => {
  return (
    <Callout
      onPress={() => navigation.navigate("RestaurantDetail", { restaurant })}
    >
      <CompactRestaurantInfo isMap restaurant={restaurant} />
    </Callout>
  );
};
