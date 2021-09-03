import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M10,7.31A7.93,7.93,0,0,0,12,6a8,8,0,0,0,5.67,2,8,8,0,0,1-.75,6.25"
    />
    <path
      fill="none"
      d="M15.78,15.78A8,8,0,0,1,12,18,8,8,0,0,1,6.26,8.25c0-.09,0-.17.07-.25a8.33,8.33,0,0,0,1.58-.08Z"
    />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M10,7.31A7.93,7.93,0,0,0,12,6a8,8,0,0,0,5.67,2,8,8,0,0,1-.75,6.25"
    />
    <path d="M15.78,15.78A8,8,0,0,1,12,18,8,8,0,0,1,6.26,8.25c0-.09,0-.17.07-.25a8.33,8.33,0,0,0,1.58-.08Z" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M10,7.31A7.93,7.93,0,0,0,12,6a8,8,0,0,0,5.67,2,8,8,0,0,1-.75,6.25"
    />
    <path
      fillOpacity=".2"
      d="M15.78,15.78A8,8,0,0,1,12,18,8,8,0,0,1,6.26,8.25c0-.09,0-.17.07-.25a8.33,8.33,0,0,0,1.58-.08Z"
    />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      d="M10,7.31A7.93,7.93,0,0,0,12,6a8,8,0,0,0,5.67,2,8,8,0,0,1-.75,6.25"
    />
    <path
      fill={secondaryColor}
      d="M15.78,15.78A8,8,0,0,1,12,18,8,8,0,0,1,6.26,8.25c0-.09,0-.17.07-.25a8.33,8.33,0,0,0,1.58-.08Z"
    />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Fragment>
);

const ShieldOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default ShieldOff;
