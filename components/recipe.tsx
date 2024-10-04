
import { View, Text, Image, Pressable } from "react-native";
import { Link, useRouter } from "expo-router";

export interface RecipeProps {
  id: number,
  name: string,
  image: string
}

export function AllRecipe({id, name, image}: RecipeProps) {
  const router = useRouter();
  const handlePress = (id) => {
    router.push(`/recipe/${id}`);
  }

  return (
    <Pressable className="mx-auto" onPress={() => handlePress(id)}>
    <View className="max-w-[190px] m-2 justify-center items-center overflow-auto">
      <Image source={{
      uri: image
      }}
      className="w-[170px] h-[150px] object-cover"
      sizeMode="contain"
      />
      <Text className="text-2xl text-center ">{name}</Text>
    </View>
    </Pressable>
  );
}
