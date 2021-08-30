import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M18,10.33a6,6,0,0,1-6,6,6,6,0,0,1,6-6Z" />
    <path fill="none" d="M12,16.34a6,6,0,0,1-6-6,6,6,0,0,1,6,6Z" />
    <path
      fill="none"
      d="M13.8,12.05A6,6,0,0,0,12,16.34a6,6,0,0,0-1.8-4.29A5.62,5.62,0,0,1,12,7.66,5.59,5.59,0,0,1,13.8,12.05Z"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M18,10.33a6,6,0,0,1-6,6,6,6,0,0,1,6-6Z" />
    <path d="M12,16.34a6,6,0,0,1-6-6,6,6,0,0,1,6,6Z" />
    <path d="M13.8,12.05A6,6,0,0,0,12,16.34a6,6,0,0,0-1.8-4.29A5.62,5.62,0,0,1,12,7.66,5.59,5.59,0,0,1,13.8,12.05Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fillOpacity=".2" d="M18,10.33a6,6,0,0,1-6,6,6,6,0,0,1,6-6Z" />
    <path fillOpacity=".2" d="M12,16.34a6,6,0,0,1-6-6,6,6,0,0,1,6,6Z" />
    <path
      fillOpacity=".2"
      d="M13.8,12.05A6,6,0,0,0,12,16.34a6,6,0,0,0-1.8-4.29A5.62,5.62,0,0,1,12,7.66,5.59,5.59,0,0,1,13.8,12.05Z"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill={secondaryColor} d="M18,10.33a6,6,0,0,1-6,6,6,6,0,0,1,6-6Z" />
    <path fill={secondaryColor} d="M12,16.34a6,6,0,0,1-6-6,6,6,0,0,1,6,6Z" />
    <path
      fill={secondaryColor}
      d="M13.8,12.05A6,6,0,0,0,12,16.34a6,6,0,0,0-1.8-4.29A5.62,5.62,0,0,1,12,7.66,5.59,5.59,0,0,1,13.8,12.05Z"
    />
  </Fragment>
);

const Plant2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Plant2;
