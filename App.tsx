import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Provider} from 'react-redux';
import reduxStore from './src/redux/store';
import Routes from './src/Routes/HomeStack';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeStack from './src/Routes/HomeStack';
import TabNavigator from './src/Routes/TabNavigator';
const Stack = createStackNavigator();



const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const App = () => {
  return (
    <Provider store={reduxStore}>
      {/* <Routes /> */}
      {/* <TabNavigator /> */}
      <NavigationContainer>
          <Stack.Navigator initialRouteName="home">
            <Stack.Screen
              name="home"
              component={TabNavigator}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>

        </NavigationContainer>

    </Provider>
  );
};

export default App;
