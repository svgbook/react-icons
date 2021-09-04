import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M6,6A1.33,1.33,0,0,1,7.33,7.33v6" />
    <path fill="none" d="M7.33,7.33a1.34,1.34,0,0,1,2.67,0v6" />
    <path fill="none" d="M10,7.33a1.34,1.34,0,0,1,2.67,0V14a2,2,0,0,0,2,2H18" />
    <polyline fill="none" points="16 14 18 16 16 18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M6,6A1.33,1.33,0,0,1,7.33,7.33v6" />
    <path fill="none" d="M7.33,7.33a1.34,1.34,0,0,1,2.67,0v6" />
    <path fill="none" d="M10,7.33a1.34,1.34,0,0,1,2.67,0V14a2,2,0,0,0,2,2H18" />
    <polyline fill="none" points="16 14 18 16 16 18" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M6,6A1.33,1.33,0,0,1,7.33,7.33v6" />
    <path fill="none" d="M7.33,7.33a1.34,1.34,0,0,1,2.67,0v6" />
    <path fill="none" d="M10,7.33a1.34,1.34,0,0,1,2.67,0V14a2,2,0,0,0,2,2H18" />
    <polyline fill="none" strokeOpacity=".2" points="16 14 18 16 16 18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      stroke={secondaryColor}
      d="M6,6A1.33,1.33,0,0,1,7.33,7.33v6"
    />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M7.33,7.33a1.34,1.34,0,0,1,2.67,0v6"
    />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M10,7.33a1.34,1.34,0,0,1,2.67,0V14a2,2,0,0,0,2,2H18"
    />
    <polyline fill="none" points="16 14 18 16 16 18" />
  </Fragment>
);

const ZodiacScorpio = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default ZodiacScorpio;
