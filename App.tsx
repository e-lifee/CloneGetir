//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigators/RootNavigator';
import 'react-native-gesture-handler';
import {LogBox} from 'react-native';
import store from "../GetirProject/src/redux/store"
import {Provider} from "react-redux"
import * as Linking from "expo-linking"

LogBox.ignoreAllLogs();

const prefix=Linking.createURL('/')

function App() {
 const linking={
  prefixes:[prefix],
  config:{
    screens:{
      Search:{
        screens:{
          CartScreen:{
            path:"cartScreen",
          }
        }
      }
    }
  }
 }
  return (
   <Provider store={store}>
      <NavigationContainer linking={linking}>
        <RootNavigator/>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //marginTop:'13%',
  },
});

export default App;
