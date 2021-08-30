import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <rect fill="none" x="6" y="6" width="4" height="4" rx="0.67" />
    <rect fill="none" x="14" y="14" width="4" height="4" rx="0.67" />
    <path fill="none" d="M18,11.33v-2A1.34,1.34,0,0,0,16.67,8h-4l2,2m0-4-2,2" />
    <path fill="none" d="M6,12.67v2A1.34,1.34,0,0,0,7.33,16h4l-2-2m0,4,2-2" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <rect x="6" y="6" width="4" height="4" rx="0.67" />
    <rect x="14" y="14" width="4" height="4" rx="0.67" />
    <path fill="none" d="M18,11.33v-2A1.34,1.34,0,0,0,16.67,8h-4l2,2m0-4-2,2" />
    <path fill="none" d="M6,12.67v2A1.34,1.34,0,0,0,7.33,16h4l-2-2m0,4,2-2" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <rect
      fill="none"
      strokeOpacity=".2"
      x="6"
      y="6"
      width="4"
      height="4"
      rx="0.67"
    />
    <rect
      fill="none"
      strokeOpacity=".2"
      x="14"
      y="14"
      width="4"
      height="4"
      rx="0.67"
    />
    <path fill="none" d="M18,11.33v-2A1.34,1.34,0,0,0,16.67,8h-4l2,2m0-4-2,2" />
    <path fill="none" d="M6,12.67v2A1.34,1.34,0,0,0,7.33,16h4l-2-2m0,4,2-2" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <rect fill="none" x="6" y="6" width="4" height="4" rx="0.67" />
    <rect fill="none" x="14" y="14" width="4" height="4" rx="0.67" />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M18,11.33v-2A1.34,1.34,0,0,0,16.67,8h-4l2,2m0-4-2,2"
    />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M6,12.67v2A1.34,1.34,0,0,0,7.33,16h4l-2-2m0,4,2-2"
    />
  </Fragment>
);

const Replace = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Replace;
