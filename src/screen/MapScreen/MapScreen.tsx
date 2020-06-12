import React from 'react';
import {View, Text, Button} from 'react-native';

export default function MapScreen({ navigation }) {
  
  return (
    <View>
      <Text>MapScreen</Text>
      <Button title="Go to main" onPress={() => navigation.navigate('Main.All.Index')} />
    </View>
  );
}
