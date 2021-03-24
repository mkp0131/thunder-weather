import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loader from "./components/Loader";


const App = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <View style={styles.container}>
      <StatusBar style="light"/>
      {
        loading ?
        <Loader/> :
        <Text style={styles.text}>🧤 Hello</Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 62
  },
  bar: {
    // color: '#fff',
    // backgroundColor: '#ffbb00'
  }
});


export default App;