import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from "src/components/MainScreen/MainScreen";

const Stack = createStackNavigator();

const MainNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: true }}>
        <Stack.Screen
          name={'Main'}
          component={MainScreen}
          options={{
            title: 'Все продукты',
            headerLeft: () => <HeaderLeftMenu toggleDrawer={navigation.toggleDrawer} />
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default MainNav;
