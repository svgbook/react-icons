import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M12,7.2v9.6H8.4a1.2,1.2,0,0,1-1.2-1.2V8.4A1.2,1.2,0,0,1,8.4,7.2Z"
    />
    <line x1="13.2" y1="7.2" x2="12" y2="7.2" />
    <line x1="13.2" y1="16.8" x2="12" y2="16.8" />
    <path fill="none" d="M16.8,8.4a1.2,1.2,0,0,0-1.2-1.2" />
    <path fill="none" d="M15.6,16.8a1.2,1.2,0,0,0,1.2-1.2" />
    <line x1="16.8" y1="10.8" x2="16.8" y2="13.2" />
    <line x1="12" y1="6" x2="12" y2="18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M12,7.2v9.6H8.4a1.2,1.2,0,0,1-1.2-1.2V8.4A1.2,1.2,0,0,1,8.4,7.2Z" />
    <line x1="13.2" y1="7.2" x2="12" y2="7.2" />
    <line x1="13.2" y1="16.8" x2="12" y2="16.8" />
    <path fill="none" d="M16.8,8.4a1.2,1.2,0,0,0-1.2-1.2" />
    <path fill="none" d="M15.6,16.8a1.2,1.2,0,0,0,1.2-1.2" />
    <line x1="16.8" y1="10.8" x2="16.8" y2="13.2" />
    <line x1="12" y1="6" x2="12" y2="18" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M12,7.2v9.6H8.4a1.2,1.2,0,0,1-1.2-1.2V8.4A1.2,1.2,0,0,1,8.4,7.2Z"
    />
    <line x1="13.2" y1="7.2" x2="12" y2="7.2" />
    <line x1="13.2" y1="16.8" x2="12" y2="16.8" />
    <path fill="none" d="M16.8,8.4a1.2,1.2,0,0,0-1.2-1.2" />
    <path fill="none" d="M15.6,16.8a1.2,1.2,0,0,0,1.2-1.2" />
    <line x1="16.8" y1="10.8" x2="16.8" y2="13.2" />
    <line x1="12" y1="6" x2="12" y2="18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M12,7.2v9.6H8.4a1.2,1.2,0,0,1-1.2-1.2V8.4A1.2,1.2,0,0,1,8.4,7.2Z"
    />
    <line x1="13.2" y1="7.2" x2="12" y2="7.2" />
    <line x1="13.2" y1="16.8" x2="12" y2="16.8" />
    <path fill="none" d="M16.8,8.4a1.2,1.2,0,0,0-1.2-1.2" />
    <path fill="none" d="M15.6,16.8a1.2,1.2,0,0,0,1.2-1.2" />
    <line x1="16.8" y1="10.8" x2="16.8" y2="13.2" />
    <line x1="12" y1="6" x2="12" y2="18" />
  </Fragment>
);

const SquareToggle = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default SquareToggle;
