import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M14,12.6A3.33,3.33,0,1,0,11.4,10" />
    <path fill="none" d="M14,12.6,11.4,10l-5,5.72a1.34,1.34,0,0,0,1.89,1.89Z" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M14,12.6A3.33,3.33,0,1,0,11.4,10" />
    <path fill="none" d="M14,12.6,11.4,10l-5,5.72a1.34,1.34,0,0,0,1.89,1.89Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fillOpacity=".2" d="M14,12.6A3.33,3.33,0,1,0,11.4,10" />
    <path fill="none" d="M14,12.6,11.4,10l-5,5.72a1.34,1.34,0,0,0,1.89,1.89Z" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill={secondaryColor} d="M14,12.6A3.33,3.33,0,1,0,11.4,10" />
    <path fill="none" d="M14,12.6,11.4,10l-5,5.72a1.34,1.34,0,0,0,1.89,1.89Z" />
  </Fragment>
);

const Mic = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Mic;
