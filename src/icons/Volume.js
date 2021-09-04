import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M14,9.34A3.33,3.33,0,0,1,14.65,14a3.49,3.49,0,0,1-.67.66"
    />
    <path
      fill="none"
      d="M15.78,7.34a6,6,0,0,1,.89,8.42,6.88,6.88,0,0,1-.89.9"
    />
    <path
      fill="none"
      d="M8,14H6.67A.67.67,0,0,1,6,13.33V10.67A.66.66,0,0,1,6.67,10H8l2.32-3A.54.54,0,0,1,11,6.78a.53.53,0,0,1,.28.56v9.32a.53.53,0,0,1-.43.61.55.55,0,0,1-.57-.28L8,14"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M14,9.34A3.33,3.33,0,0,1,14.65,14a3.49,3.49,0,0,1-.67.66"
    />
    <path
      fill="none"
      d="M15.78,7.34a6,6,0,0,1,.89,8.42,6.88,6.88,0,0,1-.89.9"
    />
    <path d="M8,14H6.67A.67.67,0,0,1,6,13.33V10.67A.66.66,0,0,1,6.67,10H8l2.32-3A.54.54,0,0,1,11,6.78a.53.53,0,0,1,.28.56v9.32a.53.53,0,0,1-.43.61.55.55,0,0,1-.57-.28L8,14" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M14,9.34A3.33,3.33,0,0,1,14.65,14a3.49,3.49,0,0,1-.67.66"
    />
    <path
      fill="none"
      d="M15.78,7.34a6,6,0,0,1,.89,8.42,6.88,6.88,0,0,1-.89.9"
    />
    <path
      fillOpacity=".2"
      d="M8,14H6.67A.67.67,0,0,1,6,13.33V10.67A.66.66,0,0,1,6.67,10H8l2.32-3A.54.54,0,0,1,11,6.78a.53.53,0,0,1,.28.56v9.32a.53.53,0,0,1-.43.61.55.55,0,0,1-.57-.28L8,14"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      d="M14,9.34A3.33,3.33,0,0,1,14.65,14a3.49,3.49,0,0,1-.67.66"
    />
    <path
      fill="none"
      d="M15.78,7.34a6,6,0,0,1,.89,8.42,6.88,6.88,0,0,1-.89.9"
    />
    <path
      fill={secondaryColor}
      d="M8,14H6.67A.67.67,0,0,1,6,13.33V10.67A.66.66,0,0,1,6.67,10H8l2.32-3A.54.54,0,0,1,11,6.78a.53.53,0,0,1,.28.56v9.32a.53.53,0,0,1-.43.61.55.55,0,0,1-.57-.28L8,14"
    />
  </Fragment>
);

const Volume = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Volume;
