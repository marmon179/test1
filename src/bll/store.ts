import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk'
import {appReducer} from './appReducer';


const reducers = combineReducers({
    app: appReducer
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))
//types
export type AppStateType = ReturnType<typeof reducers>

//@ts-ignore
window.store = store