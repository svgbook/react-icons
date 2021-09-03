import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <rect fill="none" x="6" y="7.33" width="12" height="9.33" rx="1.33" />
    <circle fill="none" cx="12" cy="12" r="2" />
    <path fill="none" d="M6,10H8v4H6Z" />
    <path fill="none" d="M16,10h2v4H16Z" />
    <line x1="12" y1="7.33" x2="12" y2="16.67" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <rect fill="none" x="6" y="7.33" width="12" height="9.33" rx="1.33" />
    <circle fill="none" cx="12" cy="12" r="2" />
    <path d="M6,10H8v4H6Z" />
    <path d="M16,10h2v4H16Z" />
    <line x1="12" y1="7.33" x2="12" y2="16.67" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <rect fill="none" x="6" y="7.33" width="12" height="9.33" rx="1.33" />
    <circle fillOpacity=".2" cx="12" cy="12" r="2" />
    <path fillOpacity=".2" d="M6,10H8v4H6Z" />
    <path fillOpacity=".2" d="M16,10h2v4H16Z" />
    <line x1="12" y1="7.33" x2="12" y2="16.67" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <rect
      fill={secondaryColor}
      x="6"
      y="7.33"
      width="12"
      height="9.33"
      rx="1.33"
    />
    <circle fill="none" cx="12" cy="12" r="2" />
    <path fill="none" d="M6,10H8v4H6Z" />
    <path fill="none" d="M16,10h2v4H16Z" />
    <line x1="12" y1="7.33" x2="12" y2="16.67" />
  </Fragment>
);

const SoccerField = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default SoccerField;
