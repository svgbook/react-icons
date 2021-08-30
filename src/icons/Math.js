import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M18,6.75H12.75l-3,10.5L7.5,12.75H6" />
    <path d="M18,12.75l-3,3" />
    <line x1="15" y1="12.75" x2="18" y2="15.75" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M18,6.75H12.75l-3,10.5L7.5,12.75H6" />
    <path d="M18,12.75l-3,3" />
    <line x1="15" y1="12.75" x2="18" y2="15.75" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      strokeOpacity=".2"
      d="M18,6.75H12.75l-3,10.5L7.5,12.75H6"
    />
    <path d="M18,12.75l-3,3" />
    <line x1="15" y1="12.75" x2="18" y2="15.75" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      stroke={secondaryColor}
      d="M18,6.75H12.75l-3,10.5L7.5,12.75H6"
    />
    <path d="M18,12.75l-3,3" />
    <line x1="15" y1="12.75" x2="18" y2="15.75" />
  </Fragment>
);

const Math = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Math;
