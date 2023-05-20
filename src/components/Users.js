import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import UsersTable from "./UsersTable";
import axios from "axios";
import Search from "./Search";
import Loader from "./Loader";

const url = "https://61008c3dbca46600171cf917.mockapi.io/api/v1/users";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [show, setShow] = useState(false);

  const toggleModal = (id) => {
    setShow(!show);
    console.log(id);
  };

  const fetchUsers = async () => {
    setLoading(false);

    try {
      //   const res = await fetch(url);
      //   const d = await res.json();
      //   console.log(d);

      const { data } = await axios.get(url);
      //   console.log(data);
      setUsers(data);
    } catch (err) {
      console.log(err);
      setErrorMessage(err.message);
    } finally {
      setTimeout(() => {
        setLoading(true);
      }, 1500);
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

  const deleteUser = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);

      // fetchUsers();
      const filteredUsers = users.filter((user) => user.id !== id);
      setUsers(filteredUsers);
    } catch (err) {
      console.log(err);
    } finally {
      console.log("finally block");
    }
  };

  const updateUser = async (id, updatedUser) => {
    try {
      const res = await axios.put(`${url}/${id}`, updatedUser);

      console.log(res.data);
      //   setUsers();
    } catch (err) {
      console.log(err);
    } finally {
      console.log("finally block");
    }
  };

  return (
    <>
      <Container>
        {!loading ? (
          <Loader />
        ) : (
          <>
            <Row className="mb-3 mt-3">
              <Search handleSearch={handleSearch} />
              <Col className="text-end">
                <Button>Create a User</Button>
              </Col>
            </Row>
            <UsersTable
              errorMessage={errorMessage}
              users={filteredUsers}
              deleteUser={deleteUser}
              toggleModal={toggleModal}
            />
          </>
        )}
        <Modal show={show} onHide={toggleModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={toggleModal}>
              Close
            </Button>
            <Button variant="primary" onClick={toggleModal}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};

export default Users;
