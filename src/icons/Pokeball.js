import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="12" cy="12" r="6" />
    <circle fill="none" cx="12" cy="12" r="2" />
    <path d="M6,12h4m4,0h4" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M18.48,12.5a6.5,6.5,0,0,1-13,0h4a2.5,2.5,0,0,0,4.9,0Z"
    />
    <path
      stroke="none"
      d="M18.48,11.5h-4a2.5,2.5,0,0,0-4.9,0h-4a6.5,6.5,0,0,1,13,0Z"
    />
    <path
      stroke="none"
      d="M13.5,12a1.39,1.39,0,0,1-.09.5,1.49,1.49,0,0,1-2.82,0,1.43,1.43,0,0,1,0-1,1.49,1.49,0,0,1,2.82,0A1.39,1.39,0,0,1,13.5,12Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fillOpacity=".2" cx="12" cy="12" r="6" />
    <circle fill="none" cx="12" cy="12" r="2" />
    <path d="M6,12h4m4,0h4" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx="12" cy="12" r="6" />
    <circle fill="none" cx="12" cy="12" r="2" />
    <path d="M6,12h4m4,0h4" />
  </Fragment>
);

const Pokeball = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Pokeball;
