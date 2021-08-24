import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M14,11.33h1.33a1.34,1.34,0,0,1,1.34,1.34V14" />
    <path
      fill="none"
      d="M9.33,11.33v-2m.48-2.18a2.67,2.67,0,0,1,4.86,1.52v2.66"
    />
    <path
      fill="none"
      d="M11.33,11.34H8.67a1.33,1.33,0,0,0-1.34,1.33v4A1.34,1.34,0,0,0,8.67,18h6.66a1.34,1.34,0,0,0,1.34-1.33Zm.67,4a.67.67,0,1,1,.67-.67A.68.68,0,0,1,12,15.34Z"
    />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M14,11.33h1.33a1.34,1.34,0,0,1,1.34,1.34V14" />
    <path
      fill="none"
      d="M9.33,11.33v-2m.48-2.18a2.67,2.67,0,0,1,4.86,1.52v2.66"
    />
    <path d="M11.33,11.34H8.67a1.33,1.33,0,0,0-1.34,1.33v4A1.34,1.34,0,0,0,8.67,18h6.66a1.34,1.34,0,0,0,1.34-1.33Zm.67,4a.67.67,0,1,1,.67-.67A.68.68,0,0,1,12,15.34Z" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M14,11.33h1.33a1.34,1.34,0,0,1,1.34,1.34V14" />
    <path
      fill="none"
      d="M9.33,11.33v-2m.48-2.18a2.67,2.67,0,0,1,4.86,1.52v2.66"
    />
    <path
      fillOpacity=".2"
      d="M11.33,11.34H8.67a1.33,1.33,0,0,0-1.34,1.33v4A1.34,1.34,0,0,0,8.67,18h6.66a1.34,1.34,0,0,0,1.34-1.33Zm.67,4a.67.67,0,1,1,.67-.67A.68.68,0,0,1,12,15.34Z"
    />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M14,11.33h1.33a1.34,1.34,0,0,1,1.34,1.34V14" />
    <path
      fill="none"
      d="M9.33,11.33v-2m.48-2.18a2.67,2.67,0,0,1,4.86,1.52v2.66"
    />
    <path
      fill={secondaryColor}
      d="M11.33,11.34H8.67a1.33,1.33,0,0,0-1.34,1.33v4A1.34,1.34,0,0,0,8.67,18h6.66a1.34,1.34,0,0,0,1.34-1.33Zm.67,4a.67.67,0,1,1,.67-.67A.68.68,0,0,1,12,15.34Z"
    />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Fragment>
);

const LockOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default LockOff;
