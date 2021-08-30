import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="13.33" cy="6.67" r="0.67" />
    <path fill="none" d="M7.33,15.33l3.34.67.5-1" />
    <path fill="none" d="M14.67,18V15.33l-2.67-2,.67-4" />
    <path fill="none" d="M9.33,12V10l3.34-.67,2,2,2,.67" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <circle cx="13.33" cy="6.67" r="0.67" />
    <path fill="none" d="M7.33,15.33l3.34.67.5-1" />
    <path fill="none" d="M14.67,18V15.33l-2.67-2,.67-4" />
    <path fill="none" d="M9.33,12V10l3.34-.67,2,2,2,.67" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fill="none" strokeOpacity=".2" cx="13.33" cy="6.67" r="0.67" />
    <path fill="none" d="M7.33,15.33l3.34.67.5-1" />
    <path fill="none" d="M14.67,18V15.33l-2.67-2,.67-4" />
    <path fill="none" d="M9.33,12V10l3.34-.67,2,2,2,.67" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill="none" stroke={secondaryColor} cx="13.33" cy="6.67" r="0.67" />
    <path fill="none" d="M7.33,15.33l3.34.67.5-1" />
    <path fill="none" d="M14.67,18V15.33l-2.67-2,.67-4" />
    <path fill="none" d="M9.33,12V10l3.34-.67,2,2,2,.67" />
  </Fragment>
);

const Run = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Run;
