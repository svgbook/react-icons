import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M12,6h0a3,3,0,0,1,3,3v6a3,3,0,0,1-3,3h0a3,3,0,0,1-3-3V9A3,3,0,0,1,12,6Z"
    />
    <circle fill="none" cx="12" cy="9" r="0.6" />
    <circle fill="none" cx="12" cy="12" r="0.6" />
    <circle fill="none" cx="12" cy="15" r="0.6" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M12,5.5A3.5,3.5,0,0,0,8.5,9v6a3.5,3.5,0,0,0,7,0V9A3.5,3.5,0,0,0,12,5.5Zm0,10.6A1.1,1.1,0,1,1,13.1,15,1.1,1.1,0,0,1,12,16.1Zm0-3A1.1,1.1,0,1,1,13.1,12,1.1,1.1,0,0,1,12,13.1Zm0-3A1.1,1.1,0,1,1,13.1,9,1.1,1.1,0,0,1,12,10.1Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M12,6h0a3,3,0,0,1,3,3v6a3,3,0,0,1-3,3h0a3,3,0,0,1-3-3V9A3,3,0,0,1,12,6Z"
    />
    <circle fill="none" strokeOpacity=".2" cx="12" cy="9" r="0.6" />
    <circle fill="none" strokeOpacity=".2" cx="12" cy="12" r="0.6" />
    <circle fill="none" strokeOpacity=".2" cx="12" cy="15" r="0.6" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      d="M12,6h0a3,3,0,0,1,3,3v6a3,3,0,0,1-3,3h0a3,3,0,0,1-3-3V9A3,3,0,0,1,12,6Z"
    />
    <circle fill="none" stroke={secondaryColor} cx="12" cy="9" r="0.6" />
    <circle fill="none" stroke={secondaryColor} cx="12" cy="12" r="0.6" />
    <circle fill="none" stroke={secondaryColor} cx="12" cy="15" r="0.6" />
  </Fragment>
);

const TrafficLights = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default TrafficLights;
