import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M13.33,6V8.67a.67.67,0,0,0,.67.66h2.67" />
    <path
      fill="none"
      d="M16.67,16v.67A1.34,1.34,0,0,1,15.33,18H8.67a1.34,1.34,0,0,1-1.34-1.33V16"
    />
    <path fill="none" d="M6,13.33H8m3,0h2m3,0h2" />
    <path
      fill="none"
      d="M7.33,10.67V7.33A1.34,1.34,0,0,1,8.67,6h4.66l3.34,3.33v1.34"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M16.67,16v.67A1.34,1.34,0,0,1,15.33,18H8.67a1.34,1.34,0,0,1-1.34-1.33V16Z" />
    <path fill="none" d="M6,13.33H8m3,0h2m3,0h2" />
    <path d="M16.67,9.33v1.34H7.33V7.33A1.34,1.34,0,0,1,8.67,6h4.66V8.67a.67.67,0,0,0,.67.66Z" />
    <path fill="none" d="M16.67,9.33H14a.67.67,0,0,1-.67-.66V6Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M16.67,16v.67A1.34,1.34,0,0,1,15.33,18H8.67a1.34,1.34,0,0,1-1.34-1.33V16Z"
    />
    <path fill="none" d="M6,13.33H8m3,0h2m3,0h2" />
    <path
      fillOpacity=".2"
      d="M16.67,9.33v1.34H7.33V7.33A1.34,1.34,0,0,1,8.67,6h4.66V8.67a.67.67,0,0,0,.67.66Z"
    />
    <path fill="none" d="M16.67,9.33H14a.67.67,0,0,1-.67-.66V6Z" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M16.67,16v.67A1.34,1.34,0,0,1,15.33,18H8.67a1.34,1.34,0,0,1-1.34-1.33V16Z"
    />
    <path fill="none" d="M6,13.33H8m3,0h2m3,0h2" />
    <path
      fill={secondaryColor}
      d="M16.67,9.33v1.34H7.33V7.33A1.34,1.34,0,0,1,8.67,6h4.66V8.67a.67.67,0,0,0,.67.66Z"
    />
    <path fill="none" d="M16.67,9.33H14a.67.67,0,0,1-.67-.66V6Z" />
  </Fragment>
);

const PageBreak = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default PageBreak;
