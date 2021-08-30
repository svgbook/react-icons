import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M16.3,6.89a14,14,0,0,0,0,10.21.67.67,0,0,1-.4.86.57.57,0,0,1-.22,0H8.34a.67.67,0,0,1-.64-.89,14,14,0,0,0,0-10.22A.66.66,0,0,1,8.32,6h7.36a.66.66,0,0,1,.62.89Z"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M16.3,6.89a14,14,0,0,0,0,10.21.67.67,0,0,1-.4.86.57.57,0,0,1-.22,0H8.34a.67.67,0,0,1-.64-.89,14,14,0,0,0,0-10.22A.66.66,0,0,1,8.32,6h7.36a.66.66,0,0,1,.62.89Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M16.3,6.89a14,14,0,0,0,0,10.21.67.67,0,0,1-.4.86.57.57,0,0,1-.22,0H8.34a.67.67,0,0,1-.64-.89,14,14,0,0,0,0-10.22A.66.66,0,0,1,8.32,6h7.36a.66.66,0,0,1,.62.89Z"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M16.3,6.89a14,14,0,0,0,0,10.21.67.67,0,0,1-.4.86.57.57,0,0,1-.22,0H8.34a.67.67,0,0,1-.64-.89,14,14,0,0,0,0-10.22A.66.66,0,0,1,8.32,6h7.36a.66.66,0,0,1,.62.89Z"
    />
  </Fragment>
);

const PanoramaVertical = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default PanoramaVertical;
