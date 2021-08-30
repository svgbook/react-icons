import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M6,8.25V7.5A1.5,1.5,0,0,1,7.5,6H9" />
    <path fill="none" d="M6,15.75v.75A1.5,1.5,0,0,0,7.5,18H9" />
    <path fill="none" d="M15,6h1.5A1.5,1.5,0,0,1,18,7.5v.75" />
    <path fill="none" d="M15,18h1.5A1.5,1.5,0,0,0,18,16.5v-.75" />
    <line x1="6.75" y1="12" x2="17.25" y2="12" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M6,8.25V7.5A1.5,1.5,0,0,1,7.5,6H9" />
    <path fill="none" d="M6,15.75v.75A1.5,1.5,0,0,0,7.5,18H9" />
    <path fill="none" d="M15,6h1.5A1.5,1.5,0,0,1,18,7.5v.75" />
    <path fill="none" d="M15,18h1.5A1.5,1.5,0,0,0,18,16.5v-.75" />
    <line x1="6.75" y1="12" x2="17.25" y2="12" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      strokeOpacity=".2"
      d="M6,8.25V7.5A1.5,1.5,0,0,1,7.5,6H9"
    />
    <path
      fill="none"
      strokeOpacity=".2"
      d="M6,15.75v.75A1.5,1.5,0,0,0,7.5,18H9"
    />
    <path
      fill="none"
      strokeOpacity=".2"
      d="M15,6h1.5A1.5,1.5,0,0,1,18,7.5v.75"
    />
    <path
      fill="none"
      strokeOpacity=".2"
      d="M15,18h1.5A1.5,1.5,0,0,0,18,16.5v-.75"
    />
    <line x1="6.75" y1="12" x2="17.25" y2="12" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M6,8.25V7.5A1.5,1.5,0,0,1,7.5,6H9" />
    <path fill="none" d="M6,15.75v.75A1.5,1.5,0,0,0,7.5,18H9" />
    <path fill="none" d="M15,6h1.5A1.5,1.5,0,0,1,18,7.5v.75" />
    <path fill="none" d="M15,18h1.5A1.5,1.5,0,0,0,18,16.5v-.75" />
    <line stroke={secondaryColor} x1="6.75" y1="12" x2="17.25" y2="12" />
  </Fragment>
);

const Scan = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Scan;
