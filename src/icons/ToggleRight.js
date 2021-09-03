import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M9.6,8.4h4.8A3.6,3.6,0,0,1,18,12h0a3.6,3.6,0,0,1-3.6,3.6H9.6A3.6,3.6,0,0,1,6,12H6A3.6,3.6,0,0,1,9.6,8.4Z"
    />
    <circle fill="none" cx="14.4" cy="12" r="1.2" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M14.4,7.9H9.6a4.1,4.1,0,0,0,0,8.2h4.8a4.1,4.1,0,0,0,0-8.2Zm0,5.8A1.7,1.7,0,1,1,16.1,12,1.7,1.7,0,0,1,14.4,13.7Z"
    />
    <path stroke="none" d="M15.1,12a.7.7,0,1,1-.7-.7A.7.7,0,0,1,15.1,12Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M9.6,8.4h4.8A3.6,3.6,0,0,1,18,12h0a3.6,3.6,0,0,1-3.6,3.6H9.6A3.6,3.6,0,0,1,6,12H6A3.6,3.6,0,0,1,9.6,8.4Z"
    />
    <circle fill="none" cx="14.4" cy="12" r="1.2" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M9.6,8.4h4.8A3.6,3.6,0,0,1,18,12h0a3.6,3.6,0,0,1-3.6,3.6H9.6A3.6,3.6,0,0,1,6,12H6A3.6,3.6,0,0,1,9.6,8.4Z"
    />
    <circle fill="none" cx="14.4" cy="12" r="1.2" />
  </Fragment>
);

const ToggleRight = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default ToggleRight;
