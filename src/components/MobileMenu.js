import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { HiMenu } from "react-icons/hi";

export default function MobileMenu() {
  const values = ["sm-down", "md-down", "lg-down", "xl-down", "xxl-down"];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      <Button
        className="navbar-toggler toggler-example mr-4 me-2"
        onClick={() => handleShow("md-down")}
      >
        <HiMenu size={"1.6rem"} />
      </Button>
      <Modal
        show={show}
        fullscreen={fullscreen}
        onHide={() => setShow(false)}
        dialogClassName="w-100"
      >
        <Modal.Dialog style={{ width: "100vw" }}>
          <Modal.Header closeButton>
            <Modal.Title>Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>Modal body content</Modal.Body>
        </Modal.Dialog>
      </Modal>
    </>
  );
}
