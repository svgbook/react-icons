import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path d="M6,12H7.71" />
    <path d="M11.14,12h1.72" />
    <path d="M16.29,12H18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M6,12H7.71" />
    <path d="M11.14,12h1.72" />
    <path d="M16.29,12H18" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path d="M6,12H7.71" />
    <path strokeOpacity=".2" d="M11.14,12h1.72" />
    <path d="M16.29,12H18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path d="M6,12H7.71" />
    <path stroke={secondaryColor} d="M11.14,12h1.72" />
    <path d="M16.29,12H18" />
  </Fragment>
);

const LineDashed = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default LineDashed;
