import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M6,7.58v8.84L11.05,12Z" />
    <path fill="none" d="M13,7.58v8.84L18,12Z" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M6,7.58v8.84L11.05,12Z" />
    <path d="M13,7.58v8.84L18,12Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fillOpacity=".2" d="M6,7.58v8.84L11.05,12Z" />
    <path fillOpacity=".2" d="M13,7.58v8.84L18,12Z" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill={secondaryColor} d="M6,7.58v8.84L11.05,12Z" />
    <path fill={secondaryColor} d="M13,7.58v8.84L18,12Z" />
  </Fragment>
);

const Next2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Next2;
