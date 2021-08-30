import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="13.33" cy="15.33" r="2" />
    <path fill="none" d="M15.33,15.33V6.67H18" />
    <path d="M12.67,7.33H6" />
    <line x1="6" y1="10" x2="12.67" y2="10" />
    <path d="M10,12.67H6" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <circle cx="13.33" cy="15.33" r="2" />
    <path fill="none" d="M15.33,15.33V6.67H18" />
    <path d="M12.67,7.33H6" />
    <line x1="6" y1="10" x2="12.67" y2="10" />
    <path d="M10,12.67H6" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fillOpacity=".2" cx="13.33" cy="15.33" r="2" />
    <path fill="none" d="M15.33,15.33V6.67H18" />
    <path strokeOpacity=".2" d="M12.67,7.33H6" />
    <line strokeOpacity=".2" x1="6" y1="10" x2="12.67" y2="10" />
    <path strokeOpacity=".2" d="M10,12.67H6" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx="13.33" cy="15.33" r="2" />
    <path fill="none" d="M15.33,15.33V6.67H18" />
    <path stroke={secondaryColor} d="M12.67,7.33H6" />
    <line stroke={secondaryColor} x1="6" y1="10" x2="12.67" y2="10" />
    <path stroke={secondaryColor} d="M10,12.67H6" />
  </Fragment>
);

const Playlist = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Playlist;
