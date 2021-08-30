import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M18,11.33V14a1.33,1.33,0,0,1-1.33,1.33H15.33V14A1.33,1.33,0,0,0,14,12.67H10A1.34,1.34,0,0,0,8.67,14v1.33H7.33A1.33,1.33,0,0,1,6,14V11.33A1.34,1.34,0,0,1,7.33,10h9.34A1.34,1.34,0,0,1,18,11.33Z"
    />
    <path
      fill="none"
      d="M15.33,10V7.33A1.33,1.33,0,0,0,14,6H10A1.33,1.33,0,0,0,8.67,7.33V10"
    />
    <rect fill="none" x="8.67" y="12.67" width="6.67" height="5.33" rx="1.33" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M18,11.33V14a1.33,1.33,0,0,1-1.33,1.33H15.33V14A1.33,1.33,0,0,0,14,12.67H10A1.34,1.34,0,0,0,8.67,14v1.33H7.33A1.33,1.33,0,0,1,6,14V11.33A1.34,1.34,0,0,1,7.33,10h9.34A1.34,1.34,0,0,1,18,11.33Z" />
    <path
      fill="none"
      d="M15.33,10V7.33A1.33,1.33,0,0,0,14,6H10A1.33,1.33,0,0,0,8.67,7.33V10"
    />
    <rect fill="none" x="8.67" y="12.67" width="6.67" height="5.33" rx="1.33" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M18,11.33V14a1.33,1.33,0,0,1-1.33,1.33H15.33V14A1.33,1.33,0,0,0,14,12.67H10A1.34,1.34,0,0,0,8.67,14v1.33H7.33A1.33,1.33,0,0,1,6,14V11.33A1.34,1.34,0,0,1,7.33,10h9.34A1.34,1.34,0,0,1,18,11.33Z"
    />
    <path
      fill="none"
      d="M15.33,10V7.33A1.33,1.33,0,0,0,14,6H10A1.33,1.33,0,0,0,8.67,7.33V10"
    />
    <rect fill="none" x="8.67" y="12.67" width="6.67" height="5.33" rx="1.33" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M18,11.33V14a1.33,1.33,0,0,1-1.33,1.33H15.33V14A1.33,1.33,0,0,0,14,12.67H10A1.34,1.34,0,0,0,8.67,14v1.33H7.33A1.33,1.33,0,0,1,6,14V11.33A1.34,1.34,0,0,1,7.33,10h9.34A1.34,1.34,0,0,1,18,11.33Z"
    />
    <path
      fill="none"
      d="M15.33,10V7.33A1.33,1.33,0,0,0,14,6H10A1.33,1.33,0,0,0,8.67,7.33V10"
    />
    <rect fill="none" x="8.67" y="12.67" width="6.67" height="5.33" rx="1.33" />
  </Fragment>
);

const Printer = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Printer;
