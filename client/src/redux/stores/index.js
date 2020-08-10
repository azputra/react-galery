import { createStore, combineReducers, applyMiddleware, compose } from 'redux'

import thunk from 'redux-thunk'
import likeGaleryReducer from '../reducers/likeGalery'

const reducers = combineReducers({
    likeGaleryReducer,
})

const store = createStore(reducers, compose(applyMiddleware(thunk)))
export default store