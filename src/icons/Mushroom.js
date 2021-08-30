import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M10.67,12v4.67a1.33,1.33,0,1,0,2.66,0V12" />
    <path
      fill="none"
      d="M17.33,11.4a5.33,5.33,0,1,0-10.66,0,.6.6,0,0,0,.6.6h9.46A.6.6,0,0,0,17.33,11.4Z"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M10.67,12v4.67a1.33,1.33,0,1,0,2.66,0V12" />
    <path d="M17.33,11.4a5.33,5.33,0,1,0-10.66,0,.6.6,0,0,0,.6.6h9.46A.6.6,0,0,0,17.33,11.4Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fillOpacity=".2" d="M10.67,12v4.67a1.33,1.33,0,1,0,2.66,0V12" />
    <path
      fillOpacity=".2"
      d="M17.33,11.4a5.33,5.33,0,1,0-10.66,0,.6.6,0,0,0,.6.6h9.46A.6.6,0,0,0,17.33,11.4Z"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill={secondaryColor} d="M10.67,12v4.67a1.33,1.33,0,1,0,2.66,0V12" />
    <path
      fill={secondaryColor}
      d="M17.33,11.4a5.33,5.33,0,1,0-10.66,0,.6.6,0,0,0,.6.6h9.46A.6.6,0,0,0,17.33,11.4Z"
    />
  </Fragment>
);

const Mushroom = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Mushroom;
