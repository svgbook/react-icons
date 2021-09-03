import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M8.25,6.75V13.5a3.75,3.75,0,0,0,7.5,0V6.75" />
    <path d="M6,12H18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M8.25,6.75V13.5a3.75,3.75,0,0,0,7.5,0V6.75" />
    <path d="M6,12H18" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      strokeOpacity=".2"
      d="M8.25,6.75V13.5a3.75,3.75,0,0,0,7.5,0V6.75"
    />
    <path d="M6,12H18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M8.25,6.75V13.5a3.75,3.75,0,0,0,7.5,0V6.75" />
    <path stroke={secondaryColor} d="M6,12H18" />
  </Fragment>
);

const StrikeThrough = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default StrikeThrough;
