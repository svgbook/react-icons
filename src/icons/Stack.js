import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <polyline fill="none" points="12 6 6 9 12 12 18 9 12 6" />
    <polyline fill="none" points="6 12 12 15 18 12" />
    <polyline fill="none" points="6 15 12 18 18 15" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <polyline points="12 6 6 9 12 12 18 9 12 6" />
    <polyline fill="none" points="6 12 12 15 18 12" />
    <polyline fill="none" points="6 15 12 18 18 15" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <polyline fillOpacity=".2" points="12 6 6 9 12 12 18 9 12 6" />
    <polyline fill="none" points="6 12 12 15 18 12" />
    <polyline fill="none" points="6 15 12 18 18 15" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <polyline fill={secondaryColor} points="12 6 6 9 12 12 18 9 12 6" />
    <polyline fill="none" points="6 12 12 15 18 12" />
    <polyline fill="none" points="6 15 12 18 18 15" />
  </Fragment>
);

const Stack = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Stack;
