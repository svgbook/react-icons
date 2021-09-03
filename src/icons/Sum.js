import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M17.14,15.43v1.71a.85.85,0,0,1-.85.86H6.86L12,12,6.86,6h9.43a.85.85,0,0,1,.85.86V8.57"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M17.14,15.43v1.71a.85.85,0,0,1-.85.86H6.86L12,12,6.86,6h9.43a.85.85,0,0,1,.85.86V8.57"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M17.14,15.43v1.71a.85.85,0,0,1-.85.86H6.86L12,12,6.86,6h9.43a.85.85,0,0,1,.85.86V8.57"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      d="M17.14,15.43v1.71a.85.85,0,0,1-.85.86H6.86L12,12,6.86,6h9.43a.85.85,0,0,1,.85.86V8.57"
    />
  </Fragment>
);

const Sum = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Sum;
