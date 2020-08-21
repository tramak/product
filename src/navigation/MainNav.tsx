import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';
import MainScreen from "src/screen/MainScreen/MainScreen";
import HeaderLeftMenu from 'src/components/HeaderLeftMenu/HeaderLeftMenu';
import MainBottomNav from "./MainBottomNav";

const Stack = createStackNavigator();

const MainNav = () => {
  return (
    <Stack.Navigator initialRouteName="Main.All" screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name={'Main.All'}
        component={MainBottomNav}
        options={({ navigation }) => {
          return {
            title: 'Все продукты',
            headerLeft: () => <HeaderLeftMenu toggleDrawer={navigation.toggleDrawer} />
          }
        }}
      />
    </Stack.Navigator>
  )
};

export default MainNav;
