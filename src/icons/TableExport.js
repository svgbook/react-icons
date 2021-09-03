import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M11.33,16.67h-1M17,12.33V10" />
    <path fill="none" d="M10.33,10v6.67H7.67a1.34,1.34,0,0,1-1.34-1.34V10Z" />
    <path fill="none" d="M10.33,6v4h-4V7.33A1.34,1.34,0,0,1,7.67,6Z" />
    <path fill="none" d="M17,7.33V10H10.33V6h5.34A1.34,1.34,0,0,1,17,7.33Z" />
    <line x1="13" y1="16" x2="17.67" y2="16" />
    <polyline fill="none" points="15.67 14 17.67 16 15.67 18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M17.5,7.33V9.5H10.83v-4h4.84A1.83,1.83,0,0,1,17.5,7.33Z"
    />
    <path stroke="none" d="M9.83,5.5v4h-4V7.33A1.84,1.84,0,0,1,7.67,5.5Z" />
    <path
      stroke="none"
      d="M9.83,10.5v6.67H7.67a1.85,1.85,0,0,1-1.84-1.84V10.5Z"
    />
    <path
      stroke="none"
      d="M18.17,16a.43.43,0,0,1,0,.19h0a.42.42,0,0,1-.11.15l-2,2a.5.5,0,0,1-.35.15.51.51,0,0,1-.36-.15.5.5,0,0,1,0-.7l1.15-1.15H13a.5.5,0,0,1,0-1h3.46l-1.15-1.15a.5.5,0,0,1,0-.7.5.5,0,0,1,.71,0l2,2a.42.42,0,0,1,.11.15h0A.43.43,0,0,1,18.17,16Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M11.33,16.67h-1M17,12.33V10" />
    <path
      fillOpacity=".2"
      d="M10.33,10v6.67H7.67a1.34,1.34,0,0,1-1.34-1.34V10Z"
    />
    <path fillOpacity=".2" d="M10.33,6v4h-4V7.33A1.34,1.34,0,0,1,7.67,6Z" />
    <path
      fillOpacity=".2"
      d="M17,7.33V10H10.33V6h5.34A1.34,1.34,0,0,1,17,7.33Z"
    />
    <line strokeOpacity=".2" x1="13" y1="16" x2="17.67" y2="16" />
    <polyline
      fill="none"
      strokeOpacity=".2"
      points="15.67 14 17.67 16 15.67 18"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M11.33,16.67h-1M17,12.33V10" />
    <path
      fill={secondaryColor}
      d="M10.33,10v6.67H7.67a1.34,1.34,0,0,1-1.34-1.34V10Z"
    />
    <path
      fill={secondaryColor}
      d="M10.33,6v4h-4V7.33A1.34,1.34,0,0,1,7.67,6Z"
    />
    <path
      fill={secondaryColor}
      d="M17,7.33V10H10.33V6h5.34A1.34,1.34,0,0,1,17,7.33Z"
    />
    <line stroke={secondaryColor} x1="13" y1="16" x2="17.67" y2="16" />
    <polyline
      fill="none"
      stroke={secondaryColor}
      points="15.67 14 17.67 16 15.67 18"
    />
  </Fragment>
);

const TableExport = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default TableExport;
