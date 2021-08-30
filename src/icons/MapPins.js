import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M11.2,10.64a2.72,2.72,0,1,0-3.84,0h0l1.92,1.92Z" />
    <line x1="9.28" y1="8.72" x2="9.28" y2="8.73" />
    <path fill="none" d="M16.64,16.08a2.72,2.72,0,1,0-3.84,0h0L14.72,18Z" />
    <line x1="14.72" y1="14.13" x2="14.72" y2="14.19" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M11.56,6.44A3.2,3.2,0,0,0,9.28,5.5,3.16,3.16,0,0,0,7,6.44a3.21,3.21,0,0,0-1,2.28A3.17,3.17,0,0,0,7,11l1.92,1.93a.5.5,0,0,0,.35.14.54.54,0,0,0,.36-.14L11.56,11A3.23,3.23,0,0,0,11.56,6.44ZM9.78,8.73a.5.5,0,0,1-.5.5.51.51,0,0,1,0-1,.5.5,0,0,1,.5.5Z"
    />
    <path
      stroke="none"
      d="M17,11.88a3.22,3.22,0,0,0-4.55,4.55l1.92,1.92a.51.51,0,0,0,.36.15.47.47,0,0,0,.35-.15L17,16.43A3.21,3.21,0,0,0,17,11.88Zm-1.77,2.31a.51.51,0,0,1-.5.5.5.5,0,0,1-.5-.5.52.52,0,0,1,.5-.53.48.48,0,0,1,.5.47Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M11.2,10.64a2.72,2.72,0,1,0-3.84,0h0l1.92,1.92Z"
    />
    <line x1="9.28" y1="8.72" x2="9.28" y2="8.73" />
    <path
      fillOpacity=".2"
      d="M16.64,16.08a2.72,2.72,0,1,0-3.84,0h0L14.72,18Z"
    />
    <line x1="14.72" y1="14.13" x2="14.72" y2="14.19" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M11.2,10.64a2.72,2.72,0,1,0-3.84,0h0l1.92,1.92Z"
    />
    <line x1="9.28" y1="8.72" x2="9.28" y2="8.73" />
    <path
      fill={secondaryColor}
      d="M16.64,16.08a2.72,2.72,0,1,0-3.84,0h0L14.72,18Z"
    />
    <line x1="14.72" y1="14.13" x2="14.72" y2="14.19" />
  </Fragment>
);

const MapPins = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default MapPins;
