import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <rect fill="none" x="6" y="6" width="12" height="12" rx="1.5" />
    <line x1="6" y1="10.5" x2="18" y2="10.5" />
    <line x1="10.5" y1="6" x2="10.5" y2="18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path stroke="none" d="M10,5.5V10H5.5V7.5a2,2,0,0,1,2-2Z" />
    <path stroke="none" d="M18.5,7.5V10H11V5.5h5.5A2,2,0,0,1,18.5,7.5Z" />
    <path stroke="none" d="M18.5,11v5.5a2,2,0,0,1-2,2H11V11Z" />
    <path stroke="none" d="M10,11v7.5H7.5a2,2,0,0,1-2-2V11Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <rect fillOpacity=".2" x="6" y="6" width="12" height="12" rx="1.5" />
    <line x1="6" y1="10.5" x2="18" y2="10.5" />
    <line x1="10.5" y1="6" x2="10.5" y2="18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <rect fill={secondaryColor} x="6" y="6" width="12" height="12" rx="1.5" />
    <line x1="6" y1="10.5" x2="18" y2="10.5" />
    <line x1="10.5" y1="6" x2="10.5" y2="18" />
  </Fragment>
);

const Table = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Table;
