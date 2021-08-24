import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M15.16,11.69H8.84A1.25,1.25,0,0,0,7.58,13v3.79A1.25,1.25,0,0,0,8.84,18h6.32a1.25,1.25,0,0,0,1.26-1.26V13A1.25,1.25,0,0,0,15.16,11.69ZM12,15.47a.63.63,0,1,1,.63-.63A.63.63,0,0,1,12,15.47Z"
    />
    <path fill="none" d="M9.47,11.68V8.53a2.53,2.53,0,0,1,5.06,0" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M15.16,11.69H8.84A1.25,1.25,0,0,0,7.58,13v3.79A1.25,1.25,0,0,0,8.84,18h6.32a1.25,1.25,0,0,0,1.26-1.26V13A1.25,1.25,0,0,0,15.16,11.69ZM12,15.47a.63.63,0,1,1,.63-.63A.63.63,0,0,1,12,15.47Z" />
    <path fill="none" d="M9.47,11.68V8.53a2.53,2.53,0,0,1,5.06,0" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M15.16,11.69H8.84A1.25,1.25,0,0,0,7.58,13v3.79A1.25,1.25,0,0,0,8.84,18h6.32a1.25,1.25,0,0,0,1.26-1.26V13A1.25,1.25,0,0,0,15.16,11.69ZM12,15.47a.63.63,0,1,1,.63-.63A.63.63,0,0,1,12,15.47Z"
    />
    <path fill="none" d="M9.47,11.68V8.53a2.53,2.53,0,0,1,5.06,0" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M15.16,11.69H8.84A1.25,1.25,0,0,0,7.58,13v3.79A1.25,1.25,0,0,0,8.84,18h6.32a1.25,1.25,0,0,0,1.26-1.26V13A1.25,1.25,0,0,0,15.16,11.69ZM12,15.47a.63.63,0,1,1,.63-.63A.63.63,0,0,1,12,15.47Z"
    />
    <path fill="none" d="M9.47,11.68V8.53a2.53,2.53,0,0,1,5.06,0" />
  </Fragment>
);

const LockOpen = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default LockOpen;
