import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M14.67,12A2.68,2.68,0,0,0,12,9.33" />
    <path d="M6,12h.67M12,6v.67M17.33,12H18m-6,5.33V18M16.27,7.73l-.47.47M8.2,15.8l-.47.47" />
    <path fill="none" d="M10.12,10.12a2.67,2.67,0,1,0,3.77,3.77Z" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M14.67,12A2.68,2.68,0,0,0,12,9.33" />
    <path d="M6,12h.67M12,6v.67M17.33,12H18m-6,5.33V18M16.27,7.73l-.47.47M8.2,15.8l-.47.47" />
    <path d="M10.12,10.12a2.67,2.67,0,1,0,3.77,3.77Z" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M14.67,12A2.68,2.68,0,0,0,12,9.33" />
    <path
      strokeOpacity=".2"
      d="M6,12h.67M12,6v.67M17.33,12H18m-6,5.33V18M16.27,7.73l-.47.47M8.2,15.8l-.47.47"
    />
    <path fillOpacity=".2" d="M10.12,10.12a2.67,2.67,0,1,0,3.77,3.77Z" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M14.67,12A2.68,2.68,0,0,0,12,9.33" />
    <path
      stroke={secondaryColor}
      d="M6,12h.67M12,6v.67M17.33,12H18m-6,5.33V18M16.27,7.73l-.47.47M8.2,15.8l-.47.47"
    />
    <path fill={secondaryColor} d="M10.12,10.12a2.67,2.67,0,1,0,3.77,3.77Z" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Fragment>
);

const SunOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default SunOff;
