import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M7.06,15.88h3.53v-.21a4.94,4.94,0,1,1,2.82,0v.21h3.53"
    />
    <line x1="7.06" y1="18" x2="16.94" y2="18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M7.06,15.88h3.53v-.21a4.94,4.94,0,1,1,2.82,0v.21h3.53"
    />
    <line x1="7.06" y1="18" x2="16.94" y2="18" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      strokeOpacity=".2"
      d="M7.06,15.88h3.53v-.21a4.94,4.94,0,1,1,2.82,0v.21h3.53"
    />
    <line x1="7.06" y1="18" x2="16.94" y2="18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      d="M7.06,15.88h3.53v-.21a4.94,4.94,0,1,1,2.82,0v.21h3.53"
    />
    <line stroke={secondaryColor} x1="7.06" y1="18" x2="16.94" y2="18" />
  </Fragment>
);

const Zodiaclibra = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Zodiaclibra;
