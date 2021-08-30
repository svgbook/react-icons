import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M7.33,18V7.33A1.34,1.34,0,0,1,8.67,6h6.66a1.34,1.34,0,0,1,1.34,1.33V18l-2-1.33L13.33,18,12,16.67,10.67,18,9.33,16.67,7.33,18"
    />
    <line x1="10" y1="13.33" x2="14" y2="9.33" />
    <circle cx="10.33" cy="9.67" r="0.33" />
    <circle cx="13.67" cy="13" r="0.33" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M15.33,5.5H8.67A1.84,1.84,0,0,0,6.83,7.33V18a.5.5,0,0,0,.27.44.49.49,0,0,0,.51,0l1.66-1.11,1,1a.5.5,0,0,0,.71,0l1-1,1,1a.5.5,0,0,0,.71,0l1-1,1.66,1.11a.54.54,0,0,0,.28.08.46.46,0,0,0,.23-.06.5.5,0,0,0,.27-.44V7.33A1.84,1.84,0,0,0,15.33,5.5Zm-5,3.33a.85.85,0,0,1,.84.84.84.84,0,0,1-.84.83.83.83,0,0,1-.83-.83A.84.84,0,0,1,10.33,8.83Zm3.34,5a.83.83,0,1,1,0-1.66.83.83,0,1,1,0,1.66Zm.68-4.14-4,4a.5.5,0,1,1-.7-.71l4-4a.48.48,0,0,1,.7,0A.5.5,0,0,1,14.35,9.69Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M7.33,18V7.33A1.34,1.34,0,0,1,8.67,6h6.66a1.34,1.34,0,0,1,1.34,1.33V18l-2-1.33L13.33,18,12,16.67,10.67,18,9.33,16.67,7.33,18"
    />
    <line x1="10" y1="13.33" x2="14" y2="9.33" />
    <circle cx="10.33" cy="9.67" r="0.33" />
    <circle cx="13.67" cy="13" r="0.33" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M7.33,18V7.33A1.34,1.34,0,0,1,8.67,6h6.66a1.34,1.34,0,0,1,1.34,1.33V18l-2-1.33L13.33,18,12,16.67,10.67,18,9.33,16.67,7.33,18"
    />
    <line x1="10" y1="13.33" x2="14" y2="9.33" />
    <circle cx="10.33" cy="9.67" r="0.33" />
    <circle cx="13.67" cy="13" r="0.33" />
  </Fragment>
);

const ReceiptTax = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default ReceiptTax;
