import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native';

import { Entypo } from '@expo/vector-icons';

interface IButtonProps extends TouchableOpacityProps {
  title: string
}

export function Button({ title, ...rest }: IButtonProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      {...rest}
    >
      <Text>
        {title}
      </Text>

      <Entypo name='chevron-small-right' size={24} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#478565",
    height: 50,
    width: "100%",
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginBottom: 10,
  }
});