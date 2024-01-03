import React, { useState } from "react";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";

export const RestaurantDetail = ({ restaurant = {} }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);
  const { name } = restaurant;

  const handlePressBreakfastExpand = () =>
    setBreakfastExpanded(!breakfastExpanded);
  const handlePressLunchExpand = () => setLunchExpanded(!lunchExpanded);
  const handlePressDinnerExpand = () => setDinnerExpanded(!dinnerExpanded);
  const handlePressDrinksExpand = () => setDrinksExpanded(!drinksExpanded);

  return (
    <ScrollView>
      <List.Section title={`${name} Details`}>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={handlePressBreakfastExpand}
        >
          <List.Item title="Eggs Benedict" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={handlePressLunchExpand}
        >
          <List.Item title="Burger w/ Fries" />
          <List.Item title="Steak Sandwich" />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>

        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={handlePressDinnerExpand}
        >
          <List.Item title="Spaghetti Bolognese" />
          <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
          <List.Item title="Steak Frites" />
        </List.Accordion>

        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={handlePressDrinksExpand}
        >
          <List.Item title="Coffee" />
          <List.Item title="Tea" />
          <List.Item title="Modelo" />
          <List.Item title="Coke" />
          <List.Item title="Fanta" />
        </List.Accordion>
      </List.Section>
    </ScrollView>
  );
};

export default RestaurantDetail;
