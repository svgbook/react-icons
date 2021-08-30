import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M6,16.8a1.5,1.5,0,0,0,2.4,0,1.5,1.5,0,0,1,2.4,0,1.5,1.5,0,0,0,2.4,0,1.5,1.5,0,0,1,2.4,0,1.5,1.5,0,0,0,2.4,0"
    />
    <path
      fill="none"
      d="M6,14.4a1.5,1.5,0,0,0,2.4,0,1.5,1.5,0,0,1,2.4,0,1.5,1.5,0,0,0,2.4,0,1.5,1.5,0,0,1,2.4,0,1.5,1.5,0,0,0,2.4,0"
    />
    <path fill="none" d="M13.8,12V7.5a.9.9,0,0,1,1.8,0" />
    <path fill="none" d="M10.2,12V7.5a.9.9,0,1,0-1.8,0" />
    <line x1="13.8" y1="7.8" x2="10.2" y2="7.8" />
    <line x1="10.2" y1="10.8" x2="13.8" y2="10.8" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M6,16.8a1.5,1.5,0,0,0,2.4,0,1.5,1.5,0,0,1,2.4,0,1.5,1.5,0,0,0,2.4,0,1.5,1.5,0,0,1,2.4,0,1.5,1.5,0,0,0,2.4,0"
    />
    <path
      fill="none"
      d="M6,14.4a1.5,1.5,0,0,0,2.4,0,1.5,1.5,0,0,1,2.4,0,1.5,1.5,0,0,0,2.4,0,1.5,1.5,0,0,1,2.4,0,1.5,1.5,0,0,0,2.4,0"
    />
    <path fill="none" d="M13.8,12V7.5a.9.9,0,0,1,1.8,0" />
    <path fill="none" d="M10.2,12V7.5a.9.9,0,1,0-1.8,0" />
    <line x1="13.8" y1="7.8" x2="10.2" y2="7.8" />
    <line x1="10.2" y1="10.8" x2="13.8" y2="10.8" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      strokeOpacity=".2"
      d="M6,16.8a1.5,1.5,0,0,0,2.4,0,1.5,1.5,0,0,1,2.4,0,1.5,1.5,0,0,0,2.4,0,1.5,1.5,0,0,1,2.4,0,1.5,1.5,0,0,0,2.4,0"
    />
    <path
      fill="none"
      strokeOpacity=".2"
      d="M6,14.4a1.5,1.5,0,0,0,2.4,0,1.5,1.5,0,0,1,2.4,0,1.5,1.5,0,0,0,2.4,0,1.5,1.5,0,0,1,2.4,0,1.5,1.5,0,0,0,2.4,0"
    />
    <path fill="none" d="M13.8,12V7.5a.9.9,0,0,1,1.8,0" />
    <path fill="none" d="M10.2,12V7.5a.9.9,0,1,0-1.8,0" />
    <line x1="13.8" y1="7.8" x2="10.2" y2="7.8" />
    <line x1="10.2" y1="10.8" x2="13.8" y2="10.8" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      stroke={secondaryColor}
      d="M6,16.8a1.5,1.5,0,0,0,2.4,0,1.5,1.5,0,0,1,2.4,0,1.5,1.5,0,0,0,2.4,0,1.5,1.5,0,0,1,2.4,0,1.5,1.5,0,0,0,2.4,0"
    />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M6,14.4a1.5,1.5,0,0,0,2.4,0,1.5,1.5,0,0,1,2.4,0,1.5,1.5,0,0,0,2.4,0,1.5,1.5,0,0,1,2.4,0,1.5,1.5,0,0,0,2.4,0"
    />
    <path fill="none" d="M13.8,12V7.5a.9.9,0,0,1,1.8,0" />
    <path fill="none" d="M10.2,12V7.5a.9.9,0,1,0-1.8,0" />
    <line x1="13.8" y1="7.8" x2="10.2" y2="7.8" />
    <line x1="10.2" y1="10.8" x2="13.8" y2="10.8" />
  </Fragment>
);

const Pool = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Pool;
