import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M6,7.5V6.75A.76.76,0,0,1,6.75,6H7.5m3.75,0h1.5M16.5,6h.75a.76.76,0,0,1,.75.75V7.5m0,3.75v1.5m0,3.75v.75a.76.76,0,0,1-.75.75H16.5"
    />
    <path
      fill="none"
      d="M12,12.75V18H6.75A.76.76,0,0,1,6,17.25V12h5.25A.76.76,0,0,1,12,12.75Z"
    />
    <line x1="12.75" y1="18" x2="12" y2="18" />
    <line x1="6" y1="12" x2="6" y2="11.25" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M6,7.5V6.75A.76.76,0,0,1,6.75,6H7.5m3.75,0h1.5M16.5,6h.75a.76.76,0,0,1,.75.75V7.5m0,3.75v1.5m0,3.75v.75a.76.76,0,0,1-.75.75H16.5"
    />
    <path d="M12,12.75V18H6.75A.76.76,0,0,1,6,17.25V12h5.25A.76.76,0,0,1,12,12.75Z" />
    <line x1="12.75" y1="18" x2="12" y2="18" />
    <line x1="6" y1="12" x2="6" y2="11.25" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      strokeOpacity=".2"
      d="M6,7.5V6.75A.76.76,0,0,1,6.75,6H7.5m3.75,0h1.5M16.5,6h.75a.76.76,0,0,1,.75.75V7.5m0,3.75v1.5m0,3.75v.75a.76.76,0,0,1-.75.75H16.5"
    />
    <line strokeOpacity=".2" x1="12.75" y1="18" x2="12" y2="18" />
    <line strokeOpacity=".2" x1="6" y1="12" x2="6" y2="11.25" />
    <path
      fill="none"
      d="M12,12.75V18H6.75A.76.76,0,0,1,6,17.25V12h5.25A.76.76,0,0,1,12,12.75Z"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      stroke={secondaryColor}
      d="M6,7.5V6.75A.76.76,0,0,1,6.75,6H7.5m3.75,0h1.5M16.5,6h.75a.76.76,0,0,1,.75.75V7.5m0,3.75v1.5m0,3.75v.75a.76.76,0,0,1-.75.75H16.5"
    />
    <line stroke={secondaryColor} x1="12.75" y1="18" x2="12" y2="18" />
    <line stroke={secondaryColor} x1="6" y1="12" x2="6" y2="11.25" />
    <path
      fill={secondaryColor}
      d="M12,12.75V18H6.75A.76.76,0,0,1,6,17.25V12h5.25A.76.76,0,0,1,12,12.75Z"
    />
  </Fragment>
);

const Resize = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Resize;
