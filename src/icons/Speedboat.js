import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M18,11.05,16,14a1.89,1.89,0,0,1-1.58.85H6l1-2.53h3a2.53,2.53,0,0,0,.94-.18l2.24-.89a2.56,2.56,0,0,1,1-.19Z"
    />
    <path
      fill="none"
      d="M14.21,11.05h-.14a2.56,2.56,0,0,0-1,.19l-2.24.89a2.53,2.53,0,0,1-.94.18h-2l1-3.15H13Z"
    />
    <line x1="8.84" y1="9.16" x2="7.89" y2="9.16" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M18,11.05,16,14a1.89,1.89,0,0,1-1.58.85H6l1-2.53h3a2.53,2.53,0,0,0,.94-.18l2.24-.89a2.56,2.56,0,0,1,1-.19Z" />
    <path
      fill="none"
      d="M14.21,11.05h-.14a2.56,2.56,0,0,0-1,.19l-2.24.89a2.53,2.53,0,0,1-.94.18h-2l1-3.15H13Z"
    />
    <line x1="8.84" y1="9.16" x2="7.89" y2="9.16" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M18,11.05,16,14a1.89,1.89,0,0,1-1.58.85H6l1-2.53h3a2.53,2.53,0,0,0,.94-.18l2.24-.89a2.56,2.56,0,0,1,1-.19Z"
    />
    <path
      fillOpacity=".2"
      d="M14.21,11.05h-.14a2.56,2.56,0,0,0-1,.19l-2.24.89a2.53,2.53,0,0,1-.94.18h-2l1-3.15H13Z"
    />
    <line x1="8.84" y1="9.16" x2="7.89" y2="9.16" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M18,11.05,16,14a1.89,1.89,0,0,1-1.58.85H6l1-2.53h3a2.53,2.53,0,0,0,.94-.18l2.24-.89a2.56,2.56,0,0,1,1-.19Z"
    />
    <path
      fill={secondaryColor}
      d="M14.21,11.05h-.14a2.56,2.56,0,0,0-1,.19l-2.24.89a2.53,2.53,0,0,1-.94.18h-2l1-3.15H13Z"
    />
    <line x1="8.84" y1="9.16" x2="7.89" y2="9.16" />
  </Fragment>
);

const Speedboat = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Speedboat;
