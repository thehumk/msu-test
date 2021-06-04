import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import './sass/style.scss';
import {reducer} from './store/reducers/reducer';
import {createAPI} from './services/api';
import App from './components/app';
import { loadFilms } from './store/actions/api-actions';

const api = createAPI();

const store = createStore(
  reducer,
  applyMiddleware(thunk.withExtraArgument(api)),
)

Promise.all([
  store.dispatch(loadFilms())
])
.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root')
  );
});
