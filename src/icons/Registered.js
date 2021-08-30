import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="12" cy="12" r="6" />
    <path
      fill="none"
      d="M10,14.67V9.33h2.67a1.34,1.34,0,0,1,0,2.67H10m2,0,2,2.67"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M12,5.5A6.5,6.5,0,1,0,18.5,12,6.51,6.51,0,0,0,12,5.5Zm2.4,8.87a.5.5,0,0,1-.1.7.57.57,0,0,1-.3.1.51.51,0,0,1-.4-.2L11.75,12.5H10.5v2.17a.5.5,0,1,1-1,0V9.33a.5.5,0,0,1,.5-.5h2.67A1.83,1.83,0,0,1,13,12.47Z"
    />
    <path
      stroke="none"
      d="M13.5,10.67a.83.83,0,0,1-.83.83H10.5V9.83h2.17A.84.84,0,0,1,13.5,10.67Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fillOpacity=".2" cx="12" cy="12" r="6" />
    <path
      fill="none"
      d="M10,14.67V9.33h2.67a1.34,1.34,0,0,1,0,2.67H10m2,0,2,2.67"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx="12" cy="12" r="6" />
    <path
      fill="none"
      d="M10,14.67V9.33h2.67a1.34,1.34,0,0,1,0,2.67H10m2,0,2,2.67"
    />
  </Fragment>
);

const Registered = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Registered;
