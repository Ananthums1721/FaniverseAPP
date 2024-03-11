import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useState, useEffect } from "react";
import local from "../Storage/Local";
import LoginScreen from "../Screens/Login/LoginScreen";
import WelcomeScreen from "../Screens/WelcomScreen/WelcomeScreen";
import TabNavigator from "./TabNavigator";
import GetStarted from "../Screens/GetStarted/GetStarted";
import OtpScreen from "../Screens/OtpScreen/OtpScreen";
import SignUpScreen from "../Screens/SignUp/SignUpScreen";
import CreatePasswordScreen from "../Screens/CreatePassword/CreatePasswordScreen";
import GenderScreen from "../Screens/StartUpQuestions/GenderScreen";
import DOBScreen from "../Screens/StartUpQuestions/DOBScreen";
import InterestSelection from "../Screens/StartUpQuestions/InterestSelection";
import SuccessScreen from "../Screens/StartUpQuestions/SuccessScreen";
import SplashScreen from "../Screens/Splash/SplashScreen";

const Stack = createStackNavigator();

const Authstack = () => {
  // const [token, setToken] = useState(null);

  //   useEffect(() => {
  //     const getToken = async () => {
  //       const loginData = await local.getLogin();
  //       console.log(loginData, "login data");
  //     };

  //     getToken();
  //   }, []);

  return (
    <Stack.Navigator
      initialRouteName="splash"
      screenOptions={{
        headerTitleAlign: "center",
        headerLeftLabelVisible: false,
        headerTintColor: "black",
        // headerTitleStyle: {...Typography.largeTextBold},
      }}
    >
      <Stack.Screen
        name="splash"
        options={{ headerShown: false }}
        component={SplashScreen}
      />
      <Stack.Screen
        name="WelcomeScreen"
        options={{ headerShown: false }}
        component={WelcomeScreen}
      />
      <Stack.Screen
        name="GetStarted"
        options={{ headerShown: false }}
        component={GetStarted}
      />

      <Stack.Screen
        name="LoginScreen"
        options={{ headerShown: false }}
        component={LoginScreen}
      />
      <Stack.Screen
        name="OtpScreen"
        options={{ headerShown: false }}
        component={OtpScreen}
      />
      <Stack.Screen
        name="SignUpScreen"
        options={{ headerShown: false }}
        component={SignUpScreen}
      />
      <Stack.Screen
        name="CreatePasswordScreen"
        options={{ headerShown: false }}
        component={CreatePasswordScreen}
      />
      <Stack.Screen
        name="GenderScreen"
        options={{ headerShown: false }}
        component={GenderScreen}
      />
      <Stack.Screen
        name="DOBScreen"
        options={{ headerShown: false }}
        component={DOBScreen}
      />
      <Stack.Screen
        name="InterestSelection"
        options={{ headerShown: false }}
        component={InterestSelection}
      />
      <Stack.Screen
        name="SuccessScreen"
        options={{ headerShown: false }}
        component={SuccessScreen}
      />
      <Stack.Screen
        name="tabs"
        options={{ headerShown: false }}
        component={TabNavigator}
      />
    </Stack.Navigator>
  );
};

export default Authstack;
