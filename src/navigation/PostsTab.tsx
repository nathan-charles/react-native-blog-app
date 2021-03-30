import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Posts } from '../screens';

const Stack = createStackNavigator();

const PostsTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Posts"
        component={Posts}
        options={{ title: 'Posts' }}
      />
    </Stack.Navigator>
  );
};

export default PostsTab;
