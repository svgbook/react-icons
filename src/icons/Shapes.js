import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M12,6,9.18,10.94h5.64Z" />
    <circle fill="none" cx="15.53" cy="15.88" r="2.12" />
    <rect fill="none" x="6.35" y="13.76" width="4.24" height="4.24" rx="0.71" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M12,6,9.18,10.94h5.64Z" />
    <circle cx="15.53" cy="15.88" r="2.12" />
    <rect x="6.35" y="13.76" width="4.24" height="4.24" rx="0.71" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fillOpacity=".2" d="M12,6,9.18,10.94h5.64Z" />
    <circle fillOpacity=".2" cx="15.53" cy="15.88" r="2.12" />
    <rect
      fillOpacity=".2"
      x="6.35"
      y="13.76"
      width="4.24"
      height="4.24"
      rx="0.71"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill={secondaryColor} d="M12,6,9.18,10.94h5.64Z" />
    <circle fill={secondaryColor} cx="15.53" cy="15.88" r="2.12" />
    <rect
      fill={secondaryColor}
      x="6.35"
      y="13.76"
      width="4.24"
      height="4.24"
      rx="0.71"
    />
  </Fragment>
);

const Shapes = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Shapes;
