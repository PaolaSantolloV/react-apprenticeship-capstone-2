import React from "react";
import Button from "../button/Button.component";

// eslint-disable-next-line react/prop-types
function Modal({ handleClose, show, title, children }) {
  const showHideClassName = show ? "block" : "none";

  return (
    <div title={title} display={showHideClassName}>
      <section>
        <div>
          <Button label="close" onClick={handleClose} />
        </div>
        {children}
      </section>
    </div>
  );
}

export default Modal;
