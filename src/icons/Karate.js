import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle cx="16.33" cy="6.67" r="0.67" />
    <path fill="none" d="M6.33,10l3,.67,2,1.66" />
    <path fill="none" d="M13,18V12.67L15,9" />
    <path fill="none" d="M9.67,7l2.66,1.33L15,9l2.67,2.33-1.34,2.34" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <circle cx="16.33" cy="6.67" r="0.67" />
    <path fill="none" d="M6.33,10l3,.67,2,1.66" />
    <path fill="none" d="M13,18V12.67L15,9" />
    <path fill="none" d="M9.67,7l2.66,1.33L15,9l2.67,2.33-1.34,2.34" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle cx="16.33" cy="6.67" r="0.67" />
    <path fill="none" strokeOpacity=".2" d="M6.33,10l3,.67,2,1.66" />
    <path fill="none" d="M13,18V12.67L15,9" />
    <path fill="none" d="M9.67,7l2.66,1.33L15,9l2.67,2.33-1.34,2.34" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle stroke={secondaryColor} cx="16.33" cy="6.67" r="0.67" />
    <path fill="none" stroke={secondaryColor} d="M6.33,10l3,.67,2,1.66" />
    <path fill="none" d="M13,18V12.67L15,9" />
    <path fill="none" d="M9.67,7l2.66,1.33L15,9l2.67,2.33-1.34,2.34" />
  </Fragment>
);

const Karate = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Karate;
