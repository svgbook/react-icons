import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M6,7.45l1.09,1.1L8.91,6.73" />
    <path fill="none" d="M6,11.82l1.09,1.09,1.82-1.82" />
    <path fill="none" d="M6,16.18l1.09,1.09,1.82-1.82" />
    <line x1="11.45" y1="7.82" x2="18" y2="7.82" />
    <line x1="11.45" y1="12.18" x2="18" y2="12.18" />
    <line x1="11.45" y1="16.55" x2="18" y2="16.55" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M6,7.45l1.09,1.1L8.91,6.73" />
    <path fill="none" d="M6,11.82l1.09,1.09,1.82-1.82" />
    <path fill="none" d="M6,16.18l1.09,1.09,1.82-1.82" />
    <line x1="11.45" y1="7.82" x2="18" y2="7.82" />
    <line x1="11.45" y1="12.18" x2="18" y2="12.18" />
    <line x1="11.45" y1="16.55" x2="18" y2="16.55" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" strokeOpacity=".2" d="M6,7.45l1.09,1.1L8.91,6.73" />
    <path fill="none" strokeOpacity=".2" d="M6,11.82l1.09,1.09,1.82-1.82" />
    <path fill="none" strokeOpacity=".2" d="M6,16.18l1.09,1.09,1.82-1.82" />
    <line x1="11.45" y1="7.82" x2="18" y2="7.82" />
    <line x1="11.45" y1="12.18" x2="18" y2="12.18" />
    <line x1="11.45" y1="16.55" x2="18" y2="16.55" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" stroke={secondaryColor} d="M6,7.45l1.09,1.1L8.91,6.73" />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M6,11.82l1.09,1.09,1.82-1.82"
    />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M6,16.18l1.09,1.09,1.82-1.82"
    />
    <line x1="11.45" y1="7.82" x2="18" y2="7.82" />
    <line x1="11.45" y1="12.18" x2="18" y2="12.18" />
    <line x1="11.45" y1="16.55" x2="18" y2="16.55" />
  </Fragment>
);

const ListCheck = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default ListCheck;
