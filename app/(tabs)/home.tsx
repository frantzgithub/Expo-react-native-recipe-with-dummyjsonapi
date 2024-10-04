import { useState, useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AllRecipe } from "../../components/recipe";
import { StatusBar } from "expo-status-bar";

interface Recipe {
  id: number;
  name: string;
  image: string
}

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    async function getRecipes() {
      try {
      const response = await fetch("https://dummyjson.com/recipes");
      const data = await response.json();
      setRecipes(data.recipes);
      setIsLoading(false);
      } catch (err: any) {
        setIsError(true);
        }
        finally {
          setIsLoading(false);
          }
    }

    getRecipes();
  }, [])

if(isLoading) {
  return <View className="flex-1 justify-center items-center">
    <ActivityIndicator size="large" color="#000" />
  </View>
}

if(isError) {
  return <View className="flex-1 justify-center items-center">
    <Text>There is an error, please try again</Text>
  </View>
}

  return (
    <SafeAreaView className="m-2 mb-[60px]">
      <Text className="font-bold text-3xl text-center mt-4">Recipes</Text>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
          return (
            <AllRecipe
              id={item.id}
              name={item.name} 
              image={item.image} />
          );
        }
        }
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{margin: 10}}
      />
      <StatusBar backgroundColor="#333" style="light" />
    </SafeAreaView>
  );
}
