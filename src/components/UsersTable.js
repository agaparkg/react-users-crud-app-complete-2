import React from "react";
import { Table } from "react-bootstrap";

const UsersTable = ({ users }) => {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Avatar</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Birthdate</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => {
          const { firstname, lastname, email, birthdate, avatar, id } = user;
          return (
            <tr key={id}>
              <td>{index + 1}</td>
              <td>
                <img src={avatar} alt={firstname} />
              </td>
              <td>{firstname}</td>
              <td>{lastname}</td>
              <td>{email}</td>
              <td>{birthdate}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default UsersTable;
