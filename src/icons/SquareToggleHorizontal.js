import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M16.8,8.4V12H7.2V8.4A1.2,1.2,0,0,1,8.4,7.2h7.2A1.2,1.2,0,0,1,16.8,8.4Z"
    />
    <line x1="16.8" y1="13.2" x2="16.8" y2="12" />
    <line x1="7.2" y1="13.2" x2="7.2" y2="12" />
    <path fill="none" d="M15.6,16.8a1.2,1.2,0,0,0,1.2-1.2" />
    <path fill="none" d="M7.2,15.6a1.2,1.2,0,0,0,1.2,1.2" />
    <line x1="13.2" y1="16.8" x2="10.8" y2="16.8" />
    <path d="M18,12H6" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M16.8,8.4V12H7.2V8.4A1.2,1.2,0,0,1,8.4,7.2h7.2A1.2,1.2,0,0,1,16.8,8.4Z" />
    <line x1="16.8" y1="13.2" x2="16.8" y2="12" />
    <line x1="7.2" y1="13.2" x2="7.2" y2="12" />
    <path fill="none" d="M15.6,16.8a1.2,1.2,0,0,0,1.2-1.2" />
    <path fill="none" d="M7.2,15.6a1.2,1.2,0,0,0,1.2,1.2" />
    <line x1="13.2" y1="16.8" x2="10.8" y2="16.8" />
    <path d="M18,12H6" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M16.8,8.4V12H7.2V8.4A1.2,1.2,0,0,1,8.4,7.2h7.2A1.2,1.2,0,0,1,16.8,8.4Z"
    />
    <line x1="16.8" y1="13.2" x2="16.8" y2="12" />
    <line x1="7.2" y1="13.2" x2="7.2" y2="12" />
    <path fill="none" d="M15.6,16.8a1.2,1.2,0,0,0,1.2-1.2" />
    <path fill="none" d="M7.2,15.6a1.2,1.2,0,0,0,1.2,1.2" />
    <line x1="13.2" y1="16.8" x2="10.8" y2="16.8" />
    <path d="M18,12H6" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M16.8,8.4V12H7.2V8.4A1.2,1.2,0,0,1,8.4,7.2h7.2A1.2,1.2,0,0,1,16.8,8.4Z"
    />
    <line x1="16.8" y1="13.2" x2="16.8" y2="12" />
    <line x1="7.2" y1="13.2" x2="7.2" y2="12" />
    <path fill="none" d="M15.6,16.8a1.2,1.2,0,0,0,1.2-1.2" />
    <path fill="none" d="M7.2,15.6a1.2,1.2,0,0,0,1.2,1.2" />
    <line x1="13.2" y1="16.8" x2="10.8" y2="16.8" />
    <path d="M18,12H6" />
  </Fragment>
);

const SquareToggleHorizontal = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default SquareToggleHorizontal;
