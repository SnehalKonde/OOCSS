export const getMenuItems = (options) => {
    return {
        type : "GET_MENU_ITEMS",
        options: options
    }
};
export const setMenuItems = (options) => {
    return {
        type : "SET_MENU_ITEMS",
        options: options
    }
};
