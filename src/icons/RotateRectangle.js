import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M10.73,6.71l.33-.32a1.32,1.32,0,0,1,1.87,0l4.68,4.67a1.33,1.33,0,0,1,0,1.88l-4.68,4.67a1.32,1.32,0,0,1-1.87,0L6.38,12.94a1.36,1.36,0,0,1,0-1.93L8.77,8.67"
    />
    <polyline fill="none" points="8.77 11.31 8.77 8.67 6.13 8.67" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M10.73,6.71l.33-.32a1.32,1.32,0,0,1,1.87,0l4.68,4.67a1.33,1.33,0,0,1,0,1.88l-4.68,4.67a1.32,1.32,0,0,1-1.87,0L6.38,12.94a1.36,1.36,0,0,1,0-1.93L8.77,8.67"
    />
    <polyline fill="none" points="8.77 11.31 8.77 8.67 6.13 8.67" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      strokeOpacity=".2"
      d="M10.73,6.71l.33-.32a1.32,1.32,0,0,1,1.87,0l4.68,4.67a1.33,1.33,0,0,1,0,1.88l-4.68,4.67a1.32,1.32,0,0,1-1.87,0L6.38,12.94a1.36,1.36,0,0,1,0-1.93L8.77,8.67"
    />
    <polyline fill="none" points="8.77 11.31 8.77 8.67 6.13 8.67" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      d="M10.73,6.71l.33-.32a1.32,1.32,0,0,1,1.87,0l4.68,4.67a1.33,1.33,0,0,1,0,1.88l-4.68,4.67a1.32,1.32,0,0,1-1.87,0L6.38,12.94a1.36,1.36,0,0,1,0-1.93L8.77,8.67"
    />
    <polyline
      fill="none"
      stroke={secondaryColor}
      points="8.77 11.31 8.77 8.67 6.13 8.67"
    />
  </Fragment>
);

const RotateRectangle = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default RotateRectangle;
