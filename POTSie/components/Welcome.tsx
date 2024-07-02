import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Welcome() {
  return (
    <View style={styles.container}>
        <Text style={styles.header}>Welcome to POTSie!</Text>
        <Text>Sign up or log in to get started.</Text>
        <Text>POTSie is an app to help you track blood pressure and heart rate, and how medications might affect those.</Text>
        <Text>This app is designed to help people primarily with POTS (Postural Orthostatic Tachycardia Syndrome), but also with hyper or hypotension.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
    },
  });

export default Welcome;