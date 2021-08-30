import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M18,12a2,2,0,0,0-3.9,0A2,2,0,0,0,12,10.2,2,2,0,0,0,9.9,12,1.88,1.88,0,0,0,8,10.2,1.87,1.87,0,0,0,6,12a6,6,0,0,1,12,0Z"
    />
    <path fill="none" d="M6,12l6,6L9.9,12" />
    <path fill="none" d="M14.1,12,12,18l6-6" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M18,12a2,2,0,0,0-3.9,0A2,2,0,0,0,12,10.2,2,2,0,0,0,9.9,12,1.88,1.88,0,0,0,8,10.2,1.87,1.87,0,0,0,6,12a6,6,0,0,1,12,0Z" />
    <path fill="none" d="M6,12l6,6L9.9,12" />
    <path fill="none" d="M14.1,12,12,18l6-6" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M18,12a2,2,0,0,0-3.9,0A2,2,0,0,0,12,10.2,2,2,0,0,0,9.9,12,1.88,1.88,0,0,0,8,10.2,1.87,1.87,0,0,0,6,12a6,6,0,0,1,12,0Z"
    />
    <path fill="none" d="M6,12l6,6L9.9,12" />
    <path fill="none" d="M14.1,12,12,18l6-6" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M18,12a2,2,0,0,0-3.9,0A2,2,0,0,0,12,10.2,2,2,0,0,0,9.9,12,1.88,1.88,0,0,0,8,10.2,1.87,1.87,0,0,0,6,12a6,6,0,0,1,12,0Z"
    />
    <path fill="none" d="M6,12l6,6L9.9,12" />
    <path fill="none" d="M14.1,12,12,18l6-6" />
  </Fragment>
);

const Parachute = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Parachute;
