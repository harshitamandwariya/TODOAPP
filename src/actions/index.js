
export const addList = term => {
    return {
      type: "ADD_TODO",
      payload: term
    };
  };
  
  export const removeList = id => {
    return {
      type: "DELETE_TODO",
      payload: id
    };
  };
  
  export const editList = (term,id) => {
    return {
      type: "EDIT_TODO",
      payload: {
        term:term,
        id:id
      }
    };
  };