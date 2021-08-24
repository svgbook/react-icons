import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="7.5" cy="16.5" r="1.5" />
    <circle fill="none" cx="16.5" cy="7.5" r="1.5" />
    <line x1="8.63" y1="15.37" x2="15.38" y2="8.63" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <circle cx="7.5" cy="16.5" r="1.5" />
    <circle cx="16.5" cy="7.5" r="1.5" />
    <line x1="8.63" y1="15.37" x2="15.38" y2="8.63" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fillOpacity=".2" cx="7.5" cy="16.5" r="1.5" />
    <circle fillOpacity=".2" cx="16.5" cy="7.5" r="1.5" />
    <line x1="8.63" y1="15.37" x2="15.38" y2="8.63" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx="7.5" cy="16.5" r="1.5" />
    <circle fill={secondaryColor} cx="16.5" cy="7.5" r="1.5" />
    <line x1="8.63" y1="15.37" x2="15.38" y2="8.63" />
  </Fragment>
);

const Line = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Line;
