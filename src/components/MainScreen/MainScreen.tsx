import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MainScreen = () => {
  return (
    <View style={styles.content}>
      <Text>MainScreen</Text>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
