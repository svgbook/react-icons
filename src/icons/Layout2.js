import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <rect fill="none" x="6" y="6" width="4.5" height="3.75" rx="1.5" />
    <rect fill="none" x="6" y="12.75" width="4.5" height="5.25" rx="1.5" />
    <rect fill="none" x="13.5" y="6" width="4.5" height="12" rx="1.5" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <rect x="6" y="6" width="4.5" height="3.75" rx="1.5" />
    <rect x="6" y="12.75" width="4.5" height="5.25" rx="1.5" />
    <rect x="13.5" y="6" width="4.5" height="12" rx="1.5" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <rect fillOpacity=".2" x="6" y="6" width="4.5" height="3.75" rx="1.5" />
    <rect fillOpacity=".2" x="6" y="12.75" width="4.5" height="5.25" rx="1.5" />
    <rect fillOpacity=".2" x="13.5" y="6" width="4.5" height="12" rx="1.5" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <rect
      fill={secondaryColor}
      x="6"
      y="6"
      width="4.5"
      height="3.75"
      rx="1.5"
    />
    <rect
      fill={secondaryColor}
      x="6"
      y="12.75"
      width="4.5"
      height="5.25"
      rx="1.5"
    />
    <rect
      fill={secondaryColor}
      x="13.5"
      y="6"
      width="4.5"
      height="12"
      rx="1.5"
    />
  </Fragment>
);

const Layout2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Layout2;
