import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="9.67" cy="8.67" r="2.67" />
    <path
      fill="none"
      d="M5.67,18V16.67A2.66,2.66,0,0,1,8.33,14H11a2.67,2.67,0,0,1,2.67,2.67V18"
    />
    <path fill="none" d="M14.33,11.33h4m-2-2v4" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <circle cx="9.67" cy="8.67" r="2.67" />
    <path
      fill="none"
      d="M5.67,18V16.67A2.66,2.66,0,0,1,8.33,14H11a2.67,2.67,0,0,1,2.67,2.67V18"
    />
    <path fill="none" d="M14.33,11.33h4m-2-2v4" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fillOpacity=".2" cx="9.67" cy="8.67" r="2.67" />
    <path
      fill="none"
      d="M5.67,18V16.67A2.66,2.66,0,0,1,8.33,14H11a2.67,2.67,0,0,1,2.67,2.67V18"
    />
    <path fill="none" strokeOpacity=".2" d="M14.33,11.33h4m-2-2v4" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx="9.67" cy="8.67" r="2.67" />
    <path
      fill="none"
      d="M5.67,18V16.67A2.66,2.66,0,0,1,8.33,14H11a2.67,2.67,0,0,1,2.67,2.67V18"
    />
    <path fill="none" stroke={secondaryColor} d="M14.33,11.33h4m-2-2v4" />
  </Fragment>
);

const UserPlus = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default UserPlus;
