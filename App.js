import React, { useState, useEffect } from 'react';
// import { AsyncStorage } from 'react-native';
// import { ApolloProvider } from 'react-apollo';
// import { StyleSheet, Text, View } from 'react-native';
import LoginNav from "src/navigation/LoginNav";
import { Provider } from "react-redux";
import store from 'src/store/index.js';
// import MainNav from "src/navigation/MainNav";
// import MenuNav from "src/navigation/MenuNav";
// import makeApolloClient from "src/apollo";
// import CenterSpinner from "src/components/CenterSpinner/CenterSpinner";

export default function App() {
  // const [client, setClient] = useState(null);

  // const fetchSession = async () => {
  //   const token = await AsyncStorage.getItem('@token');
  //
  //   const newClient = makeApolloClient(token);
  //   setClient(newClient);
  // };

  useEffect(() => {
    // fetchSession();
  }, []);

  // if (!client) return <CenterSpinner />;

  // return (
  //   <ApolloProvider client={client}>
  //     {/*<MenuNav />*/}
  //     <LoginNav />
  //   </ApolloProvider>
  // );
  return (
    <Provider store={store}>
      <LoginNav />
    </Provider>
  );
}
