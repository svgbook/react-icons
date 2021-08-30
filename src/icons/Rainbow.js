import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M18,15A6,6,0,0,0,6,15" />
    <path fill="none" d="M15.6,15a3.6,3.6,0,0,0-7.2,0" />
    <path fill="none" d="M13.2,15a1.2,1.2,0,0,0-2.4,0" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M18,15A6,6,0,0,0,6,15" />
    <path fill="none" d="M15.6,15a3.6,3.6,0,0,0-7.2,0" />
    <path fill="none" d="M13.2,15a1.2,1.2,0,0,0-2.4,0" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M18,15A6,6,0,0,0,6,15" />
    <path fill="none" strokeOpacity=".2" d="M15.6,15a3.6,3.6,0,0,0-7.2,0" />
    <path fill="none" d="M13.2,15a1.2,1.2,0,0,0-2.4,0" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M18,15A6,6,0,0,0,6,15" />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M15.6,15a3.6,3.6,0,0,0-7.2,0"
    />
    <path fill="none" d="M13.2,15a1.2,1.2,0,0,0-2.4,0" />
  </Fragment>
);

const Rainbow = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Rainbow;
