import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path d="M7.33,7h2M12,7h6" />
    <path d="M6,10.33h7.33m2.67,0h.67" />
    <path d="M7.33,13.67h3.34m2.66,0H18" />
    <path d="M6,17h6m2.67,0h2" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M7.33,7h2M12,7h6" />
    <path d="M6,10.33h7.33m2.67,0h.67" />
    <path d="M7.33,13.67h3.34m2.66,0H18" />
    <path d="M6,17h6m2.67,0h2" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path d="M7.33,7h2M12,7h6" />
    <path strokeOpacity=".2" d="M6,10.33h7.33m2.67,0h.67" />
    <path d="M7.33,13.67h3.34m2.66,0H18" />
    <path strokeOpacity=".2" d="M6,17h6m2.67,0h2" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path d="M7.33,7h2M12,7h6" />
    <path stroke={secondaryColor} d="M6,10.33h7.33m2.67,0h.67" />
    <path d="M7.33,13.67h3.34m2.66,0H18" />
    <path stroke={secondaryColor} d="M6,17h6m2.67,0h2" />
  </Fragment>
);

const Mist = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Mist;
