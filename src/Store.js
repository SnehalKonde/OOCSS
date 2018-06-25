import {applyMiddleware, createStore,compose} from 'redux';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import reducers from "./reducers/MenuItemReducer.js";

// const composeEnhancers =
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//       // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//     }) : compose;

// const enhancer = composeEnhancers(
//   applyMiddleware(logger),
// );

const Store =  createStore(reducers,{MenuItems:[{name:'Default',state:'Selected'}]},applyMiddleware(logger, ReduxThunk));

export default Store;
