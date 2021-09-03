import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="7.5" cy="9" r="1.5" />
    <line x1="12.75" y1="12" x2="16.5" y2="12" />
    <path fill="none" d="M18,7.5H13.5a.76.76,0,0,0-.75.75V16.5" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <circle cx="7.5" cy="9" r="1.5" />
    <line x1="12.75" y1="12" x2="16.5" y2="12" />
    <path fill="none" d="M18,7.5H13.5a.76.76,0,0,0-.75.75V16.5" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fill="none" strokeOpacity=".2" cx="7.5" cy="9" r="1.5" />
    <line x1="12.75" y1="12" x2="16.5" y2="12" />
    <path fill="none" d="M18,7.5H13.5a.76.76,0,0,0-.75.75V16.5" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill="none" cx="7.5" cy="9" r="1.5" />
    <line stroke={secondaryColor} x1="12.75" y1="12" x2="16.5" y2="12" />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M18,7.5H13.5a.76.76,0,0,0-.75.75V16.5"
    />
  </Fragment>
);

const TemperatureFahrenheit = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default TemperatureFahrenheit;
