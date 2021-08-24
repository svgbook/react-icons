import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <rect fill="none" x="6" y="6" width="12" height="12" rx="1.5" />
    <line x1="9.75" y1="9" x2="9.75" y2="15" />
    <line x1="9.75" y1="12" x2="14.25" y2="12" />
    <line x1="14.25" y1="9" x2="14.25" y2="15" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M16.5,5.5h-9a2,2,0,0,0-2,2v9a2,2,0,0,0,2,2h9a2,2,0,0,0,2-2v-9A2,2,0,0,0,16.5,5.5ZM14.75,15a.5.5,0,0,1-1,0V12.5h-3.5V15a.5.5,0,0,1-1,0V9a.5.5,0,0,1,1,0v2.5h3.5V9a.5.5,0,0,1,1,0Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <rect fillOpacity=".2" x="6" y="6" width="12" height="12" rx="1.5" />
    <line x1="9.75" y1="9" x2="9.75" y2="15" />
    <line x1="9.75" y1="12" x2="14.25" y2="12" />
    <line x1="14.25" y1="9" x2="14.25" y2="15" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <rect fill={secondaryColor} x="6" y="6" width="12" height="12" rx="1.5" />
    <line x1="9.75" y1="9" x2="9.75" y2="15" />
    <line x1="9.75" y1="12" x2="14.25" y2="12" />
    <line x1="14.25" y1="9" x2="14.25" y2="15" />
  </Fragment>
);

const HelicopterLanding = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default HelicopterLanding;
