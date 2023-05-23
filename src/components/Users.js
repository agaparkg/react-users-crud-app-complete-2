import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import UsersTable from "./UsersTable";
import axios from "axios";
import Search from "./Search";
import Loader from "./Loader";
import CreateUser from "./crud-modals/CreateUser";
import DeleteUser from "./crud-modals/DeleteUser";
import UpdateUser from "./crud-modals/UpdateUser";
import DisplayUser from "./crud-modals/DisplayUser";

const url = "https://61008c3dbca46600171cf917.mockapi.io/api/v1/users";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentUser, setCurrentUser] = useState({
    id: null,
    firstname: "",
    lastname: "",
    avatar: "",
    email: "",
    birthdate: "",
  });
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({ name: "", active: false });

  const fetchUsers = async () => {
    setLoading(true);

    try {
      const { data } = await axios.get(url);
      setUsers(data);
    } catch (err) {
      console.error("Error while fetching users", err);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  const createUser = async (user) => {
    setModal({ active: false });
    setLoading(true);

    console.log("create user", user);

    try {
      const res = await axios.post(url, user);

      setUsers([...users, res.data]);
    } catch (err) {
      console.error("Error creating user", err);
    } finally {
      setLoading(false);
    }
  };

  const clickDeleteBtn = (user) => {
    const { firstname, lastname, email, birthdate, avatar, id } = user;

    setModal({ name: "Delete User", active: true });

    setCurrentUser({
      id,
      firstname,
      lastname,
      email,
      avatar,
      birthdate,
    });
  };

  const clickUserDisplayBtn = (user) => {
    const { firstname, lastname, email, birthdate, avatar, id } = user;

    setModal({ name: "Display User", active: true });

    setCurrentUser({
      id,
      firstname,
      lastname,
      email,
      avatar,
      birthdate,
    });
  };

  const clickUpdateBtn = (user) => {
    const { firstname, lastname, email, birthdate, avatar, id } = user;

    setModal({ name: "Update User", active: true });

    setCurrentUser({
      id,
      firstname,
      lastname,
      email,
      avatar,
      birthdate,
    });
  };

  const deleteUser = async (id) => {
    setModal({ active: false });
    setLoading(true);

    try {
      await axios.delete(`${url}/${id}`);

      const filteredUsers = users.filter((user) => user.id !== id);
      setUsers(filteredUsers);
    } catch (err) {
      console.error("Error deleting user", err);
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async (id, updatedUser) => {
    setModal({ active: false });
    setLoading(true);

    try {
      const res = await axios.put(`${url}/${id}`, updatedUser);

      setUsers(
        users.map((user) =>
          user.id === id ? Object.assign(user, res.data) : user
        )
      );
    } catch (err) {
      console.error("Error updating user", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredUsers = users.filter((user) => {
    return user.firstname.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <>
      <Container>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Row className="mb-3 mt-3">
              <Search handleSearch={handleSearch} />
              <Col className="text-end">
                <Button
                  onClick={() =>
                    setModal({ name: "Create User", active: true })
                  }
                >
                  Create a User
                </Button>
              </Col>
            </Row>
            <UsersTable
              users={filteredUsers}
              clickDeleteBtn={clickDeleteBtn}
              clickUpdateBtn={clickUpdateBtn}
              clickUserDisplayBtn={clickUserDisplayBtn}
            />
          </>
        )}
        {modal.active && (
          <Modal show={modal.active} onHide={() => setModal({ active: false })}>
            {modal.name === "Create User" && (
              <CreateUser
                createUser={createUser}
                modal={modal}
                setModal={setModal}
              />
            )}

            {modal.name === "Delete User" && (
              <DeleteUser
                currentUser={currentUser}
                deleteUser={deleteUser}
                modal={modal}
                setModal={setModal}
              />
            )}

            {modal.name === "Update User" && (
              <UpdateUser
                currentUser={currentUser}
                updateUser={updateUser}
                modal={modal}
                setModal={setModal}
              />
            )}

            {modal.name === "Display User" && (
              <DisplayUser
                currentUser={currentUser}
                modal={modal}
                setModal={setModal}
              />
            )}
          </Modal>
        )}
      </Container>
    </>
  );
};

export default Users;
