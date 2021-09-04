import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <polyline fill="none" points="8 18 18 8 16 6 6 16 8 18" />
    <line x1="14" y1="8" x2="16" y2="10" />
    <path
      fill="none"
      d="M10,6a1.33,1.33,0,0,0,1.33,1.33A1.34,1.34,0,0,0,10,8.67,1.34,1.34,0,0,0,8.67,7.33,1.33,1.33,0,0,0,10,6"
    />
    <path
      fill="none"
      d="M16.67,12.67A1.33,1.33,0,0,0,18,14a1.33,1.33,0,0,0-1.33,1.33A1.34,1.34,0,0,0,15.33,14a1.34,1.34,0,0,0,1.34-1.33"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M18.35,8.35,16.71,10,14,7.3l1.64-1.65a.48.48,0,0,1,.7,0l2,2A.48.48,0,0,1,18.35,8.35Z"
    />
    <path
      stroke="none"
      d="M16,10.71,8.35,18.35a.48.48,0,0,1-.7,0l-2-2a.48.48,0,0,1,0-.7L13.3,8l.7.7L15.29,10Z"
    />
    <path
      stroke="none"
      d="M11.83,7.33a.5.5,0,0,1-.5.5.84.84,0,0,0-.83.84.5.5,0,1,1-1,0,.84.84,0,0,0-.83-.84.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5A.83.83,0,0,0,9.5,6a.5.5,0,0,1,1,0,.83.83,0,0,0,.83.83A.5.5,0,0,1,11.83,7.33Z"
    />
    <path
      stroke="none"
      d="M18.5,14a.5.5,0,0,1-.5.5.83.83,0,0,0-.83.83.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5.84.84,0,0,0-.84-.83.5.5,0,1,1,0-1,.84.84,0,0,0,.84-.83.5.5,0,0,1,.5-.5.5.5,0,0,1,.5.5.83.83,0,0,0,.83.83A.5.5,0,0,1,18.5,14Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <polyline fillOpacity=".2" points="8 18 18 8 16 6 6 16 8 18" />
    <line x1="14" y1="8" x2="16" y2="10" />
    <path
      fill="none"
      strokeOpacity=".2"
      d="M10,6a1.33,1.33,0,0,0,1.33,1.33A1.34,1.34,0,0,0,10,8.67,1.34,1.34,0,0,0,8.67,7.33,1.33,1.33,0,0,0,10,6"
    />
    <path
      fill="none"
      strokeOpacity=".2"
      d="M16.67,12.67A1.33,1.33,0,0,0,18,14a1.33,1.33,0,0,0-1.33,1.33A1.34,1.34,0,0,0,15.33,14a1.34,1.34,0,0,0,1.34-1.33"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <polyline fill={secondaryColor} points="8 18 18 8 16 6 6 16 8 18" />
    <line x1="14" y1="8" x2="16" y2="10" />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M10,6a1.33,1.33,0,0,0,1.33,1.33A1.34,1.34,0,0,0,10,8.67,1.34,1.34,0,0,0,8.67,7.33,1.33,1.33,0,0,0,10,6"
    />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M16.67,12.67A1.33,1.33,0,0,0,18,14a1.33,1.33,0,0,0-1.33,1.33A1.34,1.34,0,0,0,15.33,14a1.34,1.34,0,0,0,1.34-1.33"
    />
  </Fragment>
);

const Wand = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Wand;
