import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="12" cy="12" r="6" />
    <line x1="12" y1="9.33" x2="12.01" y2="9.33" />
    <polyline fill="none" points="11.33 12 12 12 12 14.67 12.67 14.67" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M12,5.5A6.5,6.5,0,1,0,18.5,12,6.51,6.51,0,0,0,12,5.5Zm0,3.33h0a.51.51,0,0,1,.5.5.51.51,0,1,1-.51-.5Zm.67,6.34H12a.5.5,0,0,1-.5-.5V12.5h-.17a.5.5,0,1,1,0-1H12a.5.5,0,0,1,.5.5v2.17h.17a.5.5,0,0,1,.5.5A.51.51,0,0,1,12.67,15.17Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fillOpacity=".2" cx="12" cy="12" r="6" />
    <line x1="12" y1="9.33" x2="12.01" y2="9.33" />
    <polyline fill="none" points="11.33 12 12 12 12 14.67 12.67 14.67" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx="12" cy="12" r="6" />
    <line x1="12" y1="9.33" x2="12.01" y2="9.33" />
    <polyline fill="none" points="11.33 12 12 12 12 14.67 12.67 14.67" />
  </Fragment>
);

const InfoCircle = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default InfoCircle;
