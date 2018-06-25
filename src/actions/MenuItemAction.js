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

export function getInfo() {
    return fetch('https://api.github.com/users/SnehalKonde');
}


function fetchSuccessfully(response) {
    return {
      type: 'FETCH_INFO_SUCCESS',
      response
    };
  }
   
  function fetchError(error) {
    return {
      type: 'FETCH_INFO_ERROR',
      error
    };
  }

export function getGitHubAccountInfo() {
    
     // Invert control!
     // Return a function that accepts `dispatch` so we can dispatch later.
     // Thunk middleware knows how to turn thunk async actions into actions.
    
     return function (dispatch) {
       return getInfo().then(
         response => dispatch(fetchSuccessfully(response)),
       ).catch((error) => {
            fetchError(error);
       });
     };
}

