import React from "react";
import "./App.css";
import { useModal } from "./components/Modal";
import { Button } from "@chakra-ui/react";

function App() {
  const { Modal, openModal } = useModal();
  const { Modal: Modal2, openModal: openModal2 } = useModal();
  return (
    <div className="App">
      <Button onClick={() => openModal()}>Open Dismissible Modal!</Button>
      <Modal title="Dismissible Modal" actions={["Submit"]}>
        I am a dismissible modal. You can get rid of me in a bunch of ways.
      </Modal>
      <Button onClick={() => openModal2()}>Open Modal!</Button>
      <Modal2 title="Blocking Modal" actions={["Submit"]} isBlocking={true}>
        I am a blocking modal. I have no close or cancel button, and you can not
        dismiss me by clicking the Overlay
      </Modal2>
    </div>
  );
}

export default App;
