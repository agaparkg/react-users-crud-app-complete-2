import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import UsersTable from "./UsersTable";
import axios from "axios";
import Search from "./Search";

const url = "https://61008c3dbca46600171cf917.mockapi.io/api/v1/users";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchUsers = async () => {
    try {
      //   const res = await fetch(url);
      //   const d = await res.json();
      //   console.log(d);

      const { data } = await axios.get(url);
      //   console.log(data);
      setUsers(data);
    } catch (err) {
      console.log(err);
    } finally {
      console.log("finally block");
    }
  };

  // async function fetchUsers(){
  // }

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) => {
    return user.firstname.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <>
      <Container>
        <Row className="mb-3 mt-3">
          <Search handleSearch={handleSearch} />
          <Col className="text-end">
            <Button>Create a User</Button>
          </Col>
        </Row>
        <UsersTable users={filteredUsers} />
      </Container>
    </>
  );
};

export default Users;
