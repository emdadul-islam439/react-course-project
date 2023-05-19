function Modal(props) {
  return(
    <div className="modal">
      <p>Are you sure deleting this?</p>
      <button className="btn btn--alt" onClick={props.handleOnClick}>Cancel</button>
      <button className="btn" onClick={props.handleOnClick}>Confirm</button>
    </div>  
  );
}

export default Modal;
