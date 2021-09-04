import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M13.52,10.86a2.67,2.67,0,0,0-3-4.39,2.84,2.84,0,0,0-.67.67m-.36,2.3a2.68,2.68,0,0,0,1.74,1.77"
    />
    <path
      fill="none"
      d="M8,18V16.67A2.66,2.66,0,0,1,10.67,14h2.66a2.87,2.87,0,0,1,.77.11m1.79,1.79a2.87,2.87,0,0,1,.11.77V18"
    />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M13.52,10.86a2.67,2.67,0,0,0-3-4.39,2.84,2.84,0,0,0-.67.67m-.36,2.3a2.68,2.68,0,0,0,1.74,1.77"
    />
    <path
      fill="none"
      d="M8,18V16.67A2.66,2.66,0,0,1,10.67,14h2.66a2.87,2.87,0,0,1,.77.11m1.79,1.79a2.87,2.87,0,0,1,.11.77V18"
    />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      strokeOpacity=".2"
      d="M13.52,10.86a2.67,2.67,0,0,0-3-4.39,2.84,2.84,0,0,0-.67.67m-.36,2.3a2.68,2.68,0,0,0,1.74,1.77"
    />
    <path
      fill="none"
      strokeOpacity=".2"
      d="M8,18V16.67A2.66,2.66,0,0,1,10.67,14h2.66a2.87,2.87,0,0,1,.77.11m1.79,1.79a2.87,2.87,0,0,1,.11.77V18"
    />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      stroke={secondaryColor}
      d="M13.52,10.86a2.67,2.67,0,0,0-3-4.39,2.84,2.84,0,0,0-.67.67m-.36,2.3a2.68,2.68,0,0,0,1.74,1.77"
    />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M8,18V16.67A2.66,2.66,0,0,1,10.67,14h2.66a2.87,2.87,0,0,1,.77.11m1.79,1.79a2.87,2.87,0,0,1,.11.77V18"
    />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Fragment>
);

const UserOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default UserOff;
