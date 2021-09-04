import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <rect fill="none" x="10.5" y="6.75" width="7.5" height="10.5" rx="1.5" />
    <line x1="8.25" y1="8.25" x2="8.25" y2="15.75" />
    <line x1="6" y1="9" x2="6" y2="15" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <rect x="10.5" y="6.75" width="7.5" height="10.5" rx="1.5" />
    <line x1="8.25" y1="8.25" x2="8.25" y2="15.75" />
    <line x1="6" y1="9" x2="6" y2="15" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <rect
      fillOpacity=".2"
      x="10.5"
      y="6.75"
      width="7.5"
      height="10.5"
      rx="1.5"
    />
    <line x1="8.25" y1="8.25" x2="8.25" y2="15.75" />
    <line x1="6" y1="9" x2="6" y2="15" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <rect
      fill={secondaryColor}
      x="10.5"
      y="6.75"
      width="7.5"
      height="10.5"
      rx="1.5"
    />
    <line x1="8.25" y1="8.25" x2="8.25" y2="15.75" />
    <line x1="6" y1="9" x2="6" y2="15" />
  </Fragment>
);

const Versions = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Versions;
