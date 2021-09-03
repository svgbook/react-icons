import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <rect fill="none" x="6" y="6" width="12" height="12" rx="1.5" />
    <line x1="10.5" y1="10.5" x2="13.5" y2="13.5" />
    <path d="M13.5,10.5l-3,3" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M16.5,5.5h-9a2,2,0,0,0-2,2v9a2,2,0,0,0,2,2h9a2,2,0,0,0,2-2v-9A2,2,0,0,0,16.5,5.5Zm-2.65,7.65a.48.48,0,0,1,0,.7.48.48,0,0,1-.7,0L12,12.7l-1.15,1.15a.48.48,0,0,1-.7,0,.48.48,0,0,1,0-.7L11.3,12l-1.15-1.15a.49.49,0,0,1,.7-.7L12,11.3l1.15-1.15a.49.49,0,0,1,.7.7L12.7,12Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <rect fillOpacity=".2" x="6" y="6" width="12" height="12" rx="1.5" />
    <line x1="10.5" y1="10.5" x2="13.5" y2="13.5" />
    <path d="M13.5,10.5l-3,3" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <rect fill={secondaryColor} x="6" y="6" width="12" height="12" rx="1.5" />
    <line x1="10.5" y1="10.5" x2="13.5" y2="13.5" />
    <path d="M13.5,10.5l-3,3" />
  </Fragment>
);

const SquareX = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default SquareX;
