import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M6,18V12.86A6.86,6.86,0,0,1,12.86,6H18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M6,18V12.86A6.86,6.86,0,0,1,12.86,6H18" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M6,18V12.86A6.86,6.86,0,0,1,12.86,6H18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M6,18V12.86A6.86,6.86,0,0,1,12.86,6H18" />
  </Fragment>
);

const RadiusTopLeft = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default RadiusTopLeft;
