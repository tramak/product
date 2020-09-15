import React from 'react';
import {View, Text, TextInput, StyleSheet, Button, TouchableOpacity, ScrollView} from 'react-native';
import { Form, Field } from 'react-final-form';
import { FontAwesome } from '@expo/vector-icons';
import {connect, ConnectedProps} from "react-redux";
import l from 'src/localization/l';
import Logo from "src/components/Logo/Logo";
import { MAIN_COLOR } from "src/themes/color";
import BlockIconInput from "src/components/Form/BlockIconInput";
import postData from "src/utils/postData";
import { FormProps } from "react-final-form";
import { ParamListBase } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack/src/types";
import { RootState } from "src/reducers";
import { login } from 'src/actions/settings';

const mapState = (state: RootState) => ({
  state
});

const mapDispatch = {
  login
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;
interface LoginScreenProps extends PropsFromRedux {
  navigation: StackNavigationProp<ParamListBase>
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation, login }) => {
  const onSubmit = async (values) => {
    console.log({values});
    login(values)
    // postData('/login', values);
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow:1}}>
      <Form
        onSubmit={onSubmit}
      >
        {(props: FormProps) => {
          const {form, valid} = props;
  
          return (
            <View style={styles.content}>
              <View style={styles.formView}>
                <Logo/>
                <Field<string>
                  name="phone"
                  component={BlockIconInput}
                  placeholder={l('Phone')}
                  icon={(color: string) => <FontAwesome name="mobile" size={24} color={color} />}
                  keyboardType={'phone-pad'}
                />
                <Field<string>
                  name="password"
                  component={BlockIconInput}
                  placeholder={l('Password')}
                  icon={(color: string) => <FontAwesome name="lock" size={24} color={color} />}
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

export default connector(LoginScreen);

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
