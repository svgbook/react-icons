import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="10" cy="8.67" r="2.67" />
    <path
      fill="none"
      d="M6,18V16.67A2.66,2.66,0,0,1,8.67,14h2.66A2.66,2.66,0,0,1,14,16.67V18"
    />
    <path fill="none" d="M15.33,10,18,12.67M18,10l-2.67,2.67" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <circle cx="10" cy="8.67" r="2.67" />
    <path
      fill="none"
      d="M6,18V16.67A2.66,2.66,0,0,1,8.67,14h2.66A2.66,2.66,0,0,1,14,16.67V18"
    />
    <path fill="none" d="M15.33,10,18,12.67M18,10l-2.67,2.67" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fillOpacity=".2" cx="10" cy="8.67" r="2.67" />
    <path
      fill="none"
      d="M6,18V16.67A2.66,2.66,0,0,1,8.67,14h2.66A2.66,2.66,0,0,1,14,16.67V18"
    />
    <path
      fill="none"
      strokeOpacity=".2"
      d="M15.33,10,18,12.67M18,10l-2.67,2.67"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx="10" cy="8.67" r="2.67" />
    <path
      fill="none"
      d="M6,18V16.67A2.66,2.66,0,0,1,8.67,14h2.66A2.66,2.66,0,0,1,14,16.67V18"
    />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M15.33,10,18,12.67M18,10l-2.67,2.67"
    />
  </Fragment>
);

const UserX = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default UserX;
