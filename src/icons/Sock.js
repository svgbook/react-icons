import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M15.9,17.2a2.67,2.67,0,0,1-3.66.14l-3-2.83A2.57,2.57,0,0,0,10,12.67,2.67,2.67,0,0,0,7.34,10V6h5.33v4l3.2,3.43A2.67,2.67,0,0,1,15.9,17.2Z"
    />
    <path
      fill="none"
      d="M10,12.67a2.57,2.57,0,0,1-.73,1.84L7.75,13.06a1.3,1.3,0,0,1-.41-1V10A2.67,2.67,0,0,1,10,12.67Z"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M15.9,17.2a2.67,2.67,0,0,1-3.66.14l-3-2.83A2.57,2.57,0,0,0,10,12.67,2.67,2.67,0,0,0,7.34,10V6h5.33v4l3.2,3.43A2.67,2.67,0,0,1,15.9,17.2Z" />
    <path d="M10,12.67a2.57,2.57,0,0,1-.73,1.84L7.75,13.06a1.3,1.3,0,0,1-.41-1V10A2.67,2.67,0,0,1,10,12.67Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M15.9,17.2a2.67,2.67,0,0,1-3.66.14l-3-2.83A2.57,2.57,0,0,0,10,12.67,2.67,2.67,0,0,0,7.34,10V6h5.33v4l3.2,3.43A2.67,2.67,0,0,1,15.9,17.2Z"
    />
    <path
      fillOpacity=".2"
      d="M10,12.67a2.57,2.57,0,0,1-.73,1.84L7.75,13.06a1.3,1.3,0,0,1-.41-1V10A2.67,2.67,0,0,1,10,12.67Z"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M15.9,17.2a2.67,2.67,0,0,1-3.66.14l-3-2.83A2.57,2.57,0,0,0,10,12.67,2.67,2.67,0,0,0,7.34,10V6h5.33v4l3.2,3.43A2.67,2.67,0,0,1,15.9,17.2Z"
    />
    <path d="M10,12.67a2.57,2.57,0,0,1-.73,1.84L7.75,13.06a1.3,1.3,0,0,1-.41-1V10A2.67,2.67,0,0,1,10,12.67Z" />
  </Fragment>
);

const Sock = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Sock;
