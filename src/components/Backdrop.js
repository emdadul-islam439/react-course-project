function Backdrop(props) {
  function closeBackdrop() {
    props.onClick();
  }

  return <div className="backdrop" onClick={closeBackdrop}></div>;
}

export default Backdrop;
