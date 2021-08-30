import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M18,7.5v3a.76.76,0,0,1-.75.75H6.75A.76.76,0,0,1,6,10.5v-3a.76.76,0,0,1,.75-.75h10.5A.76.76,0,0,1,18,7.5Z"
    />
    <line x1="12" y1="14.25" x2="12" y2="17.25" />
    <line x1="13.5" y1="15.75" x2="10.5" y2="15.75" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M18,7.5v3a.76.76,0,0,1-.75.75H6.75A.76.76,0,0,1,6,10.5v-3a.76.76,0,0,1,.75-.75h10.5A.76.76,0,0,1,18,7.5Z" />
    <line x1="12" y1="14.25" x2="12" y2="17.25" />
    <line x1="13.5" y1="15.75" x2="10.5" y2="15.75" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M18,7.5v3a.76.76,0,0,1-.75.75H6.75A.76.76,0,0,1,6,10.5v-3a.76.76,0,0,1,.75-.75h10.5A.76.76,0,0,1,18,7.5Z"
    />
    <line x1="12" y1="14.25" x2="12" y2="17.25" />
    <line x1="13.5" y1="15.75" x2="10.5" y2="15.75" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M18,7.5v3a.76.76,0,0,1-.75.75H6.75A.76.76,0,0,1,6,10.5v-3a.76.76,0,0,1,.75-.75h10.5A.76.76,0,0,1,18,7.5Z"
    />
    <line stroke={secondaryColor} x1="12" y1="14.25" x2="12" y2="17.25" />
    <line stroke={secondaryColor} x1="13.5" y1="15.75" x2="10.5" y2="15.75" />
  </Fragment>
);

const RowInsertBottom = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default RowInsertBottom;
