import React from "react";
import { connect } from "react-redux";
import "./List.css";
import {removeList} from "../actions";

class ShowList extends React.Component {
  
  state = { edit: false};

  removeTask = dataValue => {
    return (
      this.props.removeList(dataValue)
    );
  };

  editTask = dataVal => {
   
    this.props.parentUpdate(dataVal);
  }; 

  listData() {
    return this.props.mydata.map((data, id) => {
      return (
        <div key={id}>
          <table border="1" className="table">
            <tbody>
              <tr>
                <td>{id + 1}</td>
                <td id={`data-${id}`}>
                {data}
                </td>
                <td onClick={() => this.editTask(id)}>
                  <i                    
                    className="fa fa-pencil-square-o"
                    aria-hidden="true"
                  />
                </td> 
                <td onClick={() => this.removeTask(id)}>
                  <i                    
                    className="fa fa-trash"
                    aria-hidden="true"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    });
  }
  render() {
    return <div>{this.listData()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    mydata: state.mydata
  };
};

export default connect(
  mapStateToProps,
  { removeList }
)(ShowList);