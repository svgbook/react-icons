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
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M11.33,16.67h-4A1.34,1.34,0,0,1,6,15.33V8.67A1.34,1.34,0,0,1,7.33,7.33h9.34A1.34,1.34,0,0,1,18,8.67v2.66"
    />
    <rect x="13.33" y="13.33" width="4.67" height="3.33" rx="0.67" />
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
  </Fragment>
);

const PictureInPicture = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default PictureInPicture;
