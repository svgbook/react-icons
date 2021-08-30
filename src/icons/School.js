import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="18" y1="13.8" x2="18" y2="10.2" />
    <polygon
      fill="none"
      points="18 10.2 15.6 11.16 12 12.6 8.4 11.16 6 10.2 12 7.8 18 10.2"
    />
    <path
      fill="none"
      d="M15.6,11.16V14.4c0,1-1.61,1.8-3.6,1.8s-3.6-.81-3.6-1.8V11.16L12,12.6Z"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="18" y1="13.8" x2="18" y2="10.2" />
    <polygon points="18 10.2 15.6 11.16 12 12.6 8.4 11.16 6 10.2 12 7.8 18 10.2" />
    <path d="M15.6,11.16V14.4c0,1-1.61,1.8-3.6,1.8s-3.6-.81-3.6-1.8V11.16L12,12.6Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line x1="18" y1="13.8" x2="18" y2="10.2" />
    <polygon
      fillOpacity=".2"
      points="18 10.2 15.6 11.16 12 12.6 8.4 11.16 6 10.2 12 7.8 18 10.2"
    />
    <path
      fillOpacity=".2"
      d="M15.6,11.16V14.4c0,1-1.61,1.8-3.6,1.8s-3.6-.81-3.6-1.8V11.16L12,12.6Z"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line x1="18" y1="13.8" x2="18" y2="10.2" />
    <polygon
      fill={secondaryColor}
      points="18 10.2 15.6 11.16 12 12.6 8.4 11.16 6 10.2 12 7.8 18 10.2"
    />
    <path
      fill={secondaryColor}
      d="M15.6,11.16V14.4c0,1-1.61,1.8-3.6,1.8s-3.6-.81-3.6-1.8V11.16L12,12.6Z"
    />
  </Fragment>
);

const School = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default School;
