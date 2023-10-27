import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import CounterScreen from './screens/counterScreen';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <CounterScreen />
    </Provider>
  );
};

export default App;
