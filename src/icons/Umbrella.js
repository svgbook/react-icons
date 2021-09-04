import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M6,12a6,6,0,0,1,12,0Z" />
    <path fill="none" d="M12,12v4.5a1.5,1.5,0,0,0,3,0" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M12,12v4.5a1.5,1.5,0,0,0,3,0" />
    <path d="M6,12a6,6,0,0,1,12,0Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M12,12v4.5a1.5,1.5,0,0,0,3,0" />
    <path fillOpacity=".2" d="M6,12a6,6,0,0,1,12,0Z" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M12,12v4.5a1.5,1.5,0,0,0,3,0" />
    <path fill={secondaryColor} d="M6,12a6,6,0,0,1,12,0Z" />
  </Fragment>
);

const Umbrella = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Umbrella;
