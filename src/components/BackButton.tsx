import React from 'react';
import { StyleSheet } from 'react-native';
import { BorderlessButton, BorderlessButtonProps } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons';

interface IBackButtonProps extends BorderlessButtonProps { }

export function BackButton({ ...rest }: IBackButtonProps) {
  return (
    <BorderlessButton
      style={styles.container}
      {...rest}
    >
      <Feather name='arrow-left' size={24} />
    </BorderlessButton>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 34,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
  }
})