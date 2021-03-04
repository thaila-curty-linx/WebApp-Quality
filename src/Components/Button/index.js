import React from "react";

import { MyButton } from "./styles";

function Button({ children, ...rest }) {
  return (
    <div>
      <MyButton {...rest}>{children}</MyButton>
    </div>
  );
}

export default Button;
