import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M10.67,13.33a2.34,2.34,0,0,0,3.3,0l0,0,2.67-2.66a2.36,2.36,0,0,0-3.34-3.34L13,7.67"
    />
    <path
      fill="none"
      d="M13.33,10.67a2.34,2.34,0,0,0-3.3,0l0,0L7.33,13.33a2.36,2.36,0,0,0,3.34,3.34l.33-.34"
    />
    <line x1="14.67" y1="18" x2="14.67" y2="16.67" />
    <line x1="16.67" y1="14.67" x2="18" y2="14.67" />
    <line x1="6" y1="9.33" x2="7.33" y2="9.33" />
    <line x1="9.33" y1="6" x2="9.33" y2="7.33" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M10.67,13.33a2.34,2.34,0,0,0,3.3,0l0,0,2.67-2.66a2.36,2.36,0,0,0-3.34-3.34L13,7.67"
    />
    <path
      fill="none"
      d="M13.33,10.67a2.34,2.34,0,0,0-3.3,0l0,0L7.33,13.33a2.36,2.36,0,0,0,3.34,3.34l.33-.34"
    />
    <line x1="14.67" y1="18" x2="14.67" y2="16.67" />
    <line x1="16.67" y1="14.67" x2="18" y2="14.67" />
    <line x1="6" y1="9.33" x2="7.33" y2="9.33" />
    <line x1="9.33" y1="6" x2="9.33" y2="7.33" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M10.67,13.33a2.34,2.34,0,0,0,3.3,0l0,0,2.67-2.66a2.36,2.36,0,0,0-3.34-3.34L13,7.67"
    />
    <path
      fill="none"
      d="M13.33,10.67a2.34,2.34,0,0,0-3.3,0l0,0L7.33,13.33a2.36,2.36,0,0,0,3.34,3.34l.33-.34"
    />
    <line strokeOpacity=".2" x1="14.67" y1="18" x2="14.67" y2="16.67" />
    <line strokeOpacity=".2" x1="16.67" y1="14.67" x2="18" y2="14.67" />
    <line strokeOpacity=".2" x1="6" y1="9.33" x2="7.33" y2="9.33" />
    <line strokeOpacity=".2" x1="9.33" y1="6" x2="9.33" y2="7.33" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      stroke={secondaryColor}
      d="M10.67,13.33a2.34,2.34,0,0,0,3.3,0l0,0,2.67-2.66a2.36,2.36,0,0,0-3.34-3.34L13,7.67"
    />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M13.33,10.67a2.34,2.34,0,0,0-3.3,0l0,0L7.33,13.33a2.36,2.36,0,0,0,3.34,3.34l.33-.34"
    />
    <line x1="14.67" y1="18" x2="14.67" y2="16.67" />
    <line x1="16.67" y1="14.67" x2="18" y2="14.67" />
    <line x1="6" y1="9.33" x2="7.33" y2="9.33" />
    <line x1="9.33" y1="6" x2="9.33" y2="7.33" />
  </Fragment>
);

const Unlink = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Unlink;
