import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="12" cy="12" r="6" />
    <path fill="none" d="M12,6a3,3,0,0,0,0,6,3,3,0,0,1,0,6h0" />
    <circle cx="12" cy="9" r="0.33" />
    <circle cx="12" cy="15" r="0.33" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M12,12.59A4.14,4.14,0,0,1,7.86,8.45a4,4,0,0,1,.41-1.77A6.5,6.5,0,0,0,12,18.5l.34,0A3,3,0,0,0,12,12.59Zm0,3.94a1,1,0,1,1,1-1A1,1,0,0,1,12,16.53Z"
    />
    <path
      stroke="none"
      d="M12,5.5l-.34,0A3,3,0,0,0,12,11.41a4.14,4.14,0,0,1,4.14,4.14,4,4,0,0,1-.41,1.77A6.5,6.5,0,0,0,12,5.5Zm0,3.94a1,1,0,1,1,1-1A1,1,0,0,1,12,9.44Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fillOpacity=".2" cx="12" cy="12" r="6" />
    <path fill="none" d="M12,6a3,3,0,0,0,0,6,3,3,0,0,1,0,6h0" />
    <circle cx="12" cy="9" r="0.33" />
    <circle cx="12" cy="15" r="0.33" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx="12" cy="12" r="6" />
    <path fill="none" d="M12,6a3,3,0,0,0,0,6,3,3,0,0,1,0,6h0" />
    <circle cx="12" cy="9" r="0.33" />
    <circle cx="12" cy="15" r="0.33" />
  </Fragment>
);

const YinYang = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default YinYang;
