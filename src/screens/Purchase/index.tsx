import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function Purchase() {
  return (
    <View style={styles.container}>
      <Text>
        Purchase Page
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