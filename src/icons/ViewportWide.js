import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M10.67,12H6l2-2m0,4L6,12" />
    <path fill="none" d="M13.33,12H18l-2-2m0,4,2-2" />
    <path fill="none" d="M6,8V6H18V8" />
    <path fill="none" d="M6,16v2H18V16" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M10.67,12H6l2-2m0,4L6,12" />
    <path fill="none" d="M13.33,12H18l-2-2m0,4,2-2" />
    <path fill="none" d="M6,8V6H18V8" />
    <path fill="none" d="M6,16v2H18V16" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M10.67,12H6l2-2m0,4L6,12" />
    <path fill="none" d="M13.33,12H18l-2-2m0,4,2-2" />
    <path fill="none" strokeOpacity=".2" d="M6,8V6H18V8" />
    <path fill="none" strokeOpacity=".2" d="M6,16v2H18V16" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" stroke={secondaryColor} d="M10.67,12H6l2-2m0,4L6,12" />
    <path fill="none" stroke={secondaryColor} d="M13.33,12H18l-2-2m0,4,2-2" />
    <path fill="none" d="M6,8V6H18V8" />
    <path fill="none" d="M6,16v2H18V16" />
  </Fragment>
);

const ViewportWide = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default ViewportWide;
