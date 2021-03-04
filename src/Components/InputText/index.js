import React from "react";

import { Input } from "./styles";

function InputText({ ...rest }) {
  return (
    <div>
      <Input {...rest} />
    </div>
  );
}

export default InputText;
