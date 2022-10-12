import {legacy_createStore as createStore} from 'redux'
import { rootreducer } from '../Reducers/CombineReducer'
export const Store = createStore(rootreducer)