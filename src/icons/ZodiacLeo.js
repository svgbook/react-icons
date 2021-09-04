import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="8" cy="14.67" r="2" />
    <circle fill="none" cx="11.33" cy="8.67" r="2.67" />
    <path fill="none" d="M8.67,8.67c0,2,1.33,3.33,1.33,6" />
    <path
      fill="none"
      d="M14,8.67c0,2.66-1.33,4-1.33,6.66a2.67,2.67,0,1,0,5.33,0"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M8.67,8.67c0,2,1.33,3.33,1.33,6" />
    <path
      fill="none"
      d="M14,8.67c0,2.66-1.33,4-1.33,6.66a2.67,2.67,0,1,0,5.33,0"
    />
    <circle cx="8" cy="14.67" r="2" />
    <circle cx="11.33" cy="8.67" r="2.67" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" strokeOpacity=".2" d="M8.67,8.67c0,2,1.33,3.33,1.33,6" />
    <path
      fill="none"
      strokeOpacity=".2"
      d="M14,8.67c0,2.66-1.33,4-1.33,6.66a2.67,2.67,0,1,0,5.33,0"
    />
    <circle fill="none" cx="8" cy="14.67" r="2" />
    <circle fill="none" cx="11.33" cy="8.67" r="2.67" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M8.67,8.67c0,2,1.33,3.33,1.33,6" />
    <path
      fill="none"
      d="M14,8.67c0,2.66-1.33,4-1.33,6.66a2.67,2.67,0,1,0,5.33,0"
    />
    <circle fill="none" stroke={secondaryColor} cx="8" cy="14.67" r="2" />
    <circle fill="none" stroke={secondaryColor} cx="11.33" cy="8.67" r="2.67" />
  </Fragment>
);

const Zodiacleo = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Zodiacleo;
