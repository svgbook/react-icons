import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <polygon
      fill="none"
      points="7.33 7.33 7.33 18 9.33 16.67 10.67 18 12 16.67 13.33 18 14.67 16.67 16.67 18 16.67 16.67 7.33 7.33"
    />
    <path fill="none" d="M8.67,6h6.66a1.34,1.34,0,0,1,1.34,1.33V14" />
    <line x1="11.33" y1="8.67" x2="14" y2="8.67" />
    <line x1="10" y1="11.33" x2="11.33" y2="11.33" />
    <line x1="12.67" y1="14" x2="14" y2="14" />
    <line x1="14" y1="11.33" x2="14" y2="11.34" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <polygon points="7.33 7.33 7.33 18 9.33 16.67 10.67 18 12 16.67 13.33 18 14.67 16.67 16.67 18 16.67 16.67 7.33 7.33" />
    <path fill="none" d="M8.67,6h6.66a1.34,1.34,0,0,1,1.34,1.33V14" />
    <line x1="11.33" y1="8.67" x2="14" y2="8.67" />
    <line x1="10" y1="11.33" x2="11.33" y2="11.33" />
    <line x1="12.67" y1="14" x2="14" y2="14" />
    <line x1="14" y1="11.33" x2="14" y2="11.34" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <polygon
      fillOpacity=".2"
      points="7.33 7.33 7.33 18 9.33 16.67 10.67 18 12 16.67 13.33 18 14.67 16.67 16.67 18 16.67 16.67 7.33 7.33"
    />
    <path fill="none" d="M8.67,6h6.66a1.34,1.34,0,0,1,1.34,1.33V14" />
    <line x1="11.33" y1="8.67" x2="14" y2="8.67" />
    <line x1="10" y1="11.33" x2="11.33" y2="11.33" />
    <line x1="12.67" y1="14" x2="14" y2="14" />
    <line x1="14" y1="11.33" x2="14" y2="11.34" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <polygon
      fill={secondaryColor}
      points="7.33 7.33 7.33 18 9.33 16.67 10.67 18 12 16.67 13.33 18 14.67 16.67 16.67 18 16.67 16.67 7.33 7.33"
    />
    <path fill="none" d="M8.67,6h6.66a1.34,1.34,0,0,1,1.34,1.33V14" />
    <line x1="11.33" y1="8.67" x2="14" y2="8.67" />
    <line x1="10" y1="11.33" x2="11.33" y2="11.33" />
    <line x1="12.67" y1="14" x2="14" y2="14" />
    <line x1="14" y1="11.33" x2="14" y2="11.34" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Fragment>
);

const ReceiptOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default ReceiptOff;
