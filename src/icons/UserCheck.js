import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="9.79" cy="8.84" r="2.53" />
    <path
      fill="none"
      d="M6,17.68V16.42a2.53,2.53,0,0,1,2.53-2.53h2.52a2.53,2.53,0,0,1,2.53,2.53v1.26"
    />
    <path fill="none" d="M14.21,11.37l1.26,1.26L18,10.11" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <circle cx="9.79" cy="8.84" r="2.53" />
    <path
      fill="none"
      d="M6,17.68V16.42a2.53,2.53,0,0,1,2.53-2.53h2.52a2.53,2.53,0,0,1,2.53,2.53v1.26"
    />
    <path fill="none" d="M14.21,11.37l1.26,1.26L18,10.11" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fillOpacity=".2" cx="9.79" cy="8.84" r="2.53" />
    <path
      fill="none"
      d="M6,17.68V16.42a2.53,2.53,0,0,1,2.53-2.53h2.52a2.53,2.53,0,0,1,2.53,2.53v1.26"
    />
    <path fill="none" strokeOpacity=".2" d="M14.21,11.37l1.26,1.26L18,10.11" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx="9.79" cy="8.84" r="2.53" />
    <path
      fill="none"
      d="M6,17.68V16.42a2.53,2.53,0,0,1,2.53-2.53h2.52a2.53,2.53,0,0,1,2.53,2.53v1.26"
    />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M14.21,11.37l1.26,1.26L18,10.11"
    />
  </Fragment>
);

const UserCheck = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default UserCheck;
