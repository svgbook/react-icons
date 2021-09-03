import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M8.67,7.33h6.66m-8,1.34v6.66m9.34-6.66v6.66" />
    <circle fill="none" cx="7.33" cy="7.33" r="1.33" />
    <circle fill="none" cx="16.67" cy="16.67" r="1.33" />
    <circle fill="none" cx="16.67" cy="7.33" r="1.33" />
    <circle fill="none" cx="7.33" cy="16.67" r="1.33" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M8.67,7.33h6.66m-8,1.34v6.66m9.34-6.66v6.66" />
    <circle cx="7.33" cy="7.33" r="1.33" />
    <circle cx="16.67" cy="16.67" r="1.33" />
    <circle cx="16.67" cy="7.33" r="1.33" />
    <circle cx="7.33" cy="16.67" r="1.33" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      strokeOpacity=".2"
      d="M8.67,7.33h6.66m-8,1.34v6.66m9.34-6.66v6.66"
    />
    <circle fill="none" cx="7.33" cy="7.33" r="1.33" />
    <circle fill="none" cx="16.67" cy="16.67" r="1.33" />
    <circle fill="none" cx="16.67" cy="7.33" r="1.33" />
    <circle fill="none" cx="7.33" cy="16.67" r="1.33" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M8.67,7.33h6.66m-8,1.34v6.66m9.34-6.66v6.66" />
    <circle fill="none" stroke={secondaryColor} cx="7.33" cy="7.33" r="1.33" />
    <circle
      fill="none"
      stroke={secondaryColor}
      cx="16.67"
      cy="16.67"
      r="1.33"
    />
    <circle fill="none" stroke={secondaryColor} cx="16.67" cy="7.33" r="1.33" />
    <circle fill="none" stroke={secondaryColor} cx="7.33" cy="16.67" r="1.33" />
  </Fragment>
);

const Shape3 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Shape3;
