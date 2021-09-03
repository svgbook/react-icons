import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M8,14v-.67A1.34,1.34,0,0,1,9.33,12h5.34A1.34,1.34,0,0,1,16,13.33V14"
    />
    <line x1="12" y1="10" x2="12" y2="12" />
    <rect fill="none" x="6" y="14" width="4" height="4" rx="1.33" />
    <rect fill="none" x="14" y="14" width="4" height="4" rx="1.33" />
    <rect fill="none" x="10" y="6" width="4" height="4" rx="1.33" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M8,14v-.67A1.34,1.34,0,0,1,9.33,12h5.34A1.34,1.34,0,0,1,16,13.33V14"
    />
    <line x1="12" y1="10" x2="12" y2="12" />
    <rect x="6" y="14" width="4" height="4" rx="1.33" />
    <rect x="14" y="14" width="4" height="4" rx="1.33" />
    <rect x="10" y="6" width="4" height="4" rx="1.33" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      strokeOpacity=".2"
      d="M8,14v-.67A1.34,1.34,0,0,1,9.33,12h5.34A1.34,1.34,0,0,1,16,13.33V14"
    />
    <line strokeOpacity=".2" x1="12" y1="10" x2="12" y2="12" />
    <rect fillOpacity=".2" x="6" y="14" width="4" height="4" rx="1.33" />
    <rect fillOpacity=".2" x="14" y="14" width="4" height="4" rx="1.33" />
    <rect fillOpacity=".2" x="10" y="6" width="4" height="4" rx="1.33" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      d="M8,14v-.67A1.34,1.34,0,0,1,9.33,12h5.34A1.34,1.34,0,0,1,16,13.33V14"
    />
    <line x1="12" y1="10" x2="12" y2="12" />
    <rect
      fill="none"
      stroke={secondaryColor}
      x="6"
      y="14"
      width="4"
      height="4"
      rx="1.33"
    />
    <rect
      fill="none"
      stroke={secondaryColor}
      x="14"
      y="14"
      width="4"
      height="4"
      rx="1.33"
    />
    <rect
      fill="none"
      stroke={secondaryColor}
      x="10"
      y="6"
      width="4"
      height="4"
      rx="1.33"
    />
  </Fragment>
);

const Sitemap = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Sitemap;
