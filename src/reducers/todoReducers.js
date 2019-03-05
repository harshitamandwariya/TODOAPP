export default (todolist = [] , action) => {

    switch (action.type) {
        case 'ADD_TODO':
        return [...todolist, action.payload]
      case 'DELETE_TODO':
        todolist.splice(action.payload, 1)
        return [...todolist]
      case 'EDIT_TODO':
        todolist.splice(action.payload.id, 1, action.payload.term)
        return [...todolist]
      default:
        return todolist
    }
  }