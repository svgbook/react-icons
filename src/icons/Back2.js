import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M18,7.58v8.84L13,12Z" />
    <path fill="none" d="M11.05,7.58v8.84L6,12Z" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M18,7.58v8.84L13,12Z" />
    <path d="M11.05,7.58v8.84L6,12Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fillOpacity=".2" d="M18,7.58v8.84L13,12Z" />
    <path fillOpacity=".2" d="M11.05,7.58v8.84L6,12Z" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill={secondaryColor} d="M18,7.58v8.84L13,12Z" />
    <path fill={secondaryColor} d="M11.05,7.58v8.84L6,12Z" />
  </Fragment>
);

const Back2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Back2;
