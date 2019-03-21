import { BrowserRouter }       from 'react-router-dom';
import { Provider }            from 'react-redux';
import App                     from 'components/App';
import React                   from 'react';
import ReactDOM                from 'react-dom';
import store                   from './store';

ReactDOM.hydrate(
  <BrowserRouter>
    <Provider store={ store }>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('react-root'),
);
