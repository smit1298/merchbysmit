import React from "react";
import Button from "@mui/material/Button";


function button(props) {
  return (
    <>
      <Button href={props.href} className={`btn-started ${props.className}`}>{props.children}</Button>
    </>
  );
}

export default button;
      