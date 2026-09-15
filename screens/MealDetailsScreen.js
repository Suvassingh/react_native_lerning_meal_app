import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import SubTitle from "../components/mealDetail/Subtitle";
import List from "../components/mealDetail/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  function headerButtonPresshandler() {
    console.log("Pressed!!!!");
  }
  useLayoutEffect(() => {
    navigation.setOptions(
      {
        headerRight: () => {
          return <IconButton icon='star' color='white'onPress={headerButtonPresshandler} />;
        },
      },
      [navigation, headerButtonPresshandler],
    );
  });
  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        affordable={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        textStyle={styles.detailTextStyle}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <SubTitle>Ingredients</SubTitle>
          <List data={selectedMeal.ingredients} />
          <SubTitle>Steps</SubTitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontFamily: "open-sans",
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailTextStyle: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
  rootContainer: {
    marginBottom: 32,
  },
});
