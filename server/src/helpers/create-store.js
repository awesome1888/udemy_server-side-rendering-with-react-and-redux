import {createStore, applyMiddleware} from '../client/redux/index.js';
import thunk from 'redux-thunk';
import reducers from '../client/reducers/index.js';

// // TMP TMP TMP
// function createThunkMiddleware(extraArgument) {
//     return ({ dispatch, getState }) => next => action => {
//         if (typeof action === 'function') {
//             return action(dispatch, getState, extraArgument);
//         }
//
//         return next(action);
//     };
// }
//
// const thunk = createThunkMiddleware();
// thunk.withExtraArgument = createThunkMiddleware;
// // TMP TMP TMP END

export default () => {
    const store = createStore(reducers, {}, applyMiddleware(thunk));

    return store;
};
