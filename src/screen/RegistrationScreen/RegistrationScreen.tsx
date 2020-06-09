import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View, ScrollView, SafeAreaView} from "react-native";
import Logo from "src/components/Logo/Logo";
import {Field, Form} from "react-final-form";
import BlockIconInput from "src/components/Form/BlockIconInput";
import {FontAwesome} from "@expo/vector-icons";
import {MAIN_COLOR} from "src/themes/color";
import l from 'src/screen/LoginScreen/node_modules/src/localization/l';
import { required } from 'src/validation/required';
import { compare } from "src/validation/compare";
import {composeValidators} from "src/validation/composeValidators";

const RegistrationScreen = ({ navigation }) => {
  const onSubmit = (values) => {
    console.log({values});
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow:1}}>
      <View style={styles.content}>
        <Form
          onSubmit={onSubmit}
          validate={values => ({
            passwordRepeat: compare(values.password)(values.passwordRepeat)
          })}
        >
          {({form, valid}) => {

            return (
              <View>
                <View style={styles.formView}>
                  <Logo/>
                  <Field
                    name="name"
                    component={BlockIconInput}
                    placeholder={l('Name')}
                    icon={(color) => <FontAwesome name="user" size={24} color={color} />}
                  />
                  <Field
                    name="phone"
                    component={BlockIconInput}
                    placeholder={l('Phone')}
                    validate={required()}
                    icon={(color) => <FontAwesome name="mobile" size={24} color={color} />}
                    keyboardType={'phone-pad'}
                  />
                  <Field
                    name="password"
                    component={BlockIconInput}
                    placeholder={l('Password')}
                    validate={required()}
                    icon={(color) => <FontAwesome name="lock" size={24} color={color} />}
                    secureTextEntry
                  />
                  <Field
                    name="passwordRepeat"
                    component={BlockIconInput}
                    placeholder={l('Repeat password')}
                    validate={required()}
                    secureTextEntry
                  />

                  <View style={styles.buttonWrap}>
                    <Button
                      title={l('Sing up')}
                      onPress={form.submit}
                      color={MAIN_COLOR}
                      disabled={!valid}
                    />
                  </View>

                  <View style={styles.linkWrap}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                      <Text style={styles.link}>{l('Аlready have an account? Login')}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )
          }}
        </Form>
      </View>
    </ScrollView>
  );
};

export default RegistrationScreen;

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
  },
  formView: {
    width: 340,
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
    fontSize: 14,
    textTransform: 'uppercase'
  }
});
