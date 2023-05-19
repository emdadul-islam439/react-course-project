function Modal() {
  return(
    <div className="modal">
      <p>Are you sure deleting this?</p>
      <button className="btn btn--alt">Cancel</button>
      <button className="btn">Confirm</button>
    </div>  
  );
}

export default Modal;
