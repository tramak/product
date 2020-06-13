import React from 'react';
import {View, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from 'src/screen/MainScreen/MainScreen';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import l from 'src/localization/l';
import { ProductAddScreen } from 'src/screen/Product/ProductAddScreen/ProductAddScreen';

const Tab = createBottomTabNavigator();

// function MyTabBar({ state, descriptors, navigation }) {
//   const focusedOptions = descriptors[state.routes[state.index].key].options;
//
//   if (focusedOptions.tabBarVisible === false) {
//     return null;
//   }
//
//   return (
//     <View style={{ position: 'relative', flexDirection: 'column', backgroundColor: 'blue', alignItems: 'center' }}>
//       <TouchableNativeFeedback onPress={() => console.log('10')} style={{ flex: 1 }}>
//         <View style={styles.add}>
//           <Ionicons name="ios-add" size={35} color={'#ff0000'} />
//         </View>
//       </TouchableNativeFeedback>
//       <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white' }}>
//         {state.routes.map((route, index) => {
//           const { options } = descriptors[route.key];
//           const label =
//             options.tabBarLabel !== undefined
//               ? options.tabBarLabel
//               : options.title !== undefined
//               ? options.title
//               : route.name;
//
//           const isFocused = state.index === index;
//
//           const color = isFocused ? '#673ab7' : '#222';
//           const Icon = options.tabBarIcon !== undefined
//             ? options.tabBarIcon({ color, size: 25 })
//             : null;
//
//           const onPress = () => {
//             const event = navigation.emit({
//               type: 'tabPress',
//               target: route.key,
//               canPreventDefault: true,
//             });
//
//             if (!isFocused && !event.defaultPrevented) {
//               navigation.navigate(route.name);
//             }
//           };
//
//           const onLongPress = () => {
//             navigation.emit({
//               type: 'tabLongPress',
//               target: route.key,
//             });
//           };
//
//           return (
//             <TouchableOpacity
//               accessibilityRole="button"
//               accessibilityStates={isFocused ? ['selected'] : []}
//               accessibilityLabel={options.tabBarLabel}
//               testID={options.tabBarTestID}
//               onPress={onPress}
//               onLongPress={onLongPress}
//               style={{ borderColor: '#ccc', borderWidth: 1, flex: 1, justifyContent: 'center', alignItems: 'center' }}
//             >
//                 {Icon}
//                 <Text style={{ color }}>
//                 {label}
//                 </Text>
//             </TouchableOpacity>
//           );
//         })}
//       </View>
//     </View>
//   );
// }

export default function MainBottomNav() {
  return (
    <Tab.Navigator>
    {/*<Tab.Navigator tabBar={props => <MyTabBar {...props} />}>*/}
      <Tab.Screen
        name="Main.All.Index"
        component={MainScreen}
        options={{
          tabBarLabel: l('Main'),
          tabBarIcon: ({ color, size }) => <AntDesign name="home" size={25} color={color} />,
          tabBarOptions: {
            safeAreaInset: { top: 'always', bottom: 'never' }
          }
        }}
      />
      <Tab.Screen
        name="Main.All.Add"
        component={ProductAddScreen}
        options={{
          tabBarAccessibilityLabel: true,
          tabBarButton: (props) => (
            <View style={styles.addWrap}>
              <TouchableNativeFeedback onPress={props.onPress} style={{ flex: 1 }}>
                <View style={styles.add}>
                  <Ionicons name="ios-add" size={35} color={'#ff0000'} />
                </View>
              </TouchableNativeFeedback>
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
    // flex: 1,
    // backgroundColor: 'green',
    // marginTop: -25,
    // alignItems: 'center',
    // justifyContent: ''
  },
  add: {
    // position: 'absolute',
    zIndex: 100,
    marginBottom: -25,
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
