import { combineReducers } from 'redux'

const TodoReducer = (todolist = [] , action) => {

    switch (action.type) {
      // push term in array todolist
      case 'ADDTASK':
        return [...todolist , action.payload]
      case 'DELETETASK' :
        todolist.splice(action.payload,1);
        return [...todolist]
      case 'EDITTASK':
         todolist.splice(action.payload.index,1,action.payload.task)
         return [...todolist]
      default:
        return todolist
    }
  }

  // reducers index file



export default combineReducers({
  tasks : TodoReducer
})