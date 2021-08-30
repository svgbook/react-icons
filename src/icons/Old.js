import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M11.67,18,11,15.33l-1.33-2v-4" />
    <path fill="none" d="M7.67,13.33l-.67-2,2.67-2,2,1.34,2,.33" />
    <circle fill="none" cx="9.67" cy="6.67" r="0.67" />
    <path fill="none" d="M9,15.33,7.67,18" />
    <path fill="none" d="M15,18V12.33a1,1,0,1,1,2,0v.34" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M11.67,18,11,15.33l-1.33-2v-4" />
    <path fill="none" d="M7.67,13.33l-.67-2,2.67-2,2,1.34,2,.33" />
    <circle cx="9.67" cy="6.67" r="0.67" />
    <path fill="none" d="M9,15.33,7.67,18" />
    <path fill="none" d="M15,18V12.33a1,1,0,1,1,2,0v.34" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M11.67,18,11,15.33l-1.33-2v-4" />
    <path fill="none" d="M7.67,13.33l-.67-2,2.67-2,2,1.34,2,.33" />
    <circle fill="none" cx="9.67" cy="6.67" r="0.67" />
    <path fill="none" d="M9,15.33,7.67,18" />
    <path fill="none" strokeOpacity=".2" d="M15,18V12.33a1,1,0,1,1,2,0v.34" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M11.67,18,11,15.33l-1.33-2v-4" />
    <path fill="none" d="M7.67,13.33l-.67-2,2.67-2,2,1.34,2,.33" />
    <circle fill="none" cx="9.67" cy="6.67" r="0.67" />
    <path fill="none" d="M9,15.33,7.67,18" />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M15,18V12.33a1,1,0,1,1,2,0v.34"
    />
  </Fragment>
);

const Old = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Old;
