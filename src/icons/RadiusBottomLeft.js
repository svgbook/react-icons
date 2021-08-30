import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M18,18H12.86A6.86,6.86,0,0,1,6,11.14V6" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M18,18H12.86A6.86,6.86,0,0,1,6,11.14V6" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M18,18H12.86A6.86,6.86,0,0,1,6,11.14V6" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M18,18H12.86A6.86,6.86,0,0,1,6,11.14V6" />
  </Fragment>
);

const RadiusBottomLeft = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default RadiusBottomLeft;
