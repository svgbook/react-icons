import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M7.32,9.33H13A1.67,1.67,0,1,0,13.05,6a1.68,1.68,0,0,0-1.63,1.17"
    />
    <path fill="none" d="M6,12H16.32a1.67,1.67,0,1,1-1.56,2.16" />
    <path fill="none" d="M6.65,14.67h3.67a1.67,1.67,0,1,1-1.56,2.16" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M7.32,9.33H13A1.67,1.67,0,1,0,13.05,6a1.68,1.68,0,0,0-1.63,1.17"
    />
    <path fill="none" d="M6,12H16.32a1.67,1.67,0,1,1-1.56,2.16" />
    <path fill="none" d="M6.65,14.67h3.67a1.67,1.67,0,1,1-1.56,2.16" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M7.32,9.33H13A1.67,1.67,0,1,0,13.05,6a1.68,1.68,0,0,0-1.63,1.17"
    />
    <path
      fill="none"
      strokeOpacity=".2"
      d="M6,12H16.32a1.67,1.67,0,1,1-1.56,2.16"
    />
    <path fill="none" d="M6.65,14.67h3.67a1.67,1.67,0,1,1-1.56,2.16" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      stroke={secondaryColor}
      d="M7.32,9.33H13A1.67,1.67,0,1,0,13.05,6a1.68,1.68,0,0,0-1.63,1.17"
    />
    <path fill="none" d="M6,12H16.32a1.67,1.67,0,1,1-1.56,2.16" />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M6.65,14.67h3.67a1.67,1.67,0,1,1-1.56,2.16"
    />
  </Fragment>
);

const Wind = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Wind;
