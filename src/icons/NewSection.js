import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="9.75" y1="12" x2="14.25" y2="12" />
    <line x1="12" y1="9.75" x2="12" y2="14.25" />
    <path
      fill="none"
      d="M6,7.5V6.75A.76.76,0,0,1,6.75,6H7.5m3.75,0h1.5M16.5,6h.75a.76.76,0,0,1,.75.75V7.5m0,3.75v1.5m0,3.75v.75a.76.76,0,0,1-.75.75H16.5m-3.75,0h-1.5M7.5,18H6.75A.76.76,0,0,1,6,17.25V16.5m0-3.75v-1.5"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="9.75" y1="12" x2="14.25" y2="12" />
    <line x1="12" y1="9.75" x2="12" y2="14.25" />
    <path
      fill="none"
      d="M6,7.5V6.75A.76.76,0,0,1,6.75,6H7.5m3.75,0h1.5M16.5,6h.75a.76.76,0,0,1,.75.75V7.5m0,3.75v1.5m0,3.75v.75a.76.76,0,0,1-.75.75H16.5m-3.75,0h-1.5M7.5,18H6.75A.76.76,0,0,1,6,17.25V16.5m0-3.75v-1.5"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line x1="9.75" y1="12" x2="14.25" y2="12" />
    <line x1="12" y1="9.75" x2="12" y2="14.25" />
    <path
      fill="none"
      strokeOpacity=".2"
      d="M6,7.5V6.75A.76.76,0,0,1,6.75,6H7.5m3.75,0h1.5M16.5,6h.75a.76.76,0,0,1,.75.75V7.5m0,3.75v1.5m0,3.75v.75a.76.76,0,0,1-.75.75H16.5m-3.75,0h-1.5M7.5,18H6.75A.76.76,0,0,1,6,17.25V16.5m0-3.75v-1.5"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line x1="9.75" y1="12" x2="14.25" y2="12" />
    <line x1="12" y1="9.75" x2="12" y2="14.25" />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M6,7.5V6.75A.76.76,0,0,1,6.75,6H7.5m3.75,0h1.5M16.5,6h.75a.76.76,0,0,1,.75.75V7.5m0,3.75v1.5m0,3.75v.75a.76.76,0,0,1-.75.75H16.5m-3.75,0h-1.5M7.5,18H6.75A.76.76,0,0,1,6,17.25V16.5m0-3.75v-1.5"
    />
  </Fragment>
);

const NewSection = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default NewSection;
