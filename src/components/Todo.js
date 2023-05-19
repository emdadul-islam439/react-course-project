import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function deleteHandler() {
    setIsModalOpen(true);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    { isModalOpen ? <Modal/> : null }
    { isModalOpen ? <Backdrop/> : null }
    </div>
  );
}

export default Todo;
