
import { View, Text, Image, ActivityIndicator } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";


interface Recipe {
  name: string,
  image: string,
  cuisine: string,
  ingredient: string[],
  difficulty: string
}

function recipeDetail() {
const { id } = useLocalSearchParams();
const [recipe, setRecipe] = useState<Recipe>({});
const [loading, setLoading] = useState<boolean>(true);
const [isError, setIsError] = useState<boolean>(false);
useEffect(() => {
  async function fetchRecipe() {
    try {
      const response = await fetch(`https://dummyjson.com/recipes/${id}`);
      const data = await response.json();

      setRecipe(data);
      setLoading(false);
    
    } catch (err: any) {
      setIsError(true);
      setLoading(false);
      }
      finally {
      setLoading(false)
      }
  }

  fetchRecipe();
}, []);

if(loading) {
  return <View className="flex-1 justify-center items-center">
    <ActivityIndicator size="large" color="#000" />
    </View>
}

if(isError) {
  return <View className="flex-1 justify-center items-center">
    <Text>There is an error, try again</Text>
    </View>
    }
return <SafeAreaView className="flex-1 justify-center">
  <View>
    <Image source={{
      uri: recipe.image
    }}
    className="w-full h-[250px] mx-3"
    sizeMode="contain"
    />
    <View className="mt-4 items-center">
      <Text className="text-2xl font-bold shadow-md">Name: {recipe.name}</Text>
      <Text className="text-lg font-bold">Cuisine: <Text>{recipe.cuisine}</Text></Text>
      <Text className="text-lg font-bold">Difficulty: <Text>{recipe.difficulty}</Text></Text>
    </View>
    <View className="mt-4 items-center">
      <Text className="text-2xl font-bold">Ingredients</Text>
      <Text>{recipe.ingredients[0]}</Text>
      <Text>{recipe.ingredients[1]}</Text>
      <Text>{recipe.ingredients[2]}</Text>
    </View>
  </View>
  <StatusBar style="dark" />
</SafeAreaView>
}

export default recipeDetail;
