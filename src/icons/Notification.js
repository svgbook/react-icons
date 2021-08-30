import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M10,7.6H7.6A1.6,1.6,0,0,0,6,9.2v7.2A1.6,1.6,0,0,0,7.6,18h7.2a1.6,1.6,0,0,0,1.6-1.6V14"
    />
    <circle fill="none" cx="15.6" cy="8.4" r="2.4" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M10,7.6H7.6A1.6,1.6,0,0,0,6,9.2v7.2A1.6,1.6,0,0,0,7.6,18h7.2a1.6,1.6,0,0,0,1.6-1.6V14"
    />
    <circle cx="15.6" cy="8.4" r="2.4" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M10,7.6H7.6A1.6,1.6,0,0,0,6,9.2v7.2A1.6,1.6,0,0,0,7.6,18h7.2a1.6,1.6,0,0,0,1.6-1.6V14"
    />
    <circle fillOpacity=".2" cx="15.6" cy="8.4" r="2.4" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      d="M10,7.6H7.6A1.6,1.6,0,0,0,6,9.2v7.2A1.6,1.6,0,0,0,7.6,18h7.2a1.6,1.6,0,0,0,1.6-1.6V14"
    />
    <circle fill={secondaryColor} cx="15.6" cy="8.4" r="2.4" />
  </Fragment>
);

const Notification = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Notification;
