import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="7.5" cy="9" r="1.5" />
    <path
      fill="none"
      d="M18,9.75A2.25,2.25,0,0,0,15.75,7.5H15a2.25,2.25,0,0,0-2.25,2.25v4.5A2.25,2.25,0,0,0,15,16.5h.75A2.25,2.25,0,0,0,18,14.25"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <circle cx="7.5" cy="9" r="1.5" />
    <path
      fill="none"
      d="M18,9.75A2.25,2.25,0,0,0,15.75,7.5H15a2.25,2.25,0,0,0-2.25,2.25v4.5A2.25,2.25,0,0,0,15,16.5h.75A2.25,2.25,0,0,0,18,14.25"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fill="none" strokeOpacity=".2" cx="7.5" cy="9" r="1.5" />
    <path
      fill="none"
      d="M18,9.75A2.25,2.25,0,0,0,15.75,7.5H15a2.25,2.25,0,0,0-2.25,2.25v4.5A2.25,2.25,0,0,0,15,16.5h.75A2.25,2.25,0,0,0,18,14.25"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill="none" cx="7.5" cy="9" r="1.5" />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M18,9.75A2.25,2.25,0,0,0,15.75,7.5H15a2.25,2.25,0,0,0-2.25,2.25v4.5A2.25,2.25,0,0,0,15,16.5h.75A2.25,2.25,0,0,0,18,14.25"
    />
  </Fragment>
);

const TemperatureCelsius = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default TemperatureCelsius;
