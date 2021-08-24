import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <rect fill="none" x="6" y="12.75" width="3.75" height="5.25" rx="1.5" />
    <rect fill="none" x="14.25" y="12.75" width="3.75" height="5.25" rx="1.5" />
    <path fill="none" d="M6,14.25V12a6,6,0,0,1,12,0v2.25" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <rect x="6" y="12.75" width="3.75" height="5.25" rx="1.5" />
    <rect x="14.25" y="12.75" width="3.75" height="5.25" rx="1.5" />
    <path fill="none" d="M6,14.25V12a6,6,0,0,1,12,0v2.25" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <rect
      fillOpacity=".2"
      x="6"
      y="12.75"
      width="3.75"
      height="5.25"
      rx="1.5"
    />
    <rect
      fillOpacity=".2"
      x="14.25"
      y="12.75"
      width="3.75"
      height="5.25"
      rx="1.5"
    />
    <path fill="none" d="M6,14.25V12a6,6,0,0,1,12,0v2.25" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <rect
      fill={secondaryColor}
      x="6"
      y="12.75"
      width="3.75"
      height="5.25"
      rx="1.5"
    />
    <rect
      fill={secondaryColor}
      x="14.25"
      y="12.75"
      width="3.75"
      height="5.25"
      rx="1.5"
    />
    <path fill="none" d="M6,14.25V12a6,6,0,0,1,12,0v2.25" />
  </Fragment>
);

const Headphones = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Headphones;
