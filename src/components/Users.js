import React from "react";
import { Table, Container, Row, Col, Button } from "react-bootstrap";

const Users = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
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
          <Col>
            <Button>Create a User</Button>
          </Col>
        </Row>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Users;
