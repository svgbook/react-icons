import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M6.38,6h3a.76.76,0,0,1,.75.75v3a.76.76,0,0,1-.75.75h-3"
    />
    <path
      fill="none"
      d="M6.38,13.5h3a.76.76,0,0,1,.75.75v3a.76.76,0,0,1-.75.75h-3"
    />
    <path
      fill="none"
      d="M10.13,8.25h3a.76.76,0,0,1,.75.75v6a.76.76,0,0,1-.75.75h-3"
    />
    <line x1="13.88" y1="12" x2="17.63" y2="12" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M6.38,6h3a.76.76,0,0,1,.75.75v3a.76.76,0,0,1-.75.75h-3"
    />
    <path
      fill="none"
      d="M6.38,13.5h3a.76.76,0,0,1,.75.75v3a.76.76,0,0,1-.75.75h-3"
    />
    <path
      fill="none"
      d="M10.13,8.25h3a.76.76,0,0,1,.75.75v6a.76.76,0,0,1-.75.75h-3"
    />
    <line x1="13.88" y1="12" x2="17.63" y2="12" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M6.38,6h3a.76.76,0,0,1,.75.75v3a.76.76,0,0,1-.75.75h-3"
    />
    <path
      fill="none"
      d="M6.38,13.5h3a.76.76,0,0,1,.75.75v3a.76.76,0,0,1-.75.75h-3"
    />
    <path
      fill="none"
      strokeOpacity=".2"
      d="M10.13,8.25h3a.76.76,0,0,1,.75.75v6a.76.76,0,0,1-.75.75h-3"
    />
    <line x1="13.88" y1="12" x2="17.63" y2="12" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      d="M10.13,8.25h3a.76.76,0,0,1,.75.75v6a.76.76,0,0,1-.75.75h-3"
    />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M6.38,6h3a.76.76,0,0,1,.75.75v3a.76.76,0,0,1-.75.75h-3"
    />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M6.38,13.5h3a.76.76,0,0,1,.75.75v3a.76.76,0,0,1-.75.75h-3"
    />
    <line x1="13.88" y1="12" x2="17.63" y2="12" />
  </Fragment>
);

const Tournament = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Tournament;
