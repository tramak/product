import React from 'react';
import { StyleSheet } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import { MAIN_COLOR } from "src/themes/base";
import { TextInput, View } from "react-native";

const BlockInput = ({ input, meta, placeholder, icon = null }) => {
    return (
        <View style={styles.block}>
            {icon}
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                underlineColorAndroid={MAIN_COLOR}
                selectionColor='#0481d9'
                value={input.value}
                onValueChange={input.onChange}
            />
        </View>
    );
};

export default BlockInput;

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    input: {
        height: 40,
        marginBottom: 10,
        paddingBottom: 10,
        width: '85%',
    },
});
