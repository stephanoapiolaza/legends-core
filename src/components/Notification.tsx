import React, {useEffect, useState} from "react";
import {Toast, ToastContainer} from "react-bootstrap";

const Notification = ({useContext}: {useContext: Function}) => {
  const [show, setShow] = useState(false);
  const[state, dispatch] = useContext();

  useEffect(() => {
    state.error.enabled && setShow(true);
  }, [state.error?.message])

  return (
    <>
      { show && (
        <ToastContainer position="top-end" className="p-3">
          <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide bg={'light'}>
            <Toast.Header>
              <strong className="ms-1 me-auto">Info</strong>
            </Toast.Header>
            <Toast.Body>{state.error?.message}</Toast.Body>
          </Toast>
        </ToastContainer>
      )}
    </>
  );
}

export default Notification;
