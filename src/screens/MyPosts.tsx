import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { AppState } from '../redux';
import { fetchUserPosts } from '../redux/post/actions';
import { Post, ErrorMessage } from '../components';

const MyProfile: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: AppState) => state.post.userPostsLoading);
  const posts = useSelector((state: AppState) => state.post.userPosts);
  const error = useSelector((state: AppState) => state.post.userPostsError);

  const fetchPosts = () => {
    dispatch(fetchUserPosts(1));
  };

  useEffect(() => {
    fetchPosts();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <View>
      {error && <ErrorMessage message={error.message} />}
      <FlatList
        data={posts}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item, index }) => (
          <Post
            testID={`post-row-${index}`}
            title={item.title}
            body={item.body}
          />
        )}
        onRefresh={fetchPosts}
        refreshing={loading}
      />
    </View>
  );
};

export default MyProfile;
