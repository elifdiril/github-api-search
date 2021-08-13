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
        <TableHeaderColumn dataField="id" isKey width="10%">
          Repository Id
        </TableHeaderColumn>
        <TableHeaderColumn dataField="name" width="10%">
          Username
        </TableHeaderColumn>
        <TableHeaderColumn dataField="description" width="35%">
          Description
        </TableHeaderColumn>
        <TableHeaderColumn dataField="stargazers_count" dataSort={true} width="15%">
          Stars
        </TableHeaderColumn>
        <TableHeaderColumn dataField="forks_count" dataSort={true} width="15%">
          Forks
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField="updated_at"
          dataSort={true}
          width="15%"
        >
          Last Update Date
        </TableHeaderColumn>
      </BootstrapTable>
    </div>
  );
};
export default Table;
