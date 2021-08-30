import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M15.67,7.52a5.19,5.19,0,0,0-7.34,7.35l2.75,2.75a1.3,1.3,0,0,0,1.84,0l2.75-2.75A5.2,5.2,0,0,0,15.67,7.52ZM12,13.14a1.95,1.95,0,1,1,1.95-2A1.95,1.95,0,0,1,12,13.14Z"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M15.67,7.52a5.19,5.19,0,0,0-7.34,7.35l2.75,2.75a1.3,1.3,0,0,0,1.84,0l2.75-2.75A5.2,5.2,0,0,0,15.67,7.52ZM12,13.14a1.95,1.95,0,1,1,1.95-2A1.95,1.95,0,0,1,12,13.14Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M15.67,7.52a5.19,5.19,0,0,0-7.34,7.35l2.75,2.75a1.3,1.3,0,0,0,1.84,0l2.75-2.75A5.2,5.2,0,0,0,15.67,7.52ZM12,13.14a1.95,1.95,0,1,1,1.95-2A1.95,1.95,0,0,1,12,13.14Z"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M15.67,7.52a5.19,5.19,0,0,0-7.34,7.35l2.75,2.75a1.3,1.3,0,0,0,1.84,0l2.75-2.75A5.2,5.2,0,0,0,15.67,7.52ZM12,13.14a1.95,1.95,0,1,1,1.95-2A1.95,1.95,0,0,1,12,13.14Z"
    />
  </Fragment>
);

const MapPin = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default MapPin;
