import {createStore} from 'redux';
import reducer from '../reducer';


const store = createStore(reducer)

//DEV ONLY
window.store = store

export default store
