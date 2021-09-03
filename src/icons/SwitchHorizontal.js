import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <polyline fill="none" points="14.67 6 17.33 8.67 14.67 11.33" />
    <line x1="10.67" y1="8.67" x2="17.33" y2="8.67" />
    <polyline fill="none" points="9.33 12.67 6.67 15.33 9.33 18" />
    <line x1="6.67" y1="15.33" x2="12.67" y2="15.33" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <polyline fill="none" points="14.67 6 17.33 8.67 14.67 11.33" />
    <line x1="10.67" y1="8.67" x2="17.33" y2="8.67" />
    <polyline fill="none" points="9.33 12.67 6.67 15.33 9.33 18" />
    <line x1="6.67" y1="15.33" x2="12.67" y2="15.33" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <polyline
      fill="none"
      strokeOpacity=".2"
      points="14.67 6 17.33 8.67 14.67 11.33"
    />
    <line strokeOpacity=".2" x1="10.67" y1="8.67" x2="17.33" y2="8.67" />
    <polyline fill="none" points="9.33 12.67 6.67 15.33 9.33 18" />
    <line x1="6.67" y1="15.33" x2="12.67" y2="15.33" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <polyline fill="none" points="14.67 6 17.33 8.67 14.67 11.33" />
    <line x1="10.67" y1="8.67" x2="17.33" y2="8.67" />
    <polyline
      fill="none"
      stroke={secondaryColor}
      points="9.33 12.67 6.67 15.33 9.33 18"
    />
    <line stroke={secondaryColor} x1="6.67" y1="15.33" x2="12.67" y2="15.33" />
  </Fragment>
);

const SwitchHorizontal = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default SwitchHorizontal;
