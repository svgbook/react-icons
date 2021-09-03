import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="12" cy="10.5" r="1.5" />
    <circle fill="none" cx="12" cy="13.5" r="1.5" />
    <circle fill="none" cx="12" cy="12" r="6" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <circle cx="12" cy="10.5" r="1.5" />
    <circle cx="12" cy="13.5" r="1.5" />
    <circle fill="none" cx="12" cy="12" r="6" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fillOpacity=".2" cx="12" cy="12" r="6" />
    <circle fill="none" cx="12" cy="10.5" r="1.5" />
    <circle fill="none" cx="12" cy="13.5" r="1.5" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx="12" cy="12" r="6" />
    <circle fill="none" cx="12" cy="10.5" r="1.5" />
    <circle fill="none" cx="12" cy="13.5" r="1.5" />
  </Fragment>
);

const Billard = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Billard;
