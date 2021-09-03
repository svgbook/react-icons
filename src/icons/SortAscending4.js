import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M11,10,9,8,7,10" />
    <path d="M9,8v8" />
    <path
      fill="none"
      d="M15.67,6A1.34,1.34,0,0,1,17,7.33v2a1.34,1.34,0,1,1-2.67,0v-2A1.34,1.34,0,0,1,15.67,6Z"
    />
    <circle fill="none" cx="15.67" cy="14.67" r="1.33" />
    <path fill="none" d="M17,14.67v2A1.34,1.34,0,0,1,15.67,18h-1" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M11,10,9,8,7,10" />
    <path d="M9,8v8" />
    <path d="M15.67,6A1.34,1.34,0,0,1,17,7.33v2a1.34,1.34,0,1,1-2.67,0v-2A1.34,1.34,0,0,1,15.67,6Z" />
    <circle cx="15.67" cy="14.67" r="1.33" />
    <path fill="none" d="M17,14.67v2A1.34,1.34,0,0,1,15.67,18h-1" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M11,10,9,8,7,10" />
    <path d="M9,8v8" />
    <path
      fill="none"
      strokeOpacity=".2"
      d="M15.67,6A1.34,1.34,0,0,1,17,7.33v2a1.34,1.34,0,1,1-2.67,0v-2A1.34,1.34,0,0,1,15.67,6Z"
    />
    <circle fill="none" strokeOpacity=".2" cx="15.67" cy="14.67" r="1.33" />
    <path
      fill="none"
      strokeOpacity=".2"
      d="M17,14.67v2A1.34,1.34,0,0,1,15.67,18h-1"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" stroke={secondaryColor} d="M11,10,9,8,7,10" />
    <path stroke={secondaryColor} d="M9,8v8" />
    <path
      fill="none"
      d="M15.67,6A1.34,1.34,0,0,1,17,7.33v2a1.34,1.34,0,1,1-2.67,0v-2A1.34,1.34,0,0,1,15.67,6Z"
    />
    <circle fill="none" cx="15.67" cy="14.67" r="1.33" />
    <path fill="none" d="M17,14.67v2A1.34,1.34,0,0,1,15.67,18h-1" />
  </Fragment>
);

const SortAscending4 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default SortAscending4;
