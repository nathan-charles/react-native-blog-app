import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  testID?: string;
  title: string;
  body: string;
};

const Post: React.FC<Props> = ({ testID, title, body }) => {
  const { containerStyle } = styles;
  return (
    <View testID={testID} style={containerStyle}>
      <Text style={styles.titleStyle}>{title}</Text>
      <Text>{body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#FFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  titleStyle: {
    paddingTop: 4,
    paddingBottom: 8,
    fontWeight: 'bold',
  },
});

export default Post;
