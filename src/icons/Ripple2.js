import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M6,8.67a5,5,0,0,1,6,0,5,5,0,0,0,6,0" />
    <path fill="none" d="M6,15.33a5,5,0,0,1,6,0,5,5,0,0,0,6,0" />
    <path fill="none" d="M6,12a5,5,0,0,1,6,0,5,5,0,0,0,6,0" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M6,8.67a5,5,0,0,1,6,0,5,5,0,0,0,6,0" />
    <path fill="none" d="M6,15.33a5,5,0,0,1,6,0,5,5,0,0,0,6,0" />
    <path fill="none" d="M6,12a5,5,0,0,1,6,0,5,5,0,0,0,6,0" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M6,8.67a5,5,0,0,1,6,0,5,5,0,0,0,6,0" />
    <path fill="none" d="M6,15.33a5,5,0,0,1,6,0,5,5,0,0,0,6,0" />
    <path
      fill="none"
      strokeOpacity=".2"
      d="M6,12a5,5,0,0,1,6,0,5,5,0,0,0,6,0"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M6,8.67a5,5,0,0,1,6,0,5,5,0,0,0,6,0" />
    <path fill="none" d="M6,15.33a5,5,0,0,1,6,0,5,5,0,0,0,6,0" />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M6,12a5,5,0,0,1,6,0,5,5,0,0,0,6,0"
    />
  </Fragment>
);

const Ripple2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Ripple2;
