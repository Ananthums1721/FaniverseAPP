
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // For handling asynchronous actions
import reducers from '../reducers';

const store = createStore(reducers, applyMiddleware(thunk));

export default store;

