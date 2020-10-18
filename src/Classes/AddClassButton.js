import React, { useState } from "react";

import ClassForm from "./ClassForm";
import Modal from "react-responsive-modal";

const AddClassButton = ({ gymID }) => {
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);

  const closeModal = () => setOpen(false);

  return (
    <div>
      <Modal open={open} onClose={closeModal} center>
        <ClassForm gymID={gymID} closeModal={closeModal} />
      </Modal>
      <input type="button" onClick={openModal} value="Add New Class!" />
    </div>
  );
};

export default AddClassButton;
