import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M7.41,6h2.83l1.41,3.53L9.88,10.59a7.83,7.83,0,0,0,3.53,3.53l1.06-1.77L18,13.76v2.83A1.41,1.41,0,0,1,16.59,18,11.3,11.3,0,0,1,6,7.41,1.41,1.41,0,0,1,7.41,6"
    />
    <line x1="14.47" y1="9.53" x2="18" y2="6" />
    <polyline fill="none" points="14.47 6.71 14.47 9.53 17.29 9.53" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M7.41,6h2.83l1.41,3.53L9.88,10.59a7.83,7.83,0,0,0,3.53,3.53l1.06-1.77L18,13.76v2.83A1.41,1.41,0,0,1,16.59,18,11.3,11.3,0,0,1,6,7.41,1.41,1.41,0,0,1,7.41,6" />
    <line x1="14.47" y1="9.53" x2="18" y2="6" />
    <polyline fill="none" points="14.47 6.71 14.47 9.53 17.29 9.53" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M7.41,6h2.83l1.41,3.53L9.88,10.59a7.83,7.83,0,0,0,3.53,3.53l1.06-1.77L18,13.76v2.83A1.41,1.41,0,0,1,16.59,18,11.3,11.3,0,0,1,6,7.41,1.41,1.41,0,0,1,7.41,6"
    />
    <line strokeOpacity=".2" x1="14.47" y1="9.53" x2="18" y2="6" />
    <polyline
      fill="none"
      strokeOpacity=".2"
      points="14.47 6.71 14.47 9.53 17.29 9.53"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M7.41,6h2.83l1.41,3.53L9.88,10.59a7.83,7.83,0,0,0,3.53,3.53l1.06-1.77L18,13.76v2.83A1.41,1.41,0,0,1,16.59,18,11.3,11.3,0,0,1,6,7.41,1.41,1.41,0,0,1,7.41,6"
    />
    <line stroke={secondaryColor} x1="14.47" y1="9.53" x2="18" y2="6" />
    <polyline
      fill="none"
      stroke={secondaryColor}
      points="14.47 6.71 14.47 9.53 17.29 9.53"
    />
  </Fragment>
);

const PhoneIncoming = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default PhoneIncoming;
