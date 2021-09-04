import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="11.99" y1="16.24" x2="12" y2="16.24" />
    <path fill="none" d="M10,14.24a2.84,2.84,0,0,1,4,0" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="11.99" y1="16.24" x2="12" y2="16.24" />
    <path fill="none" d="M10,14.24a2.84,2.84,0,0,1,4,0" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line x1="11.99" y1="16.24" x2="12" y2="16.24" />
    <path fill="none" strokeOpacity=".2" d="M10,14.24a2.84,2.84,0,0,1,4,0" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line x1="11.99" y1="16.24" x2="12" y2="16.24" />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M10,14.24a2.84,2.84,0,0,1,4,0"
    />
  </Fragment>
);

const Wifi1 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Wifi1;
