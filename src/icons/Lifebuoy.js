import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="12" cy="12" r="2.67" />
    <circle fill="none" cx="12" cy="12" r="6" />
    <line x1="14" y1="14" x2="16.23" y2="16.23" />
    <line x1="10" y1="14" x2="7.77" y2="16.23" />
    <line x1="7.77" y1="7.77" x2="10" y2="10" />
    <line x1="16.23" y1="7.77" x2="14" y2="10" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <circle fill="none" cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2.67" />
    <line x1="14" y1="14" x2="16.23" y2="16.23" />
    <line x1="10" y1="14" x2="7.77" y2="16.23" />
    <line x1="7.77" y1="7.77" x2="10" y2="10" />
    <line x1="16.23" y1="7.77" x2="14" y2="10" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fillOpacity=".2" cx="12" cy="12" r="6" />
    <circle fill="none" cx="12" cy="12" r="2.67" />
    <line x1="14" y1="14" x2="16.23" y2="16.23" />
    <line x1="10" y1="14" x2="7.77" y2="16.23" />
    <line x1="7.77" y1="7.77" x2="10" y2="10" />
    <line x1="16.23" y1="7.77" x2="14" y2="10" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx="12" cy="12" r="6" />
    <circle fill="none" cx="12" cy="12" r="2.67" />
    <line x1="14" y1="14" x2="16.23" y2="16.23" />
    <line x1="10" y1="14" x2="7.77" y2="16.23" />
    <line x1="7.77" y1="7.77" x2="10" y2="10" />
    <line x1="16.23" y1="7.77" x2="14" y2="10" />
  </Fragment>
);

const Lifebuoy = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Lifebuoy;
