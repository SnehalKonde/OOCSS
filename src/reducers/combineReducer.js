import { combineReducers } from 'redux';
import MenuItemReducer from "./MenuItemReducer.js";

const combinedReducer = combineReducers({
    MenuItems : MenuItemReducer
});

export default combinedReducer;
