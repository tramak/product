import React, {useEffect, useState} from 'react';
import {AsyncStorage} from "react-native";
import makeApolloClient from "../apollo";
import CenterSpinner from "./CenterSpinner/CenterSpinner";
import {ApolloProvider} from "react-apollo";

export default function BaseWrap(props) {
  const [client, setClient] = useState(null);

  const fetchSession = async () => {
    const token = await AsyncStorage.getItem('@token');
    const newClient = makeApolloClient(token);
    setClient(newClient);
  };

  useEffect(() => {
    fetchSession();
  }, []);

  if (!client) return <CenterSpinner />;

  return (
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>
  );
};
