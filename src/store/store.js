import {createStore} from 'redux'
import {myreduers} from '../store/reducers'


let store= createStore(myreduers);
 export default store;