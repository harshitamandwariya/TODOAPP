export const AddTask = (task) => {
    
    
    return {
        type : 'ADDTASK',
        payload : task
    }
}

export const DeleteTask = (index) => {
    
    
    return {
        type : 'DELETETASK',
        payload : index
    }
}

export const EditTask = (index,task) => {
    
    
    return {
        type : 'EDITTASK',
        payload : {
            index:index,
            task:task
        }
    }
}
