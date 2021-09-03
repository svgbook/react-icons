import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="12" y1="8.67" x2="12" y2="11.33" />
    <line x1="8.47" y1="15.87" x2="10.33" y2="14.53" />
    <line x1="15.53" y1="15.87" x2="13.67" y2="14.53" />
    <circle fill="none" cx="12" cy="7.33" r="1.33" />
    <circle fill="none" cx="7.33" cy="16.67" r="1.33" />
    <circle fill="none" cx="16.67" cy="16.67" r="1.33" />
    <circle fill="none" cx="12" cy="13.33" r="2" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="12" y1="8.67" x2="12" y2="11.33" />
    <line x1="8.47" y1="15.87" x2="10.33" y2="14.53" />
    <line x1="15.53" y1="15.87" x2="13.67" y2="14.53" />
    <circle cx="12" cy="7.33" r="1.33" />
    <circle cx="7.33" cy="16.67" r="1.33" />
    <circle cx="16.67" cy="16.67" r="1.33" />
    <circle cx="12" cy="13.33" r="2" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line strokeOpacity=".2" x1="12" y1="8.67" x2="12" y2="11.33" />
    <line strokeOpacity=".2" x1="8.47" y1="15.87" x2="10.33" y2="14.53" />
    <line strokeOpacity=".2" x1="15.53" y1="15.87" x2="13.67" y2="14.53" />
    <circle fillOpacity=".2" cx="12" cy="7.33" r="1.33" />
    <circle fillOpacity=".2" cx="7.33" cy="16.67" r="1.33" />
    <circle fillOpacity=".2" cx="16.67" cy="16.67" r="1.33" />
    <circle fillOpacity=".2" cx="12" cy="13.33" r="2" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line x1="12" y1="8.67" x2="12" y2="11.33" />
    <line x1="8.47" y1="15.87" x2="10.33" y2="14.53" />
    <line x1="15.53" y1="15.87" x2="13.67" y2="14.53" />
    <circle fill="none" stroke={secondaryColor} cx="12" cy="7.33" r="1.33" />
    <circle fill="none" stroke={secondaryColor} cx="7.33" cy="16.67" r="1.33" />
    <circle
      fill="none"
      stroke={secondaryColor}
      cx="16.67"
      cy="16.67"
      r="1.33"
    />
    <circle fill="none" stroke={secondaryColor} cx="12" cy="13.33" r="2" />
  </Fragment>
);

const Social = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Social;
