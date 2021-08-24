import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="6" y1="6" x2="10.5" y2="6" />
    <line x1="13.5" y1="6" x2="18" y2="6" />
    <rect fill="none" x="6" y="9" width="4.5" height="9" rx="1.5" />
    <rect fill="none" x="13.5" y="9" width="4.5" height="4.5" rx="1.5" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="6" y1="6" x2="10.5" y2="6" />
    <line x1="13.5" y1="6" x2="18" y2="6" />
    <rect x="6" y="9" width="4.5" height="9" rx="1.5" />
    <rect x="13.5" y="9" width="4.5" height="4.5" rx="1.5" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line x1="6" y1="6" x2="10.5" y2="6" />
    <line x1="13.5" y1="6" x2="18" y2="6" />
    <rect fillOpacity=".2" x="6" y="9" width="4.5" height="9" rx="1.5" />
    <rect fillOpacity=".2" x="13.5" y="9" width="4.5" height="4.5" rx="1.5" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line x1="6" y1="6" x2="10.5" y2="6" />
    <line x1="13.5" y1="6" x2="18" y2="6" />
    <rect fill={secondaryColor} x="6" y="9" width="4.5" height="9" rx="1.5" />
    <rect
      fill={secondaryColor}
      x="13.5"
      y="9"
      width="4.5"
      height="4.5"
      rx="1.5"
    />
  </Fragment>
);

const Kanban = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Kanban;
