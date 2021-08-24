import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <rect fill="none" x="9" y="6" width="9" height="9" rx="1.5" />
    <rect fill="none" x="6" y="9" width="9" height="9" rx="1.5" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M16.5,5.5h-6a2,2,0,0,0-2,2v1h-1a2,2,0,0,0-2,2v6a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2v-1h1a2,2,0,0,0,2-2v-6A2,2,0,0,0,16.5,5.5Zm-7,4h4a1,1,0,0,1,1,1v4h-4a1,1,0,0,1-1-1Zm5,7a1,1,0,0,1-1,1h-6a1,1,0,0,1-1-1v-6a1,1,0,0,1,1-1h1v4a2,2,0,0,0,2,2h4Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <rect fillOpacity=".2" x="9" y="6" width="9" height="9" rx="1.5" />
    <rect fillOpacity=".2" x="6" y="9" width="9" height="9" rx="1.5" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      stroke="none"
      d="M16.5,5.5h-6a2,2,0,0,0-2,2v1h-1a2,2,0,0,0-2,2v6a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2v-1h1a2,2,0,0,0,2-2v-6A2,2,0,0,0,16.5,5.5Zm-2,11a1,1,0,0,1-1,1h-6a1,1,0,0,1-1-1v-6a1,1,0,0,1,1-1h1v4a2,2,0,0,0,2,2h4Zm0-2h-4a1,1,0,0,1-1-1v-4h4a1,1,0,0,1,1,1Zm3-1a1,1,0,0,1-1,1h-1v-4a2,2,0,0,0-2-2h-4v-1a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1Z"
    />
    <path
      stroke="none"
      fill={secondaryColor}
      d="M14.5,15.5v1a1,1,0,0,1-1,1h-6a1,1,0,0,1-1-1v-6a1,1,0,0,1,1-1h1v4a2,2,0,0,0,2,2Z"
    />
    <path
      stroke="none"
      fill={secondaryColor}
      d="M14.5,10.5v4h-4a1,1,0,0,1-1-1v-4h4A1,1,0,0,1,14.5,10.5Z"
    />
    <path
      stroke="none"
      fill={secondaryColor}
      d="M17.5,7.5v6a1,1,0,0,1-1,1h-1v-4a2,2,0,0,0-2-2h-4v-1a1,1,0,0,1,1-1h6A1,1,0,0,1,17.5,7.5Z"
    />
  </Fragment>
);

const LayersIntersect = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default LayersIntersect;
