import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function Contats() {
  return (
    <View style={styles.container}>
      <Text>
        Contats Page
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});