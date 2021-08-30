import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M7.33,18V7.33A1.34,1.34,0,0,1,8.67,6h6.66a1.34,1.34,0,0,1,1.34,1.33V18l-2-1.33L13.33,18,12,16.67,10.67,18,9.33,16.67,7.33,18"
    />
    <path
      fill="none"
      d="M14,13.33V12a1.33,1.33,0,0,0-1.33-1.33H10l1.33-1.34m0,2.67L10,10.67"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M15.33,5.5H8.67A1.84,1.84,0,0,0,6.83,7.33V18a.5.5,0,0,0,.27.44.49.49,0,0,0,.51,0l1.66-1.11,1,1a.5.5,0,0,0,.71,0l1-1,1,1a.5.5,0,0,0,.71,0l1-1,1.66,1.11a.54.54,0,0,0,.28.08.46.46,0,0,0,.23-.06.5.5,0,0,0,.27-.44V7.33A1.84,1.84,0,0,0,15.33,5.5Zm-.83,7.83a.5.5,0,0,1-1,0V12a.83.83,0,0,0-.83-.83H11.21l.48.48a.5.5,0,0,1,0,.7.5.5,0,0,1-.71,0L9.65,11l0,0a.56.56,0,0,1-.12-.26v-.09a.55.55,0,0,1,.14-.32h0L11,9a.5.5,0,0,1,.71,0,.51.51,0,0,1,0,.71l-.48.48h1.46A1.83,1.83,0,0,1,14.5,12Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M7.33,18V7.33A1.34,1.34,0,0,1,8.67,6h6.66a1.34,1.34,0,0,1,1.34,1.33V18l-2-1.33L13.33,18,12,16.67,10.67,18,9.33,16.67,7.33,18"
    />
    <path
      fill="none"
      d="M14,13.33V12a1.33,1.33,0,0,0-1.33-1.33H10l1.33-1.34m0,2.67L10,10.67"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M7.33,18V7.33A1.34,1.34,0,0,1,8.67,6h6.66a1.34,1.34,0,0,1,1.34,1.33V18l-2-1.33L13.33,18,12,16.67,10.67,18,9.33,16.67,7.33,18"
    />
    <path
      fill="none"
      d="M14,13.33V12a1.33,1.33,0,0,0-1.33-1.33H10l1.33-1.34m0,2.67L10,10.67"
    />
  </Fragment>
);

const ReceiptRefund = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default ReceiptRefund;
