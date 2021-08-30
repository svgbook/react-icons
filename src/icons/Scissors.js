import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="10.2" y1="9.45" x2="18" y2="17.25" />
    <line x1="10.2" y1="14.55" x2="18" y2="6.75" />
    <circle fill="none" cx="8.25" cy="8.25" r="2.25" />
    <circle fill="none" cx="8.25" cy="15.75" r="2.25" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="10.2" y1="9.45" x2="18" y2="17.25" />
    <line x1="10.2" y1="14.55" x2="18" y2="6.75" />
    <circle cx="8.25" cy="8.25" r="2.25" />
    <circle cx="8.25" cy="15.75" r="2.25" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line x1="10.2" y1="9.45" x2="18" y2="17.25" />
    <line x1="10.2" y1="14.55" x2="18" y2="6.75" />
    <circle fill="none" strokeOpacity=".2" cx="8.25" cy="8.25" r="2.25" />
    <circle fill="none" strokeOpacity=".2" cx="8.25" cy="15.75" r="2.25" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line x1="10.2" y1="9.45" x2="18" y2="17.25" />
    <line x1="10.2" y1="14.55" x2="18" y2="6.75" />
    <circle fill="none" stroke={secondaryColor} cx="8.25" cy="8.25" r="2.25" />
    <circle fill="none" stroke={secondaryColor} cx="8.25" cy="15.75" r="2.25" />
  </Fragment>
);

const Scissors = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Scissors;
