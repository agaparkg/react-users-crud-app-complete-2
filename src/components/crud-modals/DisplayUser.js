import { Modal, Button, Table } from "react-bootstrap";
import formatDate from "../../utils/format";

const DisplayUser = ({ modal, setModal, currentUser }) => {
  const { firstname, lastname, email, birthdate, avatar, id } = currentUser;

  const userProfileImg =
    avatar !== "" && avatar.startsWith("https://")
      ? avatar
      : require("../../assets/no-img.jpeg");
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{modal.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <img src={userProfileImg} alt={firstname} />
        </div>
        <Table bordered>
          <thead>
            <tr style={{ backgroundColor: "lightgrey" }}>
              <th>ID #</th>
              <td>{id}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>First Name</th>
              <td>{firstname}</td>
            </tr>
            <tr>
              <th>Last Name</th>
              <td>{lastname}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{email}</td>
            </tr>
            <tr>
              <th>Birth Date</th>
              <td>{formatDate(birthdate)}</td>
            </tr>
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setModal({ active: false })}>
          Close
        </Button>
      </Modal.Footer>
    </>
  );
};

export default DisplayUser;
