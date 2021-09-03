import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M6.13,9.39c0,.36.58.65,1.3.65h9.14c.72,0,1.3-.29,1.3-.65"
    />
    <circle fill="none" cx="8.74" cy="13.31" r="1.31" />
    <circle fill="none" cx="15.26" cy="13.31" r="1.31" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M6.13,9.39c0,.36.58.65,1.3.65h9.14c.72,0,1.3-.29,1.3-.65"
    />
    <circle cx="8.74" cy="13.31" r="1.31" />
    <circle cx="15.26" cy="13.31" r="1.31" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      strokeOpacity=".2"
      d="M6.13,9.39c0,.36.58.65,1.3.65h9.14c.72,0,1.3-.29,1.3-.65"
    />
    <circle fillOpacity=".2" cx="8.74" cy="13.31" r="1.31" />
    <circle fillOpacity=".2" cx="15.26" cy="13.31" r="1.31" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      stroke={secondaryColor}
      d="M6.13,9.39c0,.36.58.65,1.3.65h9.14c.72,0,1.3-.29,1.3-.65"
    />
    <circle fill="none" cx="8.74" cy="13.31" r="1.31" />
    <circle fill="none" cx="15.26" cy="13.31" r="1.31" />
  </Fragment>
);

const Skateboard = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Skateboard;
