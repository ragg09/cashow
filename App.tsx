import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import CounterScreen from './screens/counterScreen';

export default function App() {

  return (
    <Provider store={store}>
      {/* <View style={styles.container}>
        <Text>Counter</Text>
        <Text>{count} asd</Text>
        <StatusBar style="auto" />
      </View> */}
      <CounterScreen/>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
