import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M18,9.33V10a4,4,0,0,1-4,4H12v-.67a4,4,0,0,1,4-4Z" />
    <line x1="12" y1="17.33" x2="12" y2="10.6" />
    <path
      fill="none"
      d="M12,10.67V12H10A4,4,0,0,1,6,8V6.67H8A4,4,0,0,1,12,10.67Z"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="12" y1="17.33" x2="12" y2="10.6" />
    <path d="M18,9.33V10a4,4,0,0,1-4,4H12v-.67a4,4,0,0,1,4-4Z" />
    <path d="M12,10.67V12H10A4,4,0,0,1,6,8V6.67H8A4,4,0,0,1,12,10.67Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line x1="12" y1="17.33" x2="12" y2="10.6" />
    <path
      fillOpacity=".2"
      d="M18,9.33V10a4,4,0,0,1-4,4H12v-.67a4,4,0,0,1,4-4Z"
    />
    <path
      fillOpacity=".2"
      d="M12,10.67V12H10A4,4,0,0,1,6,8V6.67H8A4,4,0,0,1,12,10.67Z"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line x1="12" y1="17.33" x2="12" y2="10.6" />
    <path
      fill={secondaryColor}
      d="M18,9.33V10a4,4,0,0,1-4,4H12v-.67a4,4,0,0,1,4-4Z"
    />
    <path
      fill={secondaryColor}
      d="M12,10.67V12H10A4,4,0,0,1,6,8V6.67H8A4,4,0,0,1,12,10.67Z"
    />
  </Fragment>
);

const Seeding = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Seeding;
