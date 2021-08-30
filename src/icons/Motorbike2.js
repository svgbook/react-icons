import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M14.47,7.06h.71a1.41,1.41,0,0,1,1.41,1.41V12a4.22,4.22,0,0,0-3.53,2.82H10.24V12H8.12A2.12,2.12,0,0,0,6,14.12v.7H7.41"
    />
    <line x1="8.12" y1="9.88" x2="10.23" y2="9.88" />
    <circle fill="none" cx="16.59" cy="15.53" r="1.41" />
    <path fill="none" d="M10.24,14.82v.71a1.42,1.42,0,0,1-2.83,0v-.71Z" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M14.47,7.06h.71a1.41,1.41,0,0,1,1.41,1.41V12a4.22,4.22,0,0,0-3.53,2.82H10.24V12H8.12A2.12,2.12,0,0,0,6,14.12v.7H7.41"
    />
    <line x1="8.12" y1="9.88" x2="10.23" y2="9.88" />
    <circle cx="16.59" cy="15.53" r="1.41" />
    <path d="M10.24,14.82v.71a1.42,1.42,0,0,1-2.83,0v-.71Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M14.47,7.06h.71a1.41,1.41,0,0,1,1.41,1.41V12a4.22,4.22,0,0,0-3.53,2.82H10.24V12H8.12A2.12,2.12,0,0,0,6,14.12v.7H7.41"
    />
    <line x1="8.12" y1="9.88" x2="10.23" y2="9.88" />
    <circle fillOpacity=".2" cx="16.59" cy="15.53" r="1.41" />
    <path fillOpacity=".2" d="M10.24,14.82v.71a1.42,1.42,0,0,1-2.83,0v-.71Z" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      d="M14.47,7.06h.71a1.41,1.41,0,0,1,1.41,1.41V12a4.22,4.22,0,0,0-3.53,2.82H10.24V12H8.12A2.12,2.12,0,0,0,6,14.12v.7H7.41"
    />
    <line x1="8.12" y1="9.88" x2="10.23" y2="9.88" />
    <circle fill={secondaryColor} cx="16.59" cy="15.53" r="1.41" />
    <path
      fill={secondaryColor}
      d="M10.24,14.82v.71a1.42,1.42,0,0,1-2.83,0v-.71Z"
    />
  </Fragment>
);

const Motorbike2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Motorbike2;
