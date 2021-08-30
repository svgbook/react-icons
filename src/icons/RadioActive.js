import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M13,14.14l2,3.46a6,6,0,0,0,3-5.2H14a2,2,0,0,1-1,1.74"
    />
    <path fill="none" d="M13,10.67l2-3.46a6,6,0,0,0-6,0l2,3.46a2,2,0,0,1,2,0" />
    <path fill="none" d="M11,14.14,9,17.6a6,6,0,0,1-3-5.2h4a2,2,0,0,0,1,1.74" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M13,14.14l2,3.46a6,6,0,0,0,3-5.2H14a2,2,0,0,1-1,1.74" />
    <path d="M13,10.67l2-3.46a6,6,0,0,0-6,0l2,3.46a2,2,0,0,1,2,0" />
    <path d="M11,14.14,9,17.6a6,6,0,0,1-3-5.2h4a2,2,0,0,0,1,1.74" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M13,14.14l2,3.46a6,6,0,0,0,3-5.2H14a2,2,0,0,1-1,1.74"
    />
    <path
      fillOpacity=".2"
      d="M13,10.67l2-3.46a6,6,0,0,0-6,0l2,3.46a2,2,0,0,1,2,0"
    />
    <path
      fillOpacity=".2"
      d="M11,14.14,9,17.6a6,6,0,0,1-3-5.2h4a2,2,0,0,0,1,1.74"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M13,14.14l2,3.46a6,6,0,0,0,3-5.2H14a2,2,0,0,1-1,1.74"
    />
    <path
      fill={secondaryColor}
      d="M13,10.67l2-3.46a6,6,0,0,0-6,0l2,3.46a2,2,0,0,1,2,0"
    />
    <path
      fill={secondaryColor}
      d="M11,14.14,9,17.6a6,6,0,0,1-3-5.2h4a2,2,0,0,0,1,1.74"
    />
  </Fragment>
);

const RadioActive = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default RadioActive;
