import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M8.69,7A6,6,0,0,0,7,8.65" />
    <path fill="none" d="M6.12,10.81a6.09,6.09,0,0,0,0,2.33" />
    <path fill="none" d="M7,15.31A5.89,5.89,0,0,0,8.64,17" />
    <path fill="none" d="M12,9.33,10.66,12h2.67L12,14.67" />
    <path fill="none" d="M12,18A6,6,0,0,0,12,6h0" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M8.69,7A6,6,0,0,0,7,8.65" />
    <path fill="none" d="M6.12,10.81a6.09,6.09,0,0,0,0,2.33" />
    <path fill="none" d="M7,15.31A5.89,5.89,0,0,0,8.64,17" />
    <path fill="none" d="M12,9.33,10.66,12h2.67L12,14.67" />
    <path fill="none" d="M12,18A6,6,0,0,0,12,6h0" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M8.69,7A6,6,0,0,0,7,8.65" />
    <path fill="none" d="M6.12,10.81a6.09,6.09,0,0,0,0,2.33" />
    <path fill="none" d="M7,15.31A5.89,5.89,0,0,0,8.64,17" />
    <path fill="none" d="M12,9.33,10.66,12h2.67L12,14.67" />
    <path fill="none" strokeOpacity=".2" d="M12,18A6,6,0,0,0,12,6h0" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" stroke={secondaryColor} d="M8.69,7A6,6,0,0,0,7,8.65" />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M6.12,10.81a6.09,6.09,0,0,0,0,2.33"
    />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M7,15.31A5.89,5.89,0,0,0,8.64,17"
    />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M12,9.33,10.66,12h2.67L12,14.67"
    />
    <path fill="none" d="M12,18A6,6,0,0,0,12,6h0" />
  </Fragment>
);

const Recharging = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Recharging;
