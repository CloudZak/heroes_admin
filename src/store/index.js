import { configureStore } from '@reduxjs/toolkit';
// import reducer from '../reducers';
import reducer from '../components/heroesList/heroesSlice';

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action);
}

// const store = createStore(
//                     reducer,
//                     compose(
//                             applyMiddleware(ReduxThunk, stringMiddleware),
//                             window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
//                     );

const store = configureStore({
    reducer: reducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
})


export default store;