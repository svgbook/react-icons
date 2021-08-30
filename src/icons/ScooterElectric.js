import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M9,16.12h3.75a4.49,4.49,0,0,1,3.75-3.74V8.63A1.5,1.5,0,0,0,15,7.13h-.75"
    />
    <path fill="none" d="M10.5,6.38,9,9.38h2.25l-1.5,3" />
    <circle fill="none" cx="16.5" cy="16.12" r="1.5" />
    <circle fill="none" cx="7.5" cy="16.12" r="1.5" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M9,16.12h3.75a4.49,4.49,0,0,1,3.75-3.74V8.63A1.5,1.5,0,0,0,15,7.13h-.75"
    />
    <path fill="none" d="M10.5,6.38,9,9.38h2.25l-1.5,3" />
    <circle cx="16.5" cy="16.12" r="1.5" />
    <circle cx="7.5" cy="16.12" r="1.5" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M9,16.12h3.75a4.49,4.49,0,0,1,3.75-3.74V8.63A1.5,1.5,0,0,0,15,7.13h-.75"
    />
    <path fill="none" strokeOpacity=".2" d="M10.5,6.38,9,9.38h2.25l-1.5,3" />
    <circle fillOpacity=".2" cx="16.5" cy="16.12" r="1.5" />
    <circle fillOpacity=".2" cx="7.5" cy="16.12" r="1.5" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      d="M9,16.12h3.75a4.49,4.49,0,0,1,3.75-3.74V8.63A1.5,1.5,0,0,0,15,7.13h-.75"
    />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M10.5,6.38,9,9.38h2.25l-1.5,3"
    />
    <circle fill="none" stroke={secondaryColor} cx="16.5" cy="16.12" r="1.5" />
    <circle fill="none" stroke={secondaryColor} cx="7.5" cy="16.12" r="1.5" />
  </Fragment>
);

const ScooterElectric = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default ScooterElectric;
