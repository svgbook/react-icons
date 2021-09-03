import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M10,7.36l1-1a1.48,1.48,0,0,1,2,0L17.61,11a1.48,1.48,0,0,1,0,2l-1,1"
    />
    <path
      fill="none"
      d="M15.31,15.3,13,17.61a1.48,1.48,0,0,1-2,0L6.39,13a1.48,1.48,0,0,1,0-2L8.7,8.7Z"
    />
    <path d="M6,6,18,18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M10,7.36l1-1a1.48,1.48,0,0,1,2,0L17.61,11a1.48,1.48,0,0,1,0,2l-1,1"
    />
    <path d="M15.31,15.3,13,17.61a1.48,1.48,0,0,1-2,0L6.39,13a1.48,1.48,0,0,1,0-2L8.7,8.7Z" />
    <path d="M6,6,18,18" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M10,7.36l1-1a1.48,1.48,0,0,1,2,0L17.61,11a1.48,1.48,0,0,1,0,2l-1,1"
    />
    <path
      fillOpacity=".2"
      d="M15.31,15.3,13,17.61a1.48,1.48,0,0,1-2,0L6.39,13a1.48,1.48,0,0,1,0-2L8.7,8.7Z"
    />
    <path d="M6,6,18,18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      d="M10,7.36l1-1a1.48,1.48,0,0,1,2,0L17.61,11a1.48,1.48,0,0,1,0,2l-1,1"
    />
    <path
      fill={secondaryColor}
      d="M15.31,15.3,13,17.61a1.48,1.48,0,0,1-2,0L6.39,13a1.48,1.48,0,0,1,0-2L8.7,8.7Z"
    />
    <path d="M6,6,18,18" />
  </Fragment>
);

const SquareRotatedOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default SquareRotatedOff;
