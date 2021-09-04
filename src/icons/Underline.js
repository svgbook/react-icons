import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M7.71,6v4.29a4.29,4.29,0,0,0,8.58,0V6" />
    <path d="M6,18H18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M7.71,6v4.29a4.29,4.29,0,0,0,8.58,0V6" />
    <path d="M6,18H18" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M7.71,6v4.29a4.29,4.29,0,0,0,8.58,0V6" />
    <path strokeOpacity=".2" d="M6,18H18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M7.71,6v4.29a4.29,4.29,0,0,0,8.58,0V6" />
    <path stroke={secondaryColor} d="M6,18H18" />
  </Fragment>
);

const Underline = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Underline;
