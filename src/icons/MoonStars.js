import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M12,6h.26a5,5,0,0,0,5.28,8.29A6,6,0,1,1,12,6Z" />
    <path d="M15.33,6.67A1.34,1.34,0,0,0,16.67,8a1.33,1.33,0,0,0-1.34,1.33A1.32,1.32,0,0,0,14,8a1.33,1.33,0,0,0,1.33-1.34" />
    <path d="M16.67,11.34H18m-.67-.67V12" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M12,6h.26a5,5,0,0,0,5.28,8.29A6,6,0,1,1,12,6Z" />
    <path d="M15.33,6.67A1.34,1.34,0,0,0,16.67,8a1.33,1.33,0,0,0-1.34,1.33A1.32,1.32,0,0,0,14,8a1.33,1.33,0,0,0,1.33-1.34" />
    <path d="M16.67,11.34H18m-.67-.67V12" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fillOpacity=".2" d="M12,6h.26a5,5,0,0,0,5.28,8.29A6,6,0,1,1,12,6Z" />
    <path d="M15.33,6.67A1.34,1.34,0,0,0,16.67,8a1.33,1.33,0,0,0-1.34,1.33A1.32,1.32,0,0,0,14,8a1.33,1.33,0,0,0,1.33-1.34" />
    <path d="M16.67,11.34H18m-.67-.67V12" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M12,6h.26a5,5,0,0,0,5.28,8.29A6,6,0,1,1,12,6Z"
    />
    <path
      stroke={secondaryColor}
      d="M15.33,6.67A1.34,1.34,0,0,0,16.67,8a1.33,1.33,0,0,0-1.34,1.33A1.32,1.32,0,0,0,14,8a1.33,1.33,0,0,0,1.33-1.34"
    />
    <path d="M16.67,11.34H18m-.67-.67V12" />
  </Fragment>
);

const MoonStars = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default MoonStars;
