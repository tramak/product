import React, {useEffect, useState} from 'react';
import {View, StyleSheet, AsyncStorage} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MapScreen from "src/screen/MapScreen/MapScreen";
import MainNav from "src/navigation/MainNav";
import ProfileScreen from "src/screen/ProfileScreen/ProfileScreen";
import { AntDesign, Foundation } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();
export default function MenuNav() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Main"
        drawerType={'front'}
      >
        <Drawer.Screen
          name="Main"
          component={MainNav}
          options={{
            drawerLabel: 'Главная',
            drawerIcon: ({ size, color }) => <View style={styles.iconBlock}><AntDesign name="home" size={25} color={color} /></View>
          }}
        />
        <Drawer.Screen
          name="Messages"
          component={MapScreen}
          options={{
            drawerLabel: 'Сообщения',
            drawerIcon: ({ size, color }) => <View style={styles.iconBlock}><AntDesign name="mail" size={25} color={color} /></View>
          }}
        />
        <Drawer.Screen
          name="Map"
          component={MapScreen}
          options={{
            drawerLabel: 'Карта',
            drawerIcon: ({ size, color }) => (
              <View style={styles.iconBlock}>
                <Foundation name="map" size={25} color={color} />
              </View>
            )
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={ProfileScreen}
          options={{
            drawerLabel: 'Профиль',
            drawerIcon: ({ size, color }) => (
              <View style={styles.iconBlock}>
                <AntDesign name="user" size={25} color={color} />
              </View>
            )
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  iconBlock: {
    width: 30,
    alignItems: 'center'
  }
});