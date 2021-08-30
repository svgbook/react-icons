import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M6,17.65H9.75V16.9a5.51,5.51,0,1,1,4.5,0v.75H18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M6,17.65H9.75V16.9a5.51,5.51,0,1,1,4.5,0v.75H18" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M6,17.65H9.75V16.9a5.51,5.51,0,1,1,4.5,0v.75H18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M6,17.65H9.75V16.9a5.51,5.51,0,1,1,4.5,0v.75H18" />
  </Fragment>
);

const Omega = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Omega;
