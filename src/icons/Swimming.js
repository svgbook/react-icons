import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="14.67" cy="9.67" r="0.67" />
    <path fill="none" d="M8,11l2.67-1.33,2.33,2L12,13" />
    <path
      fill="none"
      d="M6,14.83a1.58,1.58,0,0,0,.67.17A1.61,1.61,0,0,0,8,14.33a1.68,1.68,0,0,1,2.67,0,1.66,1.66,0,0,0,2.66,0,1.68,1.68,0,0,1,2.67,0,1.61,1.61,0,0,0,1.33.67,1.58,1.58,0,0,0,.67-.17"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <circle cx="14.67" cy="9.67" r="0.67" />
    <path fill="none" d="M8,11l2.67-1.33,2.33,2L12,13" />
    <path
      fill="none"
      d="M6,14.83a1.58,1.58,0,0,0,.67.17A1.61,1.61,0,0,0,8,14.33a1.68,1.68,0,0,1,2.67,0,1.66,1.66,0,0,0,2.66,0,1.68,1.68,0,0,1,2.67,0,1.61,1.61,0,0,0,1.33.67,1.58,1.58,0,0,0,.67-.17"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fill="none" cx="14.67" cy="9.67" r="0.67" />
    <path fill="none" d="M8,11l2.67-1.33,2.33,2L12,13" />
    <path
      fill="none"
      strokeOpacity=".2"
      d="M6,14.83a1.58,1.58,0,0,0,.67.17A1.61,1.61,0,0,0,8,14.33a1.68,1.68,0,0,1,2.67,0,1.66,1.66,0,0,0,2.66,0,1.68,1.68,0,0,1,2.67,0,1.61,1.61,0,0,0,1.33.67,1.58,1.58,0,0,0,.67-.17"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill="none" stroke={secondaryColor} cx="14.67" cy="9.67" r="0.67" />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M8,11l2.67-1.33,2.33,2L12,13"
    />
    <path
      fill="none"
      d="M6,14.83a1.58,1.58,0,0,0,.67.17A1.61,1.61,0,0,0,8,14.33a1.68,1.68,0,0,1,2.67,0,1.66,1.66,0,0,0,2.66,0,1.68,1.68,0,0,1,2.67,0,1.61,1.61,0,0,0,1.33.67,1.58,1.58,0,0,0,.67-.17"
    />
  </Fragment>
);

const Swimming = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Swimming;
