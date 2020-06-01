import React from 'react';
import { View, StyleSheet, Button } from "react-native";
import Logo from "src/components/Logo/Logo";
import l from 'src/localization/l';

const StartScreen = () => {
    return (
        <View style={styles.content}>
            <Logo />

            <View style={styles.buttons}>
                <View style={styles.buttonWrap}>
                    <Button title={l('Login')} onPress={() => {}} />
                </View>
                <Button title={l('Sing up')} onPress={() => {}} />
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
        width: 310
    },
    buttonWrap: {
        marginBottom: 20
    }
});
