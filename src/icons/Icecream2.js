import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M15.57,11.05a3.79,3.79,0,1,0-7.14,0" />
    <path fill="none" d="M8.43,11.05,12,18l3.57-6.95Z" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M15.57,11.05a3.79,3.79,0,1,0-7.14,0" />
    <path fill="none" d="M8.43,11.05,12,18l3.57-6.95Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fillOpacity=".2" d="M15.57,11.05a3.79,3.79,0,1,0-7.14,0" />
    <path fill="none" d="M8.43,11.05,12,18l3.57-6.95Z" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill={secondaryColor} d="M15.57,11.05a3.79,3.79,0,1,0-7.14,0" />
    <path fill="none" d="M8.43,11.05,12,18l3.57-6.95Z" />
  </Fragment>
);

const Icecream2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Icecream2;
