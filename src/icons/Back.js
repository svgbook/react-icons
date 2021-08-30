import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M18,6.75v10.5L9,12Z" />
    <line x1="6" y1="6.75" x2="6" y2="17.25" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M18,6.75v10.5L9,12Z" />
    <line x1="6" y1="6.75" x2="6" y2="17.25" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fillOpacity=".2" d="M18,6.75v10.5L9,12Z" />
    <line x1="6" y1="6.75" x2="6" y2="17.25" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill={secondaryColor} d="M18,6.75v10.5L9,12Z" />
    <line x1="6" y1="6.75" x2="6" y2="17.25" />
  </Fragment>
);

const Back = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Back;
