import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M13.06,11.65c0,1.56-1.58,2.82-3.53,2.82S6,13.21,6,11.65a5.65,5.65,0,0,0,11.29,0,2.12,2.12,0,1,0-4.23,0"
    />
    <path fill="none" d="M15.18,9.53A3,3,0,0,1,18,6.71" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M13.06,11.65c0,1.56-1.58,2.82-3.53,2.82S6,13.21,6,11.65a5.65,5.65,0,0,0,11.29,0,2.12,2.12,0,1,0-4.23,0" />
    <path fill="none" d="M15.18,9.53A3,3,0,0,1,18,6.71" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M13.06,11.65c0,1.56-1.58,2.82-3.53,2.82S6,13.21,6,11.65a5.65,5.65,0,0,0,11.29,0,2.12,2.12,0,1,0-4.23,0"
    />
    <path fill="none" d="M15.18,9.53A3,3,0,0,1,18,6.71" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M13.06,11.65c0,1.56-1.58,2.82-3.53,2.82S6,13.21,6,11.65a5.65,5.65,0,0,0,11.29,0,2.12,2.12,0,1,0-4.23,0"
    />
    <path fill="none" d="M15.18,9.53A3,3,0,0,1,18,6.71" />
  </Fragment>
);

const Chili = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Chili;
