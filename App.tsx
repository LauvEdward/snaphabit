import React, {useState} from 'react';
import {Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import Home from './app/home';
import Onboarding from './app/onboarding';
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Onboarding/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
