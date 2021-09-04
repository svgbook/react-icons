import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="10.67" cy="8.67" r="2.67" />
    <path
      fill="none"
      d="M6.67,18V16.67A2.66,2.66,0,0,1,9.33,14H12a2.67,2.67,0,0,1,2.67,2.67V18"
    />
    <line x1="17.33" y1="8.67" x2="17.33" y2="10.67" />
    <line x1="17.33" y1="13.33" x2="17.33" y2="13.34" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <circle cx="10.67" cy="8.67" r="2.67" />
    <path
      fill="none"
      d="M6.67,18V16.67A2.66,2.66,0,0,1,9.33,14H12a2.67,2.67,0,0,1,2.67,2.67V18"
    />
    <line x1="17.33" y1="8.67" x2="17.33" y2="10.67" />
    <line x1="17.33" y1="13.33" x2="17.33" y2="13.34" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fillOpacity=".2" cx="10.67" cy="8.67" r="2.67" />
    <path
      fill="none"
      d="M6.67,18V16.67A2.66,2.66,0,0,1,9.33,14H12a2.67,2.67,0,0,1,2.67,2.67V18"
    />
    <line strokeOpacity=".2" x1="17.33" y1="8.67" x2="17.33" y2="10.67" />
    <line strokeOpacity=".2" x1="17.33" y1="13.33" x2="17.33" y2="13.34" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx="10.67" cy="8.67" r="2.67" />
    <path
      fill="none"
      d="M6.67,18V16.67A2.66,2.66,0,0,1,9.33,14H12a2.67,2.67,0,0,1,2.67,2.67V18"
    />
    <line stroke={secondaryColor} x1="17.33" y1="8.67" x2="17.33" y2="10.67" />
    <line stroke={secondaryColor} x1="17.33" y1="13.33" x2="17.33" y2="13.34" />
  </Fragment>
);

const UserExclamation = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default UserExclamation;
