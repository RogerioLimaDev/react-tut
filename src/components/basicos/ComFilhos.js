import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
  <div>
    <h2>Filhos</h2>
    <div>
        {props.children}
    </div>
  </div>
);
