import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from 'src/store';
import LoginNav from "src/navigation/LoginNav";
import CenterSpinner from "src/components/CenterSpinner/CenterSpinner";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<CenterSpinner />} persistor={persistor}>
        <LoginNav />
      </PersistGate>
    </Provider>
  );
};

export default App;
