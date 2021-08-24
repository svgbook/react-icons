import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M15.47,13.24l-2.21-3.15a2.53,2.53,0,1,1,4.42-2.45,2.49,2.49,0,0,1,0,2.45l-2.21,3.15"
    />
    <line x1="15.47" y1="8.82" x2="15.47" y2="8.83" />
    <polyline
      fill="none"
      points="17.37 14.51 17.37 15.77 13.58 17.66 9.79 15.77"
    />
    <line x1="10.74" y1="8.03" x2="9.79" y2="7.56" />
    <polygon
      fill="none"
      points="9.79 7.56 9.79 15.77 6 17.66 6 9.45 9.79 7.56"
    />
    <line x1="13.58" y1="14.51" x2="13.58" y2="17.66" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M15.47,13.24l-2.21-3.15a2.53,2.53,0,1,1,4.42-2.45,2.49,2.49,0,0,1,0,2.45l-2.21,3.15" />
    <line x1="15.47" y1="8.82" x2="15.47" y2="8.83" />
    <polyline
      fill="none"
      points="17.37 14.51 17.37 15.77 13.58 17.66 9.79 15.77"
    />
    <line x1="10.74" y1="8.03" x2="9.79" y2="7.56" />
    <polygon
      fill="none"
      points="9.79 7.56 9.79 15.77 6 17.66 6 9.45 9.79 7.56"
    />
    <line x1="13.58" y1="14.51" x2="13.58" y2="17.66" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M15.47,13.24l-2.21-3.15a2.53,2.53,0,1,1,4.42-2.45,2.49,2.49,0,0,1,0,2.45l-2.21,3.15"
    />
    <line x1="15.47" y1="8.82" x2="15.47" y2="8.83" />
    <polyline
      fill="none"
      points="17.37 14.51 17.37 15.77 13.58 17.66 9.79 15.77"
    />
    <line x1="10.74" y1="8.03" x2="9.79" y2="7.56" />
    <polygon
      fill="none"
      points="9.79 7.56 9.79 15.77 6 17.66 6 9.45 9.79 7.56"
    />
    <line x1="13.58" y1="14.51" x2="13.58" y2="17.66" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M15.47,13.24l-2.21-3.15a2.53,2.53,0,1,1,4.42-2.45,2.49,2.49,0,0,1,0,2.45l-2.21,3.15"
    />
    <line x1="15.47" y1="8.82" x2="15.47" y2="8.83" />
    <polyline
      fill="none"
      points="17.37 14.51 17.37 15.77 13.58 17.66 9.79 15.77"
    />
    <line x1="10.74" y1="8.03" x2="9.79" y2="7.56" />
    <polygon
      fill="none"
      points="9.79 7.56 9.79 15.77 6 17.66 6 9.45 9.79 7.56"
    />
    <line x1="13.58" y1="14.51" x2="13.58" y2="17.66" />
  </Fragment>
);

const Map2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Map2;
