import React from 'react';
import { View, Text, TextInput, StyleSheet, Button, Image } from 'react-native';
import { Form, Field } from 'react-final-form';
import { FontAwesome } from '@expo/vector-icons';
import l from 'src/localization/l';
import Logo from "src/components/Logo/Logo";
import { MAIN_COLOR } from "src/themes/base";
import BlockInput from "src/components/Form/BlockInput";

const LoginScreen = () => {
    const onSubmit = (values) => {
        console.log({values});
    };

    return (
        <Form
            onSubmit={onSubmit}
        >
            {(props) => {
                const {form, valid} = props;

                return (
                    <View style={styles.content}>
                        <View style={styles.formView}>
                            <Logo/>
                            <Field
                                name="phone"
                                component={BlockInput}
                                placeholder={l('Phone')}
                                icon={<FontAwesome name="mobile" size={24} color={MAIN_COLOR} />}
                            />
                            <Field
                                name="password"
                                component={BlockInput}
                                placeholder={l('Password')}
                                icon={<FontAwesome name="lock" size={24} color={MAIN_COLOR} />}
                            />

                            <View style={styles.buttonWrap}>
                                <Button title={l('Login')} onPress={form.submit} color={MAIN_COLOR} />
                            </View>

                            <View style={styles.linkWrap}>
                                <Text style={styles.link}>{l('Forgot password?')}</Text>
                                <Text style={styles.link}>{l('No account? sing up')}</Text>
                            </View>
                        </View>
                    </View>
                )
            }}
        </Form>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    content: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
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
        // borderBottomColor: MAIN_COLOR,
        // borderBottomWidth: 1
    },
    formView: {
        width: 310,
        padding: 40,
    },
    buttonWrap: {
        marginTop: 10
    },
    linkWrap: {
        alignItems: 'center'
    },
    link: {
        color: MAIN_COLOR,
        marginTop: 20,
        textTransform: 'uppercase'
    }
});
