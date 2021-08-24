import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="11.14" y1="6" x2="16.29" y2="6" />
    <line x1="7.71" y1="18" x2="12.86" y2="18" />
    <line x1="13.71" y1="6" x2="10.29" y2="18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="11.14" y1="6" x2="16.29" y2="6" />
    <line x1="7.71" y1="18" x2="12.86" y2="18" />
    <line x1="13.71" y1="6" x2="10.29" y2="18" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line x1="11.14" y1="6" x2="16.29" y2="6" />
    <line x1="7.71" y1="18" x2="12.86" y2="18" />
    <line strokeOpacity=".2" x1="13.71" y1="6" x2="10.29" y2="18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line stroke={secondaryColor} x1="13.71" y1="6" x2="10.29" y2="18" />
    <line x1="11.14" y1="6" x2="16.29" y2="6" />
    <line x1="7.71" y1="18" x2="12.86" y2="18" />
  </Fragment>
);

const Italic = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Italic;
