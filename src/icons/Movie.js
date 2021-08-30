import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <rect fill="none" x="6" y="6" width="12" height="12" rx="1.5" />
    <line x1="9" y1="6" x2="9" y2="18" />
    <line x1="15" y1="6" x2="15" y2="18" />
    <line x1="6" y1="9" x2="9" y2="9" />
    <line x1="6" y1="15" x2="9" y2="15" />
    <line x1="6" y1="12" x2="18" y2="12" />
    <line x1="15" y1="9" x2="18" y2="9" />
    <line x1="15" y1="15" x2="18" y2="15" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M16.5,5.5h-9a2,2,0,0,0-2,2v9a2,2,0,0,0,2,2h9a2,2,0,0,0,2-2v-9A2,2,0,0,0,16.5,5.5Zm-1,1h1a1,1,0,0,1,1,1v1h-2Zm-7,11h-1a1,1,0,0,1-1-1v-1h2Zm0-3h-2v-2h2Zm0-3h-2v-2h2Zm0-3h-2v-1a1,1,0,0,1,1-1h1Zm6,4h-5v-1h5Zm3,4a1,1,0,0,1-1,1h-1v-2h2Zm0-2h-2v-2h2Zm0-3h-2v-2h2Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <rect fillOpacity=".2" x="6" y="6" width="12" height="12" rx="1.5" />
    <line x1="9" y1="6" x2="9" y2="18" />
    <line x1="15" y1="6" x2="15" y2="18" />
    <line x1="6" y1="9" x2="9" y2="9" />
    <line x1="6" y1="15" x2="9" y2="15" />
    <line x1="6" y1="12" x2="18" y2="12" />
    <line x1="15" y1="9" x2="18" y2="9" />
    <line x1="15" y1="15" x2="18" y2="15" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <rect fill={secondaryColor} x="6" y="6" width="12" height="12" rx="1.5" />
    <line x1="9" y1="6" x2="9" y2="18" />
    <line x1="15" y1="6" x2="15" y2="18" />
    <line x1="6" y1="9" x2="9" y2="9" />
    <line x1="6" y1="15" x2="9" y2="15" />
    <line x1="6" y1="12" x2="18" y2="12" />
    <line x1="15" y1="9" x2="18" y2="9" />
    <line x1="15" y1="15" x2="18" y2="15" />
  </Fragment>
);

const Movie = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Movie;
