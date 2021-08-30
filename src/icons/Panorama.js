import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M6.89,7.7a14,14,0,0,0,10.21,0,.67.67,0,0,1,.86.4.57.57,0,0,1,0,.22v7.34a.67.67,0,0,1-.89.64,14,14,0,0,0-10.22,0A.66.66,0,0,1,6,15.67V8.32a.67.67,0,0,1,.67-.66.54.54,0,0,1,.22,0Z"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M6.89,7.7a14,14,0,0,0,10.21,0,.67.67,0,0,1,.86.4.57.57,0,0,1,0,.22v7.34a.67.67,0,0,1-.89.64,14,14,0,0,0-10.22,0A.66.66,0,0,1,6,15.67V8.32a.67.67,0,0,1,.67-.66.54.54,0,0,1,.22,0Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M6.89,7.7a14,14,0,0,0,10.21,0,.67.67,0,0,1,.86.4.57.57,0,0,1,0,.22v7.34a.67.67,0,0,1-.89.64,14,14,0,0,0-10.22,0A.66.66,0,0,1,6,15.67V8.32a.67.67,0,0,1,.67-.66.54.54,0,0,1,.22,0Z"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M6.89,7.7a14,14,0,0,0,10.21,0,.67.67,0,0,1,.86.4.57.57,0,0,1,0,.22v7.34a.67.67,0,0,1-.89.64,14,14,0,0,0-10.22,0A.66.66,0,0,1,6,15.67V8.32a.67.67,0,0,1,.67-.66.54.54,0,0,1,.22,0Z"
    />
  </Fragment>
);

const Panorama = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Panorama;
