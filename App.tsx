import React from 'react';
import LoginScreen from 'src/components/LoginScreen/LoginScreen';
import { StyleSheet, Text, View } from 'react-native';
import StartScreen from "src/components/StartScreen/StartScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
