import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="7.5" y1="9.75" x2="12" y2="9.75" />
    <line x1="6" y1="6.75" x2="9" y2="6.75" />
    <path fill="none" d="M7.5,6.75V15a.76.76,0,0,0,.75.75H12" />
    <rect fill="none" x="12" y="8.25" width="6" height="3" rx="0.75" />
    <rect fill="none" x="12" y="14.25" width="6" height="3" rx="0.75" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="7.5" y1="9.75" x2="12" y2="9.75" />
    <line x1="6" y1="6.75" x2="9" y2="6.75" />
    <path fill="none" d="M7.5,6.75V15a.76.76,0,0,0,.75.75H12" />
    <rect x="12" y="8.25" width="6" height="3" rx="0.75" />
    <rect x="12" y="14.25" width="6" height="3" rx="0.75" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line x1="7.5" y1="9.75" x2="12" y2="9.75" />
    <line x1="6" y1="6.75" x2="9" y2="6.75" />
    <path fill="none" d="M7.5,6.75V15a.76.76,0,0,0,.75.75H12" />
    <rect fillOpacity=".2" x="12" y="8.25" width="6" height="3" rx="0.75" />
    <rect fillOpacity=".2" x="12" y="14.25" width="6" height="3" rx="0.75" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line x1="7.5" y1="9.75" x2="12" y2="9.75" />
    <line x1="6" y1="6.75" x2="9" y2="6.75" />
    <path fill="none" d="M7.5,6.75V15a.76.76,0,0,0,.75.75H12" />
    <rect
      fill={secondaryColor}
      x="12"
      y="8.25"
      width="6"
      height="3"
      rx="0.75"
    />
    <rect
      fill={secondaryColor}
      x="12"
      y="14.25"
      width="6"
      height="3"
      rx="0.75"
    />
  </Fragment>
);

const SubTask = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default SubTask;
