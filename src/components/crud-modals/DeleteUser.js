import { Modal, Button } from "react-bootstrap";

const DeleteUser = ({ modal, setModal, currentUser, deleteUser }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    deleteUser(currentUser.id);
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{modal.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete {currentUser.firstname}{" "}
        {currentUser.lastname}?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setModal({ active: false })}>
          Close
        </Button>
        <Button variant="primary" onClick={onSubmit}>
          Delete User
        </Button>
      </Modal.Footer>
    </>
  );
};

export default DeleteUser;
