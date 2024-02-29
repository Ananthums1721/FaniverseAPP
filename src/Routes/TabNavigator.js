import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home/Home";
import Notifications from "../Screens/Notifications/Notifications";
import Colors from "../Theme/Colors";
import Reels from "../Screens/Reels/Reels";
import Profile from "../Screens/Profile/Profile";
import Contests from "../Screens/Contests/Contests";

import NotificationFSVG from "../assets/svg/NotificationFSVG";
import HomeFSVG from "../assets/svg/HomeFSVG";
import ReelsFSVG from "../assets/svg/ReelsFSVG";
import ContestFSVG from "../assets/svg/ContestFSVG";
import ContestTSVG from "../assets/svg/ContestTSVG";
import ReelsTSVG from "../assets/svg/ReelsTSVG";
import HomeTSVG from "../assets/svg/HomeTSVG";
import CloseIconSVG from "../assets/svg/CloseIconSVG";
import FaniverseIconSVG from "../assets/svg/FaniverseIconSVG";
import { Button, Modal, Touchable, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import HomeScreenModal from "../Components/HomeScreenModal";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  // const CustomFaniverseButton = ({ children, onPress }) => {
  //   <TouchableOpacity
  //     style={{
  //       top: -30,
  //       justifyContent: "center",
  //       alignItems: "center",
  //       elevation: 5,
  //     }}
  //     onPress={onPress}
  //   >
  //     <View style={{ width: 70, height: 70, borderRadius: 35 }}>
  //       {children}
  //     </View>
  //   </TouchableOpacity>;
  // };

  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: "center",
          tabBarActiveTintColor: Colors.primary,
          // tabBarInactiveTintColor: Colors.WHITE,
          // headerTitleStyle: { ...Typography.largeTextBold },
          tabBarActiveBackgroundColor: Colors.white,
          tabBarInactiveBackgroundColor: Colors.white,
          tabBarLabel: "",
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              if (focused) {
                return <HomeTSVG height={40} width={40} color={color} />;
              }
              return <HomeFSVG height={40} width={40} color={color} />;
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
            tabBarIcon: ({ color, focused }) => {
              if (focused) {
                return <ReelsTSVG height={40} width={40} color={color} />;
              }
              return <ReelsFSVG height={40} width={40} color={color} />;
            },

            unmountOnBlur: true,
            tabBarHideOnKeyboard: true,
          }}
        />
        <Tab.Screen
          name="modal"
          component={HomeScreenModal}
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              //   if (focused) {
              //     return (
              //       <TouchableOpacity
              //         onPress={() => setModalTrue(true)}
              //         style={{ position: "relative", bottom: 20 }}
              //       >
              //         <CloseIconSVG height={60} width={60} color={color} />
              //       </TouchableOpacity>
              //     );
              //   }
              //   return (
              //     <TouchableOpacity style={{ position: "relative", bottom: 20 }}>
              //       <FaniverseIconSVG height={60} width={60} color={color} />
              //     </TouchableOpacity>
              //   );
              // },
              if (focused) {
                return (
                  <TouchableOpacity
                    style={{ position: "relative", bottom: 20 }}
                  >
                    {/* <CloseIconSVG height={60} width={60} color={color} /> */}
                  </TouchableOpacity>
                );
              }
              return (
                <TouchableOpacity style={{ position: "relative", bottom: 30 }}>
                  {/* <FaniverseIconSVG height={2} width={2} color={color} /> */}
                </TouchableOpacity>
              );
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
            tabBarIcon: ({ color, focused }) => {
              if (focused) {
                return <ContestTSVG height={40} width={40} color={color} />;
              }
              return <ContestFSVG height={40} width={40} color={color} />;
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
              return <NotificationFSVG height={40} width={40} color={color} />;
            },
            unmountOnBlur: true,
            tabBarHideOnKeyboard: true,
          }}
        />
      </Tab.Navigator>
      {/* <HomeScreenModal visible={modalTrue} onclose={modalFalse} /> */}
    </>
  );
}

export default TabNavigator;
