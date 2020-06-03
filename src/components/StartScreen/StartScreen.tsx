import React from 'react';
import { View, StyleSheet, Button } from "react-native";
import Logo from "src/components/Logo/Logo";
import l from 'src/localization/l';
import {MAIN_COLOR} from "src/themes/base";

const StartScreen = ({ navigation }) => {
  return (
    <View style={styles.content}>
      <Logo />

      <View style={styles.buttons}>
        <View style={styles.buttonWrap}>
          <Button
            title={l('Login')}
            color={MAIN_COLOR}
            onPress={() => navigation.navigate('Login')}
          />
        </View>
        <Button
          title={l('Sing up')}
          color={MAIN_COLOR}
          onPress={() => navigation.navigate('Registration')}
        />
      </View>
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    width: 340
  },
  buttonWrap: {
    marginBottom: 20
  }
});
