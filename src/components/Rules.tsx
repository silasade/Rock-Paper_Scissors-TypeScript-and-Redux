import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import rules from "./images/image-rules.svg"
type RulesProps={
    show: boolean,
    onHide:()=>void
}
function Rules({show,onHide}:RulesProps) {
  return (
    <Modal
    show={show}
    onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Rules
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='rules'>
        <img  src={rules} alt="rules"/>
      </Modal.Body>
    </Modal>
  );
}
export default Rules
