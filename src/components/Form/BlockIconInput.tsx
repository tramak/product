import React from 'react';
import { StyleSheet, Text, TextInput, View, ActivityIndicator } from 'react-native';
import { ERROR_COLOR, MAIN_COLOR } from "src/themes/color";
import { FieldRenderProps } from "react-final-form";

type BlockIconInputProps = FieldRenderProps<string, any> & {
  placeholder: string,
  icon: (color: string) => React.FC | undefined,
  keyboardType: string,
  secureTextEntry: boolean
};

const BlockIconInput: React.FC<BlockIconInputProps> = ({
  input,
  meta,
  placeholder,
  icon,
  keyboardType= 'default',
  secureTextEntry
}) => {
  const isError: boolean = meta.error && meta.modified;
  const color: string = isError ? ERROR_COLOR : MAIN_COLOR;

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
      {meta.validating && (
        <View style={styles.spinner}>
          <ActivityIndicator size="small" color={MAIN_COLOR} />
        </View>
      )}
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
  spinner: {
    position: 'absolute',
    top: 10,
    right: 10
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
