import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M13.9,11.8l3.14.84a1.3,1.3,0,1,1-.68,2.51L7,12.63,6.08,8.36,8,8.86l.92,1.59,1.88.51-.08-4.73,1.89.5Z"
    />
    <line x1="6" y1="17.77" x2="17.7" y2="17.77" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M13.9,11.8l3.14.84a1.3,1.3,0,1,1-.68,2.51L7,12.63,6.08,8.36,8,8.86l.92,1.59,1.88.51-.08-4.73,1.89.5Z" />
    <line x1="6" y1="17.77" x2="17.7" y2="17.77" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M13.9,11.8l3.14.84a1.3,1.3,0,1,1-.68,2.51L7,12.63,6.08,8.36,8,8.86l.92,1.59,1.88.51-.08-4.73,1.89.5Z"
    />
    <line x1="6" y1="17.77" x2="17.7" y2="17.77" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M13.9,11.8l3.14.84a1.3,1.3,0,1,1-.68,2.51L7,12.63,6.08,8.36,8,8.86l.92,1.59,1.88.51-.08-4.73,1.89.5Z"
    />
    <line x1="6" y1="17.77" x2="17.7" y2="17.77" />
  </Fragment>
);

const PlaneArrival = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default PlaneArrival;
