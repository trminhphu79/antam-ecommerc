import React, { Component } from "react";
import _ from "lodash";
import TableBody from "./tableBody";
import TableHead from './tableHead' ; 

class Table extends Component {
    
  render() {
    const { columns, data } = this.props;

    return (
      <table className="table">
        <TableHead columns={columns}/>
        <TableBody columns={columns} data={data}/>
      </table>
    );
  }
}

export default Table;
