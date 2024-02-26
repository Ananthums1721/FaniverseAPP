import { View, Text, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home/Home";
import Notifications from "../Screens/Notifications/Notifications";
import { NavigationContainer } from "@react-navigation/native";
import Colors from "../Theme/Colors";
// import NotificationFSVG from "../assets/svg/NotificationFSVG";
import images from "../assets/Images";

const Tab = createBottomTabNavigator();

function TabNavigator({ title }) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: "center",
          //   tabBarActiveTintColor: Colors.primary,
          // tabBarInactiveTintColor: Colors.WHITE,
          // headerTitleStyle: { ...Typography.largeTextBold },
          // tabBarActiveBackgroundColor: Colors.BLACK,
          // tabBarInactiveBackgroundColor: Colors.BLACK,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home",
            headerShown: false,
            // tabBarIcon: ({ color }) => {
            //   return <NotificationFSVG height={20} width={20} color={color} />;
            // },
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
            // tabBarIcon: ({ color }) => {
            //   //   return <NotificationFSVG height={20} width={20} color={color} />;
            // },
            unmountOnBlur: true,
            tabBarHideOnKeyboard: true,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigator;
