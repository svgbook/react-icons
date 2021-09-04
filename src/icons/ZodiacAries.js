import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="12" y1="18" x2="12" y2="7.33" />
    <path
      fill="none"
      d="M14.67,12.67A3.34,3.34,0,1,0,12,7.33a3.33,3.33,0,1,0-2.67,5.34"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="12" y1="18" x2="12" y2="7.33" />
    <path
      fill="none"
      d="M14.67,12.67A3.34,3.34,0,1,0,12,7.33a3.33,3.33,0,1,0-2.67,5.34"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line strokeOpacity=".2" x1="12" y1="18" x2="12" y2="7.33" />
    <path
      fill="none"
      d="M14.67,12.67A3.34,3.34,0,1,0,12,7.33a3.33,3.33,0,1,0-2.67,5.34"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line x1="12" y1="18" x2="12" y2="7.33" />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M14.67,12.67A3.34,3.34,0,1,0,12,7.33a3.33,3.33,0,1,0-2.67,5.34"
    />
  </Fragment>
);

const ZodiacAries = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default ZodiacAries;
