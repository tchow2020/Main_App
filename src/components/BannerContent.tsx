import React from 'react';
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';

interface IBannerContentProps {
  name: string;
}

export function BannerContent({ name }: IBannerContentProps) {
  return (
    <View style={styles.content} >
      <Text style={styles.textname}>
        {name}
      </Text>
    </View>

  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'red',
    width: Dimensions.get('screen').width / 1.5,
    marginRight: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  textname: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});