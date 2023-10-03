import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import birdApp from './redux/FormReducers';
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(birdApp);

// const store = createStore(() => ({
//     formObj: [
//     {
//       PlaceFrom: 'hello',
//       DateFrom: '11/12/2000',
//       PlaceTo: 'admin',
//       DateTo: '11/01/2001',
//     }
//   ]
// }));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
