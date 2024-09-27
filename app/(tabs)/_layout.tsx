
import { Tabs } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TabsLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'teal',
        tabBarInActiveTintColor: 'black',
      }}
    >
      <Tabs.Screen 
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({color}) => <AntDesign name="home" size={20} color={color} />
        }}
        />
    </Tabs>
  );
}
