import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M18,7.5v6.75H6V7.5A1.51,1.51,0,0,1,7.5,6h9A1.5,1.5,0,0,1,18,7.5Z"
    />
    <path
      fill="none"
      d="M18,14.25V16.5A1.49,1.49,0,0,1,16.5,18h-9A1.5,1.5,0,0,1,6,16.5V14.25Z"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M18,7.5v6.75H6V7.5A1.51,1.51,0,0,1,7.5,6h9A1.5,1.5,0,0,1,18,7.5Z"
    />
    <path d="M18,14.25V16.5A1.49,1.49,0,0,1,16.5,18h-9A1.5,1.5,0,0,1,6,16.5V14.25Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M18,7.5v6.75H6V7.5A1.51,1.51,0,0,1,7.5,6h9A1.5,1.5,0,0,1,18,7.5Z"
    />
    <path
      fillOpacity=".2"
      d="M18,14.25V16.5A1.49,1.49,0,0,1,16.5,18h-9A1.5,1.5,0,0,1,6,16.5V14.25Z"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      d="M18,7.5v6.75H6V7.5A1.51,1.51,0,0,1,7.5,6h9A1.5,1.5,0,0,1,18,7.5Z"
    />
    <path
      fill={secondaryColor}
      d="M18,14.25V16.5A1.49,1.49,0,0,1,16.5,18h-9A1.5,1.5,0,0,1,6,16.5V14.25Z"
    />
  </Fragment>
);

const BottomBar = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default BottomBar;
