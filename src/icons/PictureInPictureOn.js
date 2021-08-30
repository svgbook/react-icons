import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M11.33,16.67h-4A1.34,1.34,0,0,1,6,15.33V8.67A1.34,1.34,0,0,1,7.33,7.33h9.34A1.34,1.34,0,0,1,18,8.67v2.66"
    />
    <rect
      fill="none"
      x="13.33"
      y="13.33"
      width="4.67"
      height="3.33"
      rx="0.67"
    />
    <line x1="8.67" y1="10" x2="11.33" y2="12.67" />
    <path fill="none" d="M9.33,12.67h2v-2" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M11.33,16.67h-4A1.34,1.34,0,0,1,6,15.33V8.67A1.34,1.34,0,0,1,7.33,7.33h9.34A1.34,1.34,0,0,1,18,8.67v2.66"
    />
    <rect x="13.33" y="13.33" width="4.67" height="3.33" rx="0.67" />
    <line x1="8.67" y1="10" x2="11.33" y2="12.67" />
    <path fill="none" d="M9.33,12.67h2v-2" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M11.33,16.67h-4A1.34,1.34,0,0,1,6,15.33V8.67A1.34,1.34,0,0,1,7.33,7.33h9.34A1.34,1.34,0,0,1,18,8.67v2.66"
    />
    <rect
      fillOpacity=".2"
      x="13.33"
      y="13.33"
      width="4.67"
      height="3.33"
      rx="0.67"
    />
    <line strokeOpacity=".2" x1="8.67" y1="10" x2="11.33" y2="12.67" />
    <path strokeOpacity=".2" fill="none" d="M9.33,12.67h2v-2" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      d="M11.33,16.67h-4A1.34,1.34,0,0,1,6,15.33V8.67A1.34,1.34,0,0,1,7.33,7.33h9.34A1.34,1.34,0,0,1,18,8.67v2.66"
    />
    <rect
      fill={secondaryColor}
      x="13.33"
      y="13.33"
      width="4.67"
      height="3.33"
      rx="0.67"
    />
    <line stroke={secondaryColor} x1="8.67" y1="10" x2="11.33" y2="12.67" />
    <path stroke={secondaryColor} fill="none" d="M9.33,12.67h2v-2" />
  </Fragment>
);

const PictureInPictureOn = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default PictureInPictureOn;
