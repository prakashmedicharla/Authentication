import AuthReducer from './reducer';
import { createStore } from 'redux';
const store = createStore(AuthReducer);
export default store;