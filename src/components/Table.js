import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "../styles/table.css";

const options = {
  defaultSortName: "id",
  defaultSortOrder: "asc",
};

const Table = ({ product }) => {
  return (
    <div className="bTable">
      <BootstrapTable data={product} options={options} pagination>
        <TableHeaderColumn dataField="id" isKey width="14%">
          Repository Id
        </TableHeaderColumn>
        <TableHeaderColumn dataField="username" width="14%">
          Username
        </TableHeaderColumn>
        <TableHeaderColumn dataField="repo" width="14%">
          Repo
        </TableHeaderColumn>
        <TableHeaderColumn dataField="description" width="14%">
          Description
        </TableHeaderColumn>
        <TableHeaderColumn dataField="stars" dataSort={true} width="14%">
          Stars
        </TableHeaderColumn>
        <TableHeaderColumn dataField="forks" dataSort={true} width="14%">
          Forks
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField="lastUpdateDate"
          dataSort={true}
          width="14%"
        >
          Last Update Date
        </TableHeaderColumn>
      </BootstrapTable>
    </div>
  );
};
export default Table;
