import React from "react";
import { Table, Button } from "react-bootstrap";
import formatDate from "../utils/format";

const UsersTable = ({
  clickUpdateBtn,
  users,
  clickDeleteBtn,
  clickUserDisplayBtn,
}) => {
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

            const userProfileImg =
              avatar !== "" && avatar.startsWith("https://")
                ? avatar
                : require("../assets/no-img.jpeg");
            return (
              <tr key={id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    style={{ cursor: "pointer" }}
                    onClick={() => clickUserDisplayBtn(user)}
                    src={userProfileImg}
                    alt={firstname}
                  />
                </td>
                <td>{firstname}</td>
                <td>{lastname}</td>
                <td>
                  <a href="mailto:`{email}`">{email}</a>
                </td>
                <td>{formatDate(birthdate)}</td>
                <td>
                  <Button onClick={() => clickUpdateBtn(user)}>Update</Button>
                  <Button variant="danger" onClick={() => clickDeleteBtn(user)}>
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan={7}>No data found!</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default UsersTable;
