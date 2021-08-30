import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M8.67,14h6.66v2.67A1.33,1.33,0,0,1,14,18H10a1.33,1.33,0,0,1-1.33-1.33Z"
    />
    <path fill="none" d="M12,10v1.33H10a4,4,0,0,1-4-4V6H8A4,4,0,0,1,12,10Z" />
    <path fill="none" d="M18,7.33V8a4,4,0,0,1-4,4H12v-.67a4,4,0,0,1,4-4Z" />
    <polyline points="12 14 12 11.33 12 10 12 11.33" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M8.67,14h6.66v2.67A1.33,1.33,0,0,1,14,18H10a1.33,1.33,0,0,1-1.33-1.33Z" />
    <path d="M12,10v1.33H10a4,4,0,0,1-4-4V6H8A4,4,0,0,1,12,10Z" />
    <path d="M18,7.33V8a4,4,0,0,1-4,4H12v-.67a4,4,0,0,1,4-4Z" />
    <polyline points="12 14 12 11.33 12 10 12 11.33" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path d="M8.67,14h6.66v2.67A1.33,1.33,0,0,1,14,18H10a1.33,1.33,0,0,1-1.33-1.33Z" />
    <path
      fillOpacity=".2"
      d="M12,10v1.33H10a4,4,0,0,1-4-4V6H8A4,4,0,0,1,12,10Z"
    />
    <path
      fillOpacity=".2"
      d="M18,7.33V8a4,4,0,0,1-4,4H12v-.67a4,4,0,0,1,4-4Z"
    />
    <polyline points="12 14 12 11.33 12 10 12 11.33" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path d="M8.67,14h6.66v2.67A1.33,1.33,0,0,1,14,18H10a1.33,1.33,0,0,1-1.33-1.33Z" />
    <path
      fill={secondaryColor}
      d="M12,10v1.33H10a4,4,0,0,1-4-4V6H8A4,4,0,0,1,12,10Z"
    />
    <path
      fill={secondaryColor}
      d="M18,7.33V8a4,4,0,0,1-4,4H12v-.67a4,4,0,0,1,4-4Z"
    />
    <polyline points="12 14 12 11.33 12 10 12 11.33" />
  </Fragment>
);

const Plant = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Plant;
