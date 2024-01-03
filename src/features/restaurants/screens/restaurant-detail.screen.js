import React from "react";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantDetail } from "../components/restaurant-detail.component";

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <RestaurantDetail restaurant={restaurant} />
    </SafeArea>
  );
};
