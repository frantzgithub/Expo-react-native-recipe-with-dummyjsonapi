import { View, Text, ImageBackground, Button } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function() {
const image ="https://c4.wallpaperflare.com/wallpaper/373/952/839/wooden-spoon-condiments-background-wallpaper-preview.jpg";

  return <SafeAreaView className="flex-1">
    <ImageBackground 
      source={{
        uri: image
        }}
        className="w-full h-full object-cover"
        resizeMode="cover"
      >

        <View className="flex-1 justify-center items-center gap-2">
          <Text className="text-3xl text-white font-bold">Welcome to my Recipe App</Text>
          <Text className="text-lg text-white mb-4">Want to see all the recipe hit the link below</Text>
          <Link href="/home" asChild>
            <Button title="Go to Home page" color="red" />
          </Link>
        </View>
      </ImageBackground>
    </SafeAreaView>
}
