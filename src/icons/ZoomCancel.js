import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="10.67" cy="10.67" r="4.67" />
    <line x1="9.33" y1="9.33" x2="12" y2="12" />
    <line x1="12" y1="9.33" x2="9.33" y2="12" />
    <line x1="18" y1="18" x2="14" y2="14" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M18.35,17.65,14.65,14a5.1,5.1,0,0,0,1.18-3.28,5.17,5.17,0,1,0-5.16,5.16A5.1,5.1,0,0,0,14,14.65l3.7,3.7a.48.48,0,0,0,.7,0A.48.48,0,0,0,18.35,17.65Zm-6-6a.48.48,0,0,1,0,.7.48.48,0,0,1-.7,0l-1-1-1,1a.51.51,0,0,1-.36.15A.5.5,0,0,1,9,12.35a.48.48,0,0,1,0-.7l1-1-1-1A.5.5,0,0,1,9.69,9l1,1,1-1a.48.48,0,0,1,.7,0,.5.5,0,0,1,0,.71l-1,1Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fillOpacity=".2" cx="10.67" cy="10.67" r="4.67" />
    <line x1="9.33" y1="9.33" x2="12" y2="12" />
    <line x1="12" y1="9.33" x2="9.33" y2="12" />
    <line x1="18" y1="18" x2="14" y2="14" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx="10.67" cy="10.67" r="4.67" />
    <line x1="9.33" y1="9.33" x2="12" y2="12" />
    <line x1="12" y1="9.33" x2="9.33" y2="12" />
    <line x1="18" y1="18" x2="14" y2="14" />
  </Fragment>
);

const ZoomCancel = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default ZoomCancel;
