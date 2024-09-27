import { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AllRecipe } from "../../components/recipe";
import { StatusBar } from "expo-status-bar";

const initial = [
{
  id: 1,
  name: 'Food',
  image: "https://cdn.dummyjson.com/recipe-images/1.webp",
  cuisine: "English"
},
{
  id: 2,
  name: 'Comida',
  image: "https://cdn.dummyjson.com/recipe-images/2.webp",
  cuisine: "Spanish"
},
{
  id: 3,
  name: 'Cibo',
  image: "https://cdn.dummyjson.com/recipe-images/2.webp",
  cuisine: "italian"
},
  ];

interface Recipe {
  id: number;
  name: string;
  image: string;
  cuisine: string
}

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>(initial);

  return (
    <SafeAreaView>
      <Text className="font-bold text-3xl text-center mt-4">Hello World</Text>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
          return (
            <AllRecipe />
          );
        }
        }
      />
      <StatusBar backgroundColor="#333" style="light" />
    </SafeAreaView>
  );
}
