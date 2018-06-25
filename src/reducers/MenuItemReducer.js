export default (state ={}, action) => {
    switch (action.type) {
        case "GET_MENU_ITEMS":
            return  Object.assign({},state,{MenuItems: action.options });
        case "SET_MENU_ITEMS":
            return  Object.assign({},state,{MenuItems: action.options });
        case "FETCH_INFO_SUCCESS":
            return Object.assign({},state, {info:action.response});
        default:
        	return state;  
    }
};