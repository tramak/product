import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from 'src/store';
import CenterSpinner from "src/components/CenterSpinner/CenterSpinner";
import AppNav from "src/navigation/AppNav";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<CenterSpinner />} persistor={persistor}>
        <AppNav />
      </PersistGate>
    </Provider>
  );
};

export default App;
