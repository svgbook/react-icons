import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="7.33" y1="9.33" x2="7.33" y2="14.67" />
    <line x1="12" y1="9.33" x2="12" y2="14.67" />
    <path fill="none" d="M16.67,9.33v1.34A1.34,1.34,0,0,1,15.33,12h-8" />
    <circle fill="none" cx="7.33" cy="8" r="1.33" />
    <circle fill="none" cx="12" cy="8" r="1.33" />
    <circle fill="none" cx="16.67" cy="8" r="1.33" />
    <circle fill="none" cx="7.33" cy="16" r="1.33" />
    <circle fill="none" cx="12" cy="16" r="1.33" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="7.33" y1="9.33" x2="7.33" y2="14.67" />
    <line x1="12" y1="9.33" x2="12" y2="14.67" />
    <path fill="none" d="M16.67,9.33v1.34A1.34,1.34,0,0,1,15.33,12h-8" />
    <circle cx="7.33" cy="8" r="1.33" />
    <circle cx="12" cy="8" r="1.33" />
    <circle cx="16.67" cy="8" r="1.33" />
    <circle cx="7.33" cy="16" r="1.33" />
    <circle cx="12" cy="16" r="1.33" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line strokeOpacity=".2" x1="7.33" y1="9.33" x2="7.33" y2="14.67" />
    <line strokeOpacity=".2" x1="12" y1="9.33" x2="12" y2="14.67" />
    <path
      strokeOpacity=".2"
      fill="none"
      d="M16.67,9.33v1.34A1.34,1.34,0,0,1,15.33,12h-8"
    />
    <circle fill="none" cx="7.33" cy="8" r="1.33" />
    <circle fill="none" cx="12" cy="8" r="1.33" />
    <circle fill="none" cx="16.67" cy="8" r="1.33" />
    <circle fill="none" cx="7.33" cy="16" r="1.33" />
    <circle fill="none" cx="12" cy="16" r="1.33" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line stroke={secondaryColor} x1="7.33" y1="9.33" x2="7.33" y2="14.67" />
    <line stroke={secondaryColor} x1="12" y1="9.33" x2="12" y2="14.67" />
    <path
      stroke={secondaryColor}
      fill="none"
      d="M16.67,9.33v1.34A1.34,1.34,0,0,1,15.33,12h-8"
    />
    <circle fill="none" cx="7.33" cy="8" r="1.33" />
    <circle fill="none" cx="12" cy="8" r="1.33" />
    <circle fill="none" cx="16.67" cy="8" r="1.33" />
    <circle fill="none" cx="7.33" cy="16" r="1.33" />
    <circle fill="none" cx="12" cy="16" r="1.33" />
  </Fragment>
);

const Gearbox = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Gearbox;
