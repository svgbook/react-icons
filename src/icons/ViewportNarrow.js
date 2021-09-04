import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M6,12h4.67l-2-2m0,4,2-2" />
    <path fill="none" d="M18,12H13.33l2-2m0,4-2-2" />
    <path fill="none" d="M10,8V6h4V8" />
    <path fill="none" d="M10,16v2h4V16" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M6,12h4.67l-2-2m0,4,2-2" />
    <path fill="none" d="M18,12H13.33l2-2m0,4-2-2" />
    <path fill="none" d="M10,8V6h4V8" />
    <path fill="none" d="M10,16v2h4V16" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M6,12h4.67l-2-2m0,4,2-2" />
    <path fill="none" d="M18,12H13.33l2-2m0,4-2-2" />
    <path fill="none" strokeOpacity=".2" d="M10,8V6h4V8" />
    <path fill="none" strokeOpacity=".2" d="M10,16v2h4V16" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" stroke={secondaryColor} d="M6,12h4.67l-2-2m0,4,2-2" />
    <path fill="none" stroke={secondaryColor} d="M18,12H13.33l2-2m0,4-2-2" />
    <path fill="none" d="M10,8V6h4V8" />
    <path fill="none" d="M10,16v2h4V16" />
  </Fragment>
);

const ViewportNarrow = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default ViewportNarrow;
