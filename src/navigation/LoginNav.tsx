import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "src/components/LoginScreen/LoginScreen";
import RegistrationScreen from "src/components/RegistrationScreen/RegistrationScreen";
import StartScreen from "src/components/StartScreen/StartScreen";

const Stack = createStackNavigator();
const LoginNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start" screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Start" component={StartScreen} headerShown />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LoginNav;
