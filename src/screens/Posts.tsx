import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { AppState } from '../redux';
import { fetchOtherPosts } from '../redux/post/actions';
import { Post, ErrorMessage } from '../components';

const Posts: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector(
    (state: AppState) => state.post.otherPostsLoading,
  );
  const posts = useSelector((state: AppState) => state.post.otherPosts);
  const error = useSelector((state: AppState) => state.post.otherPostsError);

  const fetchPosts = () => {
    dispatch(fetchOtherPosts(1));
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
        renderItem={({ item }) => <Post title={item.title} body={item.body} />}
        onRefresh={fetchPosts}
        refreshing={loading}
      />
    </View>
  );
};

export default Posts;
