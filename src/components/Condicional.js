import React from "react";

export default props =>
<div>
    <h1>O número é {props.número}</h1>
    {
        props.número % 2 == 0 ?
        <span>par</span>
        :<span>ímpar</span>
    }
</div>
