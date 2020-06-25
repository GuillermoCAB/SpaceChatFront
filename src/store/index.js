import { createStore } from 'redux';
import users from '../reducers/user';

const store = createStore(users);

export default store;