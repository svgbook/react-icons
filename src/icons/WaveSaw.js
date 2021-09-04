import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M6,12H9.33L12,17.33V6.67L14.67,12H18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M6,12H9.33L12,17.33V6.67L14.67,12H18" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M6,12H9.33L12,17.33V6.67L14.67,12H18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M6,12H9.33L12,17.33V6.67L14.67,12H18" />
  </Fragment>
);

const WaveSaw = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default WaveSaw;
