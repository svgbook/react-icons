import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <polygon
      fill="none"
      points="14 10.13 10 10.13 11.25 6.38 12.75 6.38 14 10.13"
    />
    <polygon
      fill="none"
      points="15.25 13.87 8.75 13.87 10 10.13 14 10.13 15.25 13.87"
    />
    <polygon
      fill="none"
      points="16.5 17.62 7.5 17.62 8.75 13.87 15.25 13.87 16.5 17.62"
    />
    <line x1="6" y1="17.62" x2="18" y2="17.62" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M18.5,17.62a.5.5,0,0,1-.5.5H6a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5H7.15l.91-2.74h7.88l.91,2.74H18A.5.5,0,0,1,18.5,17.62Z"
    />
    <polygon
      stroke="none"
      points="15.61 13.38 8.39 13.38 9.31 10.62 14.69 10.62 15.61 13.38"
    />
    <path
      stroke="none"
      d="M14.35,9.62H9.65l1.13-3.4a.47.47,0,0,1,.47-.34h1.5a.47.47,0,0,1,.47.34Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <polygon
      fillOpacity=".2"
      points="14 10.13 10 10.13 11.25 6.38 12.75 6.38 14 10.13"
    />
    <polygon
      fillOpacity=".2"
      points="15.25 13.87 8.75 13.87 10 10.13 14 10.13 15.25 13.87"
    />
    <polygon
      fillOpacity=".2"
      points="16.5 17.62 7.5 17.62 8.75 13.87 15.25 13.87 16.5 17.62"
    />
    <line x1="6" y1="17.62" x2="18" y2="17.62" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <polygon
      fill={secondaryColor}
      points="14 10.13 10 10.13 11.25 6.38 12.75 6.38 14 10.13"
    />
    <polygon
      fill={secondaryColor}
      points="15.25 13.87 8.75 13.87 10 10.13 14 10.13 15.25 13.87"
    />
    <polygon
      fill={secondaryColor}
      points="16.5 17.62 7.5 17.62 8.75 13.87 15.25 13.87 16.5 17.62"
    />
    <line x1="6" y1="17.62" x2="18" y2="17.62" />
  </Fragment>
);

const TrafficCone = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default TrafficCone;
