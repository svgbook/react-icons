import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M6,6.86l4.29,4.28L6,15.43" />
    <line x1="12" y1="17.14" x2="18" y2="17.14" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M6,6.86l4.29,4.28L6,15.43" />
    <line x1="12" y1="17.14" x2="18" y2="17.14" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" strokeOpacity=".2" d="M6,6.86l4.29,4.28L6,15.43" />
    <line x1="12" y1="17.14" x2="18" y2="17.14" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M6,6.86l4.29,4.28L6,15.43" />
    <line stroke={secondaryColor} x1="12" y1="17.14" x2="18" y2="17.14" />
  </Fragment>
);

const Terminal = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Terminal;
