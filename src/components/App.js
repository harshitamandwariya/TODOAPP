import React from "react";
import CreateList from "./CreateList";
import ShowList from "./ShowList";

class App extends React.Component {
  state = { edit: false,editKey:''};

  getUpdateKey = val =>{
    if(val !== undefined){
      this.setState({edit:true,editKey:val});
    }
  }

  resetToCreate = () =>{
    this.setState({edit:false,editKey:""});
  }

  render(){
    return (
    <div className="ui container">

      <CreateList childUpdate={this.state} updateApp={this.resetToCreate}/>
      <ShowList parentUpdate={this.getUpdateKey}/>
    </div>
  )};
};

export default App;