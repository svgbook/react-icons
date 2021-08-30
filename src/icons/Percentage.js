import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle cx="17" cy="17" r="1" />
    <circle cx="7" cy="7" r="1" />
    <line x1="6" y1="18" x2="18" y2="6" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <circle cx="17" cy="17" r="1" />
    <circle cx="7" cy="7" r="1" />
    <line x1="6" y1="18" x2="18" y2="6" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle cx="17" cy="17" r="1" />
    <circle cx="7" cy="7" r="1" />
    <line strokeOpacity=".2" x1="6" y1="18" x2="18" y2="6" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle cx="17" cy="17" r="1" />
    <circle cx="7" cy="7" r="1" />
    <line stroke={secondaryColor} x1="6" y1="18" x2="18" y2="6" />
  </Fragment>
);

const Percentage = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Percentage;
