import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M9.3,12.9h3l2.4-2.4H8.4m.9,2.4,2.4-2.4" />
    <path fill="none" d="M12.6,8.1h1.2l.9,1.8,1.2,2.4" />
    <circle fill="none" cx="7.8" cy="14.1" r="1.8" />
    <circle fill="none" cx="16.2" cy="14.1" r="1.8" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M9.3,12.9h3l2.4-2.4H8.4m.9,2.4,2.4-2.4" />
    <path fill="none" d="M12.6,8.1h1.2l.9,1.8,1.2,2.4" />
    <circle cx="7.8" cy="14.1" r="1.8" />
    <circle cx="16.2" cy="14.1" r="1.8" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M9.3,12.9h3l2.4-2.4H8.4m.9,2.4,2.4-2.4" />
    <path fill="none" d="M12.6,8.1h1.2l.9,1.8,1.2,2.4" />
    <circle fillOpacity=".2" cx="7.8" cy="14.1" r="1.8" />
    <circle fillOpacity=".2" cx="16.2" cy="14.1" r="1.8" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M9.3,12.9h3l2.4-2.4H8.4m.9,2.4,2.4-2.4" />
    <path fill="none" d="M12.6,8.1h1.2l.9,1.8,1.2,2.4" />
    <circle fill={secondaryColor} cx="7.8" cy="14.1" r="1.8" />
    <circle fill={secondaryColor} cx="16.2" cy="14.1" r="1.8" />
  </Fragment>
);

const Motorbike = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Motorbike;
