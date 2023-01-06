import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainContainer from './components/mainContainer';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>CALCULADORA IMC</Text>
      <MainContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0fcf9e',
    alignItems: 'center',
    paddingTop: 45,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: "600",
  }
});
