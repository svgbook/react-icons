import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M6,6h5.14A6.86,6.86,0,0,1,18,12.86V18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M6,6h5.14A6.86,6.86,0,0,1,18,12.86V18" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M6,6h5.14A6.86,6.86,0,0,1,18,12.86V18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M6,6h5.14A6.86,6.86,0,0,1,18,12.86V18" />
  </Fragment>
);

const RadiusTopRight = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default RadiusTopRight;
