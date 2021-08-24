import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M18,7.5V12H6V7.5A1.5,1.5,0,0,1,7.5,6h9A1.5,1.5,0,0,1,18,7.5Z"
    />
    <path
      fill="none"
      d="M18,12v4.5A1.5,1.5,0,0,1,16.5,18h-9A1.5,1.5,0,0,1,6,16.5V12Z"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M18,7.5V12H6V7.5A1.5,1.5,0,0,1,7.5,6h9A1.5,1.5,0,0,1,18,7.5Z" />
    <path
      fill="none"
      d="M18,12v4.5A1.5,1.5,0,0,1,16.5,18h-9A1.5,1.5,0,0,1,6,16.5V12Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M18,7.5V12H6V7.5A1.5,1.5,0,0,1,7.5,6h9A1.5,1.5,0,0,1,18,7.5Z"
    />
    <path
      fillOpacity=".2"
      d="M18,12v4.5A1.5,1.5,0,0,1,16.5,18h-9A1.5,1.5,0,0,1,6,16.5V12Z"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M18,7.5V12H6V7.5A1.5,1.5,0,0,1,7.5,6h9A1.5,1.5,0,0,1,18,7.5Z"
    />
    <path
      fill={secondaryColor}
      d="M18,12v4.5A1.5,1.5,0,0,1,16.5,18h-9A1.5,1.5,0,0,1,6,16.5V12Z"
    />
  </Fragment>
);

const Rows = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Rows;
