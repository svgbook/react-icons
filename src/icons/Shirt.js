import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M14,6.67,18,8v3.33H16v5.34a.67.67,0,0,1-.67.66H8.67A.67.67,0,0,1,8,16.67V11.33H6V8l4-1.33a2,2,0,1,0,4,0"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M14,6.67,18,8v3.33H16v5.34a.67.67,0,0,1-.67.66H8.67A.67.67,0,0,1,8,16.67V11.33H6V8l4-1.33a2,2,0,1,0,4,0" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M14,6.67,18,8v3.33H16v5.34a.67.67,0,0,1-.67.66H8.67A.67.67,0,0,1,8,16.67V11.33H6V8l4-1.33a2,2,0,1,0,4,0"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M14,6.67,18,8v3.33H16v5.34a.67.67,0,0,1-.67.66H8.67A.67.67,0,0,1,8,16.67V11.33H6V8l4-1.33a2,2,0,1,0,4,0"
    />
  </Fragment>
);

const Shirt = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Shirt;
