import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M8.69,10.67h2v-2L8.36,6.39a4,4,0,0,1,5.28,5.27l3.95,3.95a1.4,1.4,0,1,1-2,2l-3.95-3.95A4,4,0,0,1,6.39,8.36l2.3,2.31"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M8.69,10.67h2v-2L8.36,6.39a4,4,0,0,1,5.28,5.27l3.95,3.95a1.4,1.4,0,1,1-2,2l-3.95-3.95A4,4,0,0,1,6.39,8.36l2.3,2.31" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M8.69,10.67h2v-2L8.36,6.39a4,4,0,0,1,5.28,5.27l3.95,3.95a1.4,1.4,0,1,1-2,2l-3.95-3.95A4,4,0,0,1,6.39,8.36l2.3,2.31"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M8.69,10.67h2v-2L8.36,6.39a4,4,0,0,1,5.28,5.27l3.95,3.95a1.4,1.4,0,1,1-2,2l-3.95-3.95A4,4,0,0,1,6.39,8.36l2.3,2.31"
    />
  </Fragment>
);

const Tool = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Tool;
