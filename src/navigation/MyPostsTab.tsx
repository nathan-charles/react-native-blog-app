import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MyPosts } from '../screens';

const Stack = createStackNavigator();

const MyPostsTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyPosts"
        component={MyPosts}
        options={{ title: 'My Posts' }}
      />
    </Stack.Navigator>
  );
};

export default MyPostsTab;
