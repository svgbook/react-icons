import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M18,6v5.14A6.86,6.86,0,0,1,11.14,18H6" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M18,6v5.14A6.86,6.86,0,0,1,11.14,18H6" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M18,6v5.14A6.86,6.86,0,0,1,11.14,18H6" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M18,6v5.14A6.86,6.86,0,0,1,11.14,18H6" />
  </Fragment>
);

const RadiusBottomRight = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default RadiusBottomRight;
