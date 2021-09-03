import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M7,14l2,2,2-2" />
    <path fill="none" d="M9,8v8" />
    <path
      fill="none"
      d="M15.67,13.33A1.34,1.34,0,0,1,17,14.67v2a1.34,1.34,0,0,1-2.67,0v-2A1.34,1.34,0,0,1,15.67,13.33Z"
    />
    <circle fill="none" cx="15.67" cy="7.33" r="1.33" />
    <path fill="none" d="M17,7.33v2a1.34,1.34,0,0,1-1.33,1.34h-1" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M7,14l2,2,2-2" />
    <path fill="none" d="M9,8v8" />
    <path d="M15.67,13.33A1.34,1.34,0,0,1,17,14.67v2a1.34,1.34,0,0,1-2.67,0v-2A1.34,1.34,0,0,1,15.67,13.33Z" />
    <circle cx="15.67" cy="7.33" r="1.33" />
    <path fill="none" d="M17,7.33v2a1.34,1.34,0,0,1-1.33,1.34h-1" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M7,14l2,2,2-2" />
    <path fill="none" d="M9,8v8" />
    <path
      fill="none"
      strokeOpacity=".2"
      d="M15.67,13.33A1.34,1.34,0,0,1,17,14.67v2a1.34,1.34,0,0,1-2.67,0v-2A1.34,1.34,0,0,1,15.67,13.33Z"
    />
    <circle fill="none" strokeOpacity=".2" cx="15.67" cy="7.33" r="1.33" />
    <path
      fill="none"
      strokeOpacity=".2"
      d="M17,7.33v2a1.34,1.34,0,0,1-1.33,1.34h-1"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" stroke={secondaryColor} d="M7,14l2,2,2-2" />
    <path fill="none" stroke={secondaryColor} d="M9,8v8" />
    <path
      fill="none"
      d="M15.67,13.33A1.34,1.34,0,0,1,17,14.67v2a1.34,1.34,0,0,1-2.67,0v-2A1.34,1.34,0,0,1,15.67,13.33Z"
    />
    <circle fill="none" cx="15.67" cy="7.33" r="1.33" />
    <path fill="none" d="M17,7.33v2a1.34,1.34,0,0,1-1.33,1.34h-1" />
  </Fragment>
);

const SortDescending4 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default SortDescending4;
