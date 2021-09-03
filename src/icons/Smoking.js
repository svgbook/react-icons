import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M9.33,13.33V16H6.67A.67.67,0,0,1,6,15.33V14a.67.67,0,0,1,.67-.67Z"
    />
    <path
      fill="none"
      d="M18,14v1.33a.67.67,0,0,1-.67.67h-8V13.33h8A.67.67,0,0,1,18,14Z"
    />
    <path
      fill="none"
      d="M14.67,8v.33A1.34,1.34,0,0,0,16,9.67,1.32,1.32,0,0,1,17.33,11v.33"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M9.33,13.33V16H6.67A.67.67,0,0,1,6,15.33V14a.67.67,0,0,1,.67-.67Z" />
    <path
      fill="none"
      d="M18,14v1.33a.67.67,0,0,1-.67.67h-8V13.33h8A.67.67,0,0,1,18,14Z"
    />
    <path
      fill="none"
      d="M14.67,8v.33A1.34,1.34,0,0,0,16,9.67,1.32,1.32,0,0,1,17.33,11v.33"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path d="M9.33,13.33V16H6.67A.67.67,0,0,1,6,15.33V14a.67.67,0,0,1,.67-.67Z" />
    <path
      fillOpacity=".2"
      d="M18,14v1.33a.67.67,0,0,1-.67.67h-8V13.33h8A.67.67,0,0,1,18,14Z"
    />
    <path
      fill="none"
      strokeOpacity=".2"
      d="M14.67,8v.33A1.34,1.34,0,0,0,16,9.67,1.32,1.32,0,0,1,17.33,11v.33"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path d="M9.33,13.33V16H6.67A.67.67,0,0,1,6,15.33V14a.67.67,0,0,1,.67-.67Z" />
    <path
      fill={secondaryColor}
      d="M18,14v1.33a.67.67,0,0,1-.67.67h-8V13.33h8A.67.67,0,0,1,18,14Z"
    />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M14.67,8v.33A1.34,1.34,0,0,0,16,9.67,1.32,1.32,0,0,1,17.33,11v.33"
    />
  </Fragment>
);

const Smoking = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Smoking;
