import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M7.71,9.43v4.28a4.29,4.29,0,0,0,8.58,0V9.43" />
    <path d="M6,6H18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M7.71,9.43v4.28a4.29,4.29,0,0,0,8.58,0V9.43" />
    <path d="M6,6H18" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M7.71,9.43v4.28a4.29,4.29,0,0,0,8.58,0V9.43" />
    <path strokeOpacity=".2" d="M6,6H18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M7.71,9.43v4.28a4.29,4.29,0,0,0,8.58,0V9.43" />
    <path stroke={secondaryColor} d="M6,6H18" />
  </Fragment>
);

const Overline = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Overline;
