import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M18,13.89a1.9,1.9,0,0,1-1.89,1.9H9.79l-1.9-.95-.63.95H6V12H7.26l.63.95L9.79,12h6.32A1.89,1.89,0,0,1,18,13.89Z"
    />
    <polygon
      fill="none"
      points="14.84 12 10.42 12 11.05 10.11 14.21 10.11 14.84 12"
    />
    <path fill="none" d="M12.32,10.11V8.84A.63.63,0,0,1,13,8.21h.63" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M18,13.89a1.9,1.9,0,0,1-1.89,1.9H9.79l-1.9-.95-.63.95H6V12H7.26l.63.95L9.79,12h6.32A1.89,1.89,0,0,1,18,13.89Z" />
    <polygon points="14.84 12 10.42 12 11.05 10.11 14.21 10.11 14.84 12" />
    <path fill="none" d="M12.32,10.11V8.84A.63.63,0,0,1,13,8.21h.63" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M18,13.89a1.9,1.9,0,0,1-1.89,1.9H9.79l-1.9-.95-.63.95H6V12H7.26l.63.95L9.79,12h6.32A1.89,1.89,0,0,1,18,13.89Z"
    />
    <polygon
      fillOpacity=".2"
      points="14.84 12 10.42 12 11.05 10.11 14.21 10.11 14.84 12"
    />
    <path fill="none" d="M12.32,10.11V8.84A.63.63,0,0,1,13,8.21h.63" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M18,13.89a1.9,1.9,0,0,1-1.89,1.9H9.79l-1.9-.95-.63.95H6V12H7.26l.63.95L9.79,12h6.32A1.89,1.89,0,0,1,18,13.89Z"
    />
    <polygon
      fill={secondaryColor}
      points="14.84 12 10.42 12 11.05 10.11 14.21 10.11 14.84 12"
    />
    <path fill="none" d="M12.32,10.11V8.84A.63.63,0,0,1,13,8.21h.63" />
  </Fragment>
);

const Submarine = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Submarine;
