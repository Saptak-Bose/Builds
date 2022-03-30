
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Home from './screens/Home';

export default function App() {
  return <Home />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
