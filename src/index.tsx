import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router5';
import { Provider } from 'mobx-react';

import { App } from './containers/App';
import reportWebVitals from './reportWebVitals';
import { router } from './routes';
import { stores } from './stores';

import './index.css';

import './init';

router.start();

ReactDOM.render(
  <React.StrictMode>
    <Provider {...stores}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
