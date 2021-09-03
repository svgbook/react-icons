import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="7.33" cy="7.33" r="1.33" />
    <circle fill="none" cx="16.67" cy="7.33" r="1.33" />
    <circle fill="none" cx="7.33" cy="16.67" r="1.33" />
    <circle fill="none" cx="16.67" cy="16.67" r="1.33" />
    <line x1="7.33" y1="8.67" x2="7.33" y2="15.33" />
    <line x1="8.67" y1="7.33" x2="15.33" y2="7.33" />
    <line x1="8.67" y1="16.67" x2="15.33" y2="16.67" />
    <line x1="16.67" y1="8.67" x2="16.67" y2="15.33" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <circle cx="7.33" cy="7.33" r="1.33" />
    <circle cx="16.67" cy="7.33" r="1.33" />
    <circle cx="7.33" cy="16.67" r="1.33" />
    <circle cx="16.67" cy="16.67" r="1.33" />
    <line x1="7.33" y1="8.67" x2="7.33" y2="15.33" />
    <line x1="8.67" y1="7.33" x2="15.33" y2="7.33" />
    <line x1="8.67" y1="16.67" x2="15.33" y2="16.67" />
    <line x1="16.67" y1="8.67" x2="16.67" y2="15.33" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line strokeOpacity=".2" x1="7.33" y1="8.67" x2="7.33" y2="15.33" />
    <line strokeOpacity=".2" x1="8.67" y1="7.33" x2="15.33" y2="7.33" />
    <line strokeOpacity=".2" x1="8.67" y1="16.67" x2="15.33" y2="16.67" />
    <line strokeOpacity=".2" x1="16.67" y1="8.67" x2="16.67" y2="15.33" />
    <circle fill="none" cx="7.33" cy="7.33" r="1.33" />
    <circle fill="none" cx="16.67" cy="7.33" r="1.33" />
    <circle fill="none" cx="7.33" cy="16.67" r="1.33" />
    <circle fill="none" cx="16.67" cy="16.67" r="1.33" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line x1="7.33" y1="8.67" x2="7.33" y2="15.33" />
    <line x1="8.67" y1="7.33" x2="15.33" y2="7.33" />
    <line x1="8.67" y1="16.67" x2="15.33" y2="16.67" />
    <line x1="16.67" y1="8.67" x2="16.67" y2="15.33" />
    <circle fill="none" stroke={secondaryColor} cx="7.33" cy="7.33" r="1.33" />
    <circle fill="none" stroke={secondaryColor} cx="16.67" cy="7.33" r="1.33" />
    <circle fill="none" stroke={secondaryColor} cx="7.33" cy="16.67" r="1.33" />
    <circle
      fill="none"
      stroke={secondaryColor}
      cx="16.67"
      cy="16.67"
      r="1.33"
    />
  </Fragment>
);

const Shape = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Shape;
