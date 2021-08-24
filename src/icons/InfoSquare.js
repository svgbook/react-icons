import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="12" y1="9" x2="12.01" y2="9" />
    <rect fill="none" x="6" y="6" width="12" height="12" rx="1.5" />
    <polyline fill="none" points="11.25 12 12 12 12 15 12.75 15" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M16.5,5.5h-9a2,2,0,0,0-2,2v9a2,2,0,0,0,2,2h9a2,2,0,0,0,2-2v-9A2,2,0,0,0,16.5,5.5ZM12,8.5h0a.5.5,0,1,1-.51.5A.5.5,0,0,1,12,8.5Zm.75,7H12a.5.5,0,0,1-.5-.5V12.5h-.25a.5.5,0,0,1,0-1H12a.5.5,0,0,1,.5.5v2.5h.25a.5.5,0,0,1,0,1Z"
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

const InfoSquare = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default InfoSquare;
