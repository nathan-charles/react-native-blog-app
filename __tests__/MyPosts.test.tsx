import React from 'react';
import { render } from 'react-native-testing-library';
import * as redux from 'react-redux';

import { MyPosts } from '../src/screens';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(fn => fn()),
  useDispatch: () => jest.fn(),
}));

describe('MyPosts', () => {
  test('it renders posts', async () => {
    const state = {
      post: {
        userPostsLoading: false,
        userPosts: [
          {
            userId: 1,
            id: 1,
            title: 'title',
            body: 'body',
          },
        ],
        userPostsError: undefined,
      },
    };

    jest.spyOn(redux, 'useSelector').mockImplementation(cb => cb(state));

    const { getByTestId } = render(<MyPosts />);
    expect(getByTestId('post-row-0'));
  });

  test('it renders error', async () => {
    const errorText = 'Error Text';

    const state = {
      post: {
        userPostsLoading: false,
        userPosts: [],
        userPostsError: new Error(errorText),
      },
    };

    jest.spyOn(redux, 'useSelector').mockImplementation(cb => cb(state));

    const { getByText } = render(<MyPosts />);
    expect(getByText(errorText)).toBeDefined();
  });
});
