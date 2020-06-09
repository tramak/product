import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from "src/screen/MainScreen/MainScreen";

const Stack = createStackNavigator();

const MainNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: true }}>
        <Stack.Screen
          name={'Main'}
          component={MainScreen}
          options={(navigation) => ({
            title: 'Все продукты 1',
            // headerLeft: () => <HeaderLeftMenu toggleDrawer={navigation.toggleDrawer} />
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default MainNav;
