import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Loader = () => {
  return (
    <Text style={styles.text}>🥶 Loading...</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 36
  }
})

export default Loader;