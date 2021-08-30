import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="12" cy="6.75" r="0.75" />
    <path fill="none" d="M8.25,18h6l-3-3V9.75l3,2.25,1.5-1.5" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <circle cx="12" cy="6.75" r="0.75" />
    <path fill="none" d="M8.25,18h6l-3-3V9.75l3,2.25,1.5-1.5" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fill="none" strokeOpacity=".2" cx="12" cy="6.75" r="0.75" />
    <path fill="none" d="M8.25,18h6l-3-3V9.75l3,2.25,1.5-1.5" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill="none" stroke={secondaryColor} cx="12" cy="6.75" r="0.75" />
    <path fill="none" d="M8.25,18h6l-3-3V9.75l3,2.25,1.5-1.5" />
  </Fragment>
);

const Pray = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Pray;
