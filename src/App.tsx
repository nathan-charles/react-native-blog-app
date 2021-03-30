import React from 'react';
import { Provider } from 'react-redux';

import store from './redux';
import { AppNavigationContainer } from './navigation';

function App() {
  return (
    <Provider store={store}>
      <AppNavigationContainer />
    </Provider>
  );
}

export default App;
