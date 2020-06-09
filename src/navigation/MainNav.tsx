import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from "src/screen/MainScreen/MainScreen";
import HeaderLeftMenu from 'src/components/HeaderLeftMenu/HeaderLeftMenu';

const Stack = createStackNavigator();

const MainNav = () => {
  return (
    <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name={'Main'}
        component={MainScreen}
        options={({ navigation }) => {
          return {
            title: 'Все продукты 2',
              headerLeft: () => <HeaderLeftMenu toggleDrawer={navigation.toggleDrawer} />
          }
        }}
      />
    </Stack.Navigator>
  )
};

export default MainNav;
