import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  message: string;
};

const ErrorMessage: React.FC<Props> = ({ message }) => {
  const { containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={styles.titleStyle}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'red',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  titleStyle: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ErrorMessage;
