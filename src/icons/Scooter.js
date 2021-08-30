import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M9,15.75h3.75A4.5,4.5,0,0,1,16.5,12V8.25A1.5,1.5,0,0,0,15,6.75h-.75"
    />
    <circle fill="none" cx="16.5" cy="15.75" r="1.5" />
    <circle fill="none" cx="7.5" cy="15.75" r="1.5" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M9,15.75h3.75A4.5,4.5,0,0,1,16.5,12V8.25A1.5,1.5,0,0,0,15,6.75h-.75"
    />
    <circle cx="16.5" cy="15.75" r="1.5" />
    <circle cx="7.5" cy="15.75" r="1.5" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M9,15.75h3.75A4.5,4.5,0,0,1,16.5,12V8.25A1.5,1.5,0,0,0,15,6.75h-.75"
    />
    <circle fillOpacity=".2" cx="16.5" cy="15.75" r="1.5" />
    <circle fillOpacity=".2" cx="7.5" cy="15.75" r="1.5" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      d="M9,15.75h3.75A4.5,4.5,0,0,1,16.5,12V8.25A1.5,1.5,0,0,0,15,6.75h-.75"
    />
    <circle fill="none" stroke={secondaryColor} cx="16.5" cy="15.75" r="1.5" />
    <circle fill="none" stroke={secondaryColor} cx="7.5" cy="15.75" r="1.5" />
  </Fragment>
);

const Scooter = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Scooter;
