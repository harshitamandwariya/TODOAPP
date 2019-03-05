import React from "react";
import { addList,editList } from "../actions";
import { connect } from "react-redux";

class CreateList extends React.Component {
  
  state = { term: "" };
  
  onInputChange = event => {
    this.setState({ term: event.target.value });
  };
  
  onSearchSubmit = event => {
    event.preventDefault();

     if (this.state.term !== "") {
      this.props.addList(this.state.term);
      this.setState({ term: "" });
    } else {
      alert("enter To Do item");
    }
  };

  onUpdateSubmit = event => {
    event.preventDefault();
    
    this.props.editList(this.state.term,this.props.childUpdate.editKey);
    this.setState({ term: "" });
   
    this.props.updateApp();
  };

 listForm() {
   if(this.props.childUpdate.edit && this.props.mydata.length !==0){
     return (
       <div className=" search-bar ui segment">
        <form onSubmit={this.onUpdateSubmit} className="ui form">
          <div className="field">
          <label>Update Task</label>
          <input
            id="textData"
            type="text"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          </div>
        </form>
       </div>
     );
    }else{
      return (
        <div className=" search-bar ui segment">
          <form onSubmit={this.onSearchSubmit} className="ui form">
            <div className="field">
              <label>Add Task</label>
              <input 
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
              />
            </div>
          </form>
        </div>
      );
    }
}
  render() {
    return <div className="ui relaxed divided list">{this.listForm()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    mydata: state.mydata
  };
};

export default connect(
  mapStateToProps,
  { addList,editList }
)(CreateList);