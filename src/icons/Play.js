import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M7.13,6V18l9.75-6Z" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M7.13,6V18l9.75-6Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fillOpacity=".2" d="M7.13,6V18l9.75-6Z" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill={secondaryColor} d="M7.13,6V18l9.75-6Z" />
  </Fragment>
);

const Play = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Play;
