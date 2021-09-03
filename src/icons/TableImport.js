import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M18,10v5.33a1.34,1.34,0,0,1-1.33,1.34h-4M7.33,12.33V10m4,3.67V10"
    />
    <path fill="none" d="M11.33,6v4h-4V7.33A1.34,1.34,0,0,1,8.67,6Z" />
    <path fill="none" d="M18,7.33V10H11.33V6h5.34A1.34,1.34,0,0,1,18,7.33Z" />
    <line x1="6" y1="16" x2="10.67" y2="16" />
    <polyline fill="none" points="8.67 14 10.67 16 8.67 18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M18,10v5.33a1.34,1.34,0,0,1-1.33,1.34h-4M7.33,12.33V10m4,3.67V10"
    />
    <path d="M11.33,6v4h-4V7.33A1.34,1.34,0,0,1,8.67,6Z" />
    <path d="M18,7.33V10H11.33V6h5.34A1.34,1.34,0,0,1,18,7.33Z" />
    <line x1="6" y1="16" x2="10.67" y2="16" />
    <polyline fill="none" points="8.67 14 10.67 16 8.67 18" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M18,10v5.33a1.34,1.34,0,0,1-1.33,1.34h-4M7.33,12.33V10m4,3.67V10"
    />
    <path fillOpacity=".2" d="M11.33,6v4h-4V7.33A1.34,1.34,0,0,1,8.67,6Z" />
    <path
      fillOpacity=".2"
      d="M18,7.33V10H11.33V6h5.34A1.34,1.34,0,0,1,18,7.33Z"
    />
    <line strokeOpacity=".2" x1="6" y1="16" x2="10.67" y2="16" />
    <polyline
      fill="none"
      strokeOpacity=".2"
      points="8.67 14 10.67 16 8.67 18"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      d="M18,10v5.33a1.34,1.34,0,0,1-1.33,1.34h-4M7.33,12.33V10m4,3.67V10"
    />
    <path
      fill={secondaryColor}
      d="M11.33,6v4h-4V7.33A1.34,1.34,0,0,1,8.67,6Z"
    />
    <path
      fill={secondaryColor}
      d="M18,7.33V10H11.33V6h5.34A1.34,1.34,0,0,1,18,7.33Z"
    />
    <line stroke={secondaryColor} x1="6" y1="16" x2="10.67" y2="16" />
    <polyline
      fill="none"
      stroke={secondaryColor}
      points="8.67 14 10.67 16 8.67 18"
    />
  </Fragment>
);

const TableImport = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default TableImport;
