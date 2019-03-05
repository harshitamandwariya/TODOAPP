import React from 'react';
import {AddTask,DeleteTask,EditTask} from './actions';
import {connect} from 'react-redux';
class TodoList extends React.Component {
   constructor(props){
       super(props)
       this.state = {input: '', editState:false , index:''}
   }
   
   getInput = event =>{
        this.setState({input:event.target.value});
}

    addInput = (event) => {
      
        if(!this.state.editState){
            event.preventDefault();
            if(!(this.state.input === '')){
                this.props.AddTask(this.state.input);
                this.setState({input: ""})
            }
        }
        else{
            event.preventDefault();
            if(!(this.state.input === '')){
                this.props.EditTask(this.state.index,this.state.input);
                this.setState({input: ""})
            }
        }
        
        
        
            
    }

        removeTask = (index) => {
            this.props.DeleteTask(index);
        }

        editTask =(index,task) => {
            console.log('index=>',index);
            console.log('task=>',task);
            this.setState({input:task , editState:true , index:index})
        }

    renderList = () => {
       return this.props.tasks.map(((task,index)=>{
           return(

            <div key={index}>
            {task}
            <button onClick={() => this.removeTask(index)}>Delete</button>
            <button onClick={() =>this.editTask(index,task)}>Edit</button>
            </div>
           );
       }))
    }

    render(){
        return (
            <div>
             <form onSubmit={this.addInput}>
                <input value={this.state.input} type='text' onChange={this.getInput}/>
                <button type='submit'>Add</button>
            </form> 
            {this.renderList()}
            
        </div>
        ) ;   
    }
}

 const mapStateToProp = (state) => {
    return {
        tasks : state.tasks
    }
 }
export default connect(mapStateToProp,{AddTask,DeleteTask,EditTask})(TodoList);