import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import "../styles/global.css";

const Test = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="relative">
      <button className="fixed right-0 top-0 p-4" onClick={toggleModal}>
        <AiOutlineMenu className="text-2xl" />
      </button>

      <div
        className={`modal-overlay ${
          modalOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={toggleModal}
      >
        <div className="modal bg-white p-4 transform -translate-x-full transition-transform duration-300 ease-in-out">
          <p>This is the modal content.</p>
        </div>
      </div>
    </div>
  );
};

export default Test;
