import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { ERROR_COLOR, MAIN_COLOR } from "src/themes/color";

const BlockIconInput = ({
  input,
  meta,
  placeholder,
  icon = null,
  keyboardType = 'default',
  secureTextEntry
}) => {
  const isError = meta.error && meta.modified;
  const color = isError ? ERROR_COLOR : MAIN_COLOR;

  return (
    <View style={styles.block}>
      <View style={styles.iconWrap}>
        {icon && icon(color)}
      </View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        underlineColorAndroid={color}
        selectionColor={isError ? ERROR_COLOR : '#0481d9'}
        value={input.value}
        onChangeText={input.onChange}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
      {isError && (
        <View style={styles.errorBlock}>
          <Text style={styles.errorText}>{meta.error}</Text>
        </View>
      )}
    </View>
  );
};

export default BlockIconInput;

const styles = StyleSheet.create({
  block: {
    width: '100%',
    paddingLeft: 24,
    position: 'relative'
  },
  iconWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 10,
    width: 24
  },
  input: {
    height: 40,
    marginBottom: 10,
    paddingBottom: 10,
    width: '100%',
  },
  errorBlock: {
    // backgroundColor: 'blue'
    position: 'absolute',
    right: 0,
    bottom: 0
  },
  errorText: {
    color: ERROR_COLOR
  }
});
