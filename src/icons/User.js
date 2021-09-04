import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="12" cy="8.67" r="2.67" />
    <path
      fill="none"
      d="M8,18V16.67A2.66,2.66,0,0,1,10.67,14h2.66A2.66,2.66,0,0,1,16,16.67V18"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <circle cx="12" cy="8.67" r="2.67" />
    <path
      fill="none"
      d="M8,18V16.67A2.66,2.66,0,0,1,10.67,14h2.66A2.66,2.66,0,0,1,16,16.67V18"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fillOpacity=".2" cx="12" cy="8.67" r="2.67" />
    <path
      fill="none"
      d="M8,18V16.67A2.66,2.66,0,0,1,10.67,14h2.66A2.66,2.66,0,0,1,16,16.67V18"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx="12" cy="8.67" r="2.67" />
    <path
      fill="none"
      d="M8,18V16.67A2.66,2.66,0,0,1,10.67,14h2.66A2.66,2.66,0,0,1,16,16.67V18"
    />
  </Fragment>
);

const User = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default User;
