import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyPostsTab from './MyPostsTab';
import PostsTab from './PostsTab';

const BottomTab = createBottomTabNavigator();

const MainTabNavigation = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="MyPosts"
        component={MyPostsTab}
        options={{ title: 'My Posts' }}
      />
      <BottomTab.Screen
        name="Posts"
        component={PostsTab}
        options={{ title: 'Posts' }}
      />
    </BottomTab.Navigator>
  );
};

export default MainTabNavigation;
