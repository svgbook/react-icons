import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="8" cy="16.67" r="1.33" />
    <circle fill="none" cx="16" cy="7.33" r="1.33" />
    <path
      fill="none"
      d="M12,16.67h3A2.34,2.34,0,0,0,15,12H9.67a2.34,2.34,0,1,1,0-4.67H12"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <circle cx="8" cy="16.67" r="1.33" />
    <circle cx="16" cy="7.33" r="1.33" />
    <path
      fill="none"
      d="M12,16.67h3A2.34,2.34,0,0,0,15,12H9.67a2.34,2.34,0,1,1,0-4.67H12"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fill="none" cx="8" cy="16.67" r="1.33" />
    <circle fill="none" cx="16" cy="7.33" r="1.33" />
    <path
      fill="none"
      strokeOpacity=".2"
      d="M12,16.67h3A2.34,2.34,0,0,0,15,12H9.67a2.34,2.34,0,1,1,0-4.67H12"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill="none" stroke={secondaryColor} cx="8" cy="16.67" r="1.33" />
    <circle fill="none" stroke={secondaryColor} cx="16" cy="7.33" r="1.33" />
    <path
      fill="none"
      d="M12,16.67h3A2.34,2.34,0,0,0,15,12H9.67a2.34,2.34,0,1,1,0-4.67H12"
    />
  </Fragment>
);

const Route = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Route;
