import React from "react";
import { Table, Button } from "react-bootstrap";

const UsersTable = ({ errorMessage, toggleModal, users, deleteUser }) => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

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
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.length !== 0 ? (
          users.map((user, index) => {
            const { firstname, lastname, email, birthdate, avatar, id } = user;
            return (
              <tr key={id}>
                <td>{index + 1}</td>
                <td>
                  <img src={avatar} alt={firstname} />
                </td>
                <td>{firstname}</td>
                <td>{lastname}</td>
                <td>
                  <a href="mailto:`{email}`">{email}</a>
                </td>
                <td>{formatDate(birthdate)}</td>
                <td>
                  <Button onClick={() => toggleModal(id)}>Update</Button>
                  <Button variant="danger" onClick={() => deleteUser(id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan={7}>{errorMessage}</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default UsersTable;
