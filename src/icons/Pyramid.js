import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <polygon fill="none" points="12 6 12 18 6 15.33 12 6" />
    <polygon fill="none" points="18 15.33 12 18 12 6 18 15.33" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <polygon points="12 6 12 18 6 15.33 12 6" />
    <polygon fill="none" points="18 15.33 12 18 12 6 18 15.33" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <polygon fillOpacity=".2" points="12 6 12 18 6 15.33 12 6" />
    <polygon fillOpacity=".2" points="18 15.33 12 18 12 6 18 15.33" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <polygon fill={secondaryColor} points="12 6 12 18 6 15.33 12 6" />
    <polygon fill={secondaryColor} points="18 15.33 12 18 12 6 18 15.33" />
  </Fragment>
);

const Pyramid = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Pyramid;
