import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from 'src/screen/MainScreen/MainScreen';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import l from 'src/localization/l';
import { ProductAddScreen } from 'src/screen/Product/ProductAddScreen/ProductAddScreen';

const Tab = createBottomTabNavigator();
export default function MainBottomNav() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Main.All.index"
                component={MainScreen}
                options={{
                    tabBarLabel: l('Main'),
                    tabBarIcon: ({ color, size }) => <AntDesign name="home" size={25} color={color} />
                }}
            />
            <Tab.Screen
                name="Main.All.Add"
                component={ProductAddScreen}
                options={{
                    tabBarButton: (props) => (
                        <View style={styles.addWrap}>
                            <TouchableOpacity onPress={props.onPress}>
                                <View style={styles.add}>
                                    <Ionicons name="ios-add" size={35} color={'#ff0000'} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Main.All.Mark"
                component={MainScreen}
                options={{
                    title: l('Mark')
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    addWrap: {
        marginTop: -25,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    add: {
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        borderColor: '#ff0000',
        borderRadius: 20,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
