import React from 'react';
import {View, Text, TextInput, StyleSheet, Button, TouchableOpacity, ScrollView} from 'react-native';
import { Form, Field } from 'react-final-form';
import { FontAwesome } from '@expo/vector-icons';
import l from 'src/localization/l';
import Logo from "src/components/Logo/Logo";
import { MAIN_COLOR } from "src/themes/color";
import BlockIconInput from "src/components/Form/BlockIconInput";

const LoginScreen = ({ navigation }) => {
  const onSubmit = (values) => {
    console.log({values});

    fetch('https://kalael-viktor.herokuapp.com/v1/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({query: `
        mutation {
              insert_user_one(
                object: {
                    password: "1234",
                    phone: "89892621552"
                }
              ) {
                    user_id
                }
            }
      `})
    })
      .then(r => r.json())
      .then(data => console.log('data returned:', data));
      };

  return (
    <ScrollView contentContainerStyle={{flexGrow:1}}>
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
                  component={BlockIconInput}
                  placeholder={l('Phone')}
                  icon={(color) => <FontAwesome name="mobile" size={24} color={color} />}
                  keyboardType={'phone-pad'}
                />
                <Field
                  name="password"
                  component={BlockIconInput}
                  placeholder={l('Password')}
                  icon={(color) => <FontAwesome name="lock" size={24} color={color} />}
                />
  
                <View style={styles.buttonWrap}>
                  <Button
                    title={l('Login')}
                    onPress={form.submit}
                    color={MAIN_COLOR}
                    disabled={!valid}
                  />
                </View>
  
                <View style={styles.linkWrap}>
                  <Text style={styles.link}>{l('Forgot password?')}</Text>
                  <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
                    <Text style={styles.link}>{l('No account? sing up')}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )
        }}
      </Form>
    </ScrollView>
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
