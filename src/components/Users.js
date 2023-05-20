import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import UsersTable from "./UsersTable";

const url = "https://61008c3dbca46600171cf917.mockapi.io/api/v1/users";

const Users = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {};

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <Container>
        <Row className="mb-3 mt-3">
          <Col className="text-start">
            <form className="row">
              <div className="col-auto">
                <input
                  type="text"
                  placeholder="Search"
                  className="form-control"
                />
              </div>
              <div className="col-auto">
                <Button>Search</Button>
              </div>
            </form>
          </Col>
          <Col className="text-end">
            <Button>Create a User</Button>
          </Col>
        </Row>
        <UsersTable />
      </Container>
    </>
  );
};

export default Users;
