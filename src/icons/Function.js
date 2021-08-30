import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M13.33,10.67H14c.67,0,.67.66,1.34,2.35s.66,2.31,1.33,2.31h.66"
    />
    <path fill="none" d="M12.67,15.33c1,0,2-1.33,2.66-2.33S17,10.67,18,10.67" />
    <path
      fill="none"
      d="M6,16.67c0,1,.33,1.33,1.33,1.33s1.34-2.67,2-6,1-6,2-6,1.34.33,1.34,1.33"
    />
    <line x1="7.33" y1="12" x2="11.33" y2="12" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M13.33,10.67H14c.67,0,.67.66,1.34,2.35s.66,2.31,1.33,2.31h.66"
    />
    <path fill="none" d="M12.67,15.33c1,0,2-1.33,2.66-2.33S17,10.67,18,10.67" />
    <path
      fill="none"
      d="M6,16.67c0,1,.33,1.33,1.33,1.33s1.34-2.67,2-6,1-6,2-6,1.34.33,1.34,1.33"
    />
    <line x1="7.33" y1="12" x2="11.33" y2="12" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      strokeOpacity=".2"
      d="M13.33,10.67H14c.67,0,.67.66,1.34,2.35s.66,2.31,1.33,2.31h.66"
    />
    <path
      fill="none"
      strokeOpacity=".2"
      d="M12.67,15.33c1,0,2-1.33,2.66-2.33S17,10.67,18,10.67"
    />
    <path
      fill="none"
      d="M6,16.67c0,1,.33,1.33,1.33,1.33s1.34-2.67,2-6,1-6,2-6,1.34.33,1.34,1.33"
    />
    <line x1="7.33" y1="12" x2="11.33" y2="12" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      stroke={secondaryColor}
      d="M13.33,10.67H14c.67,0,.67.66,1.34,2.35s.66,2.31,1.33,2.31h.66"
    />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M12.67,15.33c1,0,2-1.33,2.66-2.33S17,10.67,18,10.67"
    />
    <path
      fill="none"
      d="M6,16.67c0,1,.33,1.33,1.33,1.33s1.34-2.67,2-6,1-6,2-6,1.34.33,1.34,1.33"
    />
    <line x1="7.33" y1="12" x2="11.33" y2="12" />
  </Fragment>
);

const Function = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Function;
