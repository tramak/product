import React from 'react';
import { Image, Text, View, StyleSheet } from "react-native";
import l from 'src/localization/l';
import { MAIN_COLOR } from "src/themes/color";

const Logo = () => {
  return (
    <View style={styles.logoWrap}>
      <Image source={require("./logo.png")} style={styles.logo} />
      <Text style={styles.logoText}>{l('Fermik')}</Text>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  logoWrap: {
    alignItems: 'center',
    marginBottom: 40
  },
  logo: {
    width: 110,
    height: 100
  },
  logoText: {
    fontSize: 20,
    textTransform: 'uppercase',
    color: MAIN_COLOR
  },
});
