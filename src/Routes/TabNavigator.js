import { View, Text, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home/Home";
import Notifications from "../Screens/Notifications/Notifications";
import { NavigationContainer } from "@react-navigation/native";
import Colors from "../Theme/Colors";
import NotificationFSVG from "../assets/svg/NotificationFSVG";
import images from "../assets/Images";
import Reels from "../Screens/Reels/Reels";
import Contests from "../Screens/Contests/Contests";

const Tab = createBottomTabNavigator();

function TabNavigator({ title }) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: "center",
        tabBarActiveTintColor: Colors.primary,
        // tabBarInactiveTintColor: Colors.WHITE,
        // headerTitleStyle: { ...Typography.largeTextBold },
        tabBarActiveBackgroundColor: Colors.white,
        tabBarInactiveBackgroundColor: Colors.white,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => {
            return <NotificationFSVG height={20} width={20} color={color} />;
          },
          unmountOnBlur: true,
          tabBarHideOnKeyboard: true,
        }}
      />
      <Tab.Screen
        name="Reels"
        component={Reels}
        options={{
          title: "Reels",
          headerShown: false,
          tabBarIcon: ({ color }) => {
            return <NotificationFSVG height={20} width={20} color={color} />;
          },
          unmountOnBlur: true,
          tabBarHideOnKeyboard: true,
        }}
      />
      <Tab.Screen
        name="Contests"
        component={Contests}
        options={{
          title: "Contests",
          headerShown: false,
          tabBarIcon: ({ color }) => {
            return <NotificationFSVG height={20} width={20} color={color} />;
          },
          unmountOnBlur: true,
          tabBarHideOnKeyboard: true,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          title: "Notifications",
          headerShown: false,
          tabBarIcon: ({ color }) => {
            return <NotificationFSVG height={20} width={20} color={color} />;
          },
          unmountOnBlur: true,
          tabBarHideOnKeyboard: true,
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
