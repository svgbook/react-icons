import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M12.55,12.87a1.89,1.89,0,0,1-2.36-1.27,1.67,1.67,0,0,1-.08-.55v-.63Z"
    />
    <path
      fill="none"
      d="M10.11,7.89a1.89,1.89,0,0,1,3.78,0v3.16a1.44,1.44,0,0,1-.08.55Z"
    />
    <path
      fill="none"
      d="M7.58,11.05a4.43,4.43,0,0,0,6.85,3.7m1.26-1.27a4.36,4.36,0,0,0,.73-2.43"
    />
    <line x1="9.47" y1="18" x2="14.53" y2="18" />
    <line x1="12" y1="15.47" x2="12" y2="18" />
    <line x1="6.32" y1="6.63" x2="17.68" y2="18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M12.55,12.87a1.89,1.89,0,0,1-2.36-1.27,1.67,1.67,0,0,1-.08-.55v-.63Z" />
    <path d="M10.11,7.89a1.89,1.89,0,0,1,3.78,0v3.16a1.44,1.44,0,0,1-.08.55Z" />
    <path
      fill="none"
      d="M7.58,11.05a4.43,4.43,0,0,0,6.85,3.7m1.26-1.27a4.36,4.36,0,0,0,.73-2.43"
    />
    <line x1="9.47" y1="18" x2="14.53" y2="18" />
    <line x1="12" y1="15.47" x2="12" y2="18" />
    <line x1="6.32" y1="6.63" x2="17.68" y2="18" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M12.55,12.87a1.89,1.89,0,0,1-2.36-1.27,1.67,1.67,0,0,1-.08-.55v-.63Z"
    />
    <path
      fillOpacity=".2"
      d="M10.11,7.89a1.89,1.89,0,0,1,3.78,0v3.16a1.44,1.44,0,0,1-.08.55Z"
    />
    <path
      fill="none"
      d="M7.58,11.05a4.43,4.43,0,0,0,6.85,3.7m1.26-1.27a4.36,4.36,0,0,0,.73-2.43"
    />
    <line x1="9.47" y1="18" x2="14.53" y2="18" />
    <line x1="12" y1="15.47" x2="12" y2="18" />
    <line x1="6.32" y1="6.63" x2="17.68" y2="18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M12.55,12.87a1.89,1.89,0,0,1-2.36-1.27,1.67,1.67,0,0,1-.08-.55v-.63Z"
    />
    <path
      fill={secondaryColor}
      d="M10.11,7.89a1.89,1.89,0,0,1,3.78,0v3.16a1.44,1.44,0,0,1-.08.55Z"
    />
    <path
      fill="none"
      d="M7.58,11.05a4.43,4.43,0,0,0,6.85,3.7m1.26-1.27a4.36,4.36,0,0,0,.73-2.43"
    />
    <line x1="9.47" y1="18" x2="14.53" y2="18" />
    <line x1="12" y1="15.47" x2="12" y2="18" />
    <line x1="6.32" y1="6.63" x2="17.68" y2="18" />
  </Fragment>
);

const MicOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default MicOff;
