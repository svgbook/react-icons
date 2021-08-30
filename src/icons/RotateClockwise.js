import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M6,11.22a6,6,0,1,1,.38,3" />
    <polyline fill="none" points="6 18 6 14.23 9.77 14.23" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M6,11.22a6,6,0,1,1,.38,3" />
    <polyline fill="none" points="6 18 6 14.23 9.77 14.23" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" strokeOpacity=".2" d="M6,11.22a6,6,0,1,1,.38,3" />
    <polyline fill="none" points="6 18 6 14.23 9.77 14.23" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M6,11.22a6,6,0,1,1,.38,3" />
    <polyline
      fill="none"
      stroke={secondaryColor}
      points="6 18 6 14.23 9.77 14.23"
    />
  </Fragment>
);

const RotateClockwise = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default RotateClockwise;
