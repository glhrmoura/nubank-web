import { createStore } from 'redux';
import init from './init-store';
import nubank from './reducers';

const store = createStore(nubank);

export default init(store);