import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="12" cy="17.37" r="0.63" />
    <path
      fill="none"
      d="M6.32,11.69l3.47,3.47a3.16,3.16,0,0,1,4.42,0l3.47-3.47A7.59,7.59,0,0,0,7,11c-.23.21-.46.44-.67.67"
    />
    <line x1="12" y1="17.37" x2="12" y2="8.54" />
    <path fill="none" d="M7,8.54A2.68,2.68,0,0,1,7.21,7.4" />
    <path fill="none" d="M8.85,6.08a2.45,2.45,0,0,1,1.26,0" />
    <path fill="none" d="M12,8.54a2.53,2.53,0,0,0-.25-1.14" />
    <path fill="none" d="M12,8.54a2.53,2.53,0,0,1,.25-1.14" />
    <path fill="none" d="M13.89,6.08a2.45,2.45,0,0,1,1.26,0" />
    <path fill="none" d="M17.05,8.54a2.68,2.68,0,0,0-.26-1.14" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <circle fill="none" cx="12" cy="17.37" r="0.63" />
    <path d="M6.32,11.69l3.47,3.47a3.16,3.16,0,0,1,4.42,0l3.47-3.47A7.59,7.59,0,0,0,7,11c-.23.21-.46.44-.67.67" />
    <line x1="12" y1="17.37" x2="12" y2="8.54" />
    <path fill="none" d="M7,8.54A2.68,2.68,0,0,1,7.21,7.4" />
    <path fill="none" d="M8.85,6.08a2.45,2.45,0,0,1,1.26,0" />
    <path fill="none" d="M12,8.54a2.53,2.53,0,0,0-.25-1.14" />
    <path fill="none" d="M12,8.54a2.53,2.53,0,0,1,.25-1.14" />
    <path fill="none" d="M13.89,6.08a2.45,2.45,0,0,1,1.26,0" />
    <path fill="none" d="M17.05,8.54a2.68,2.68,0,0,0-.26-1.14" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fill="none" cx="12" cy="17.37" r="0.63" />
    <path
      fillOpacity=".2"
      d="M6.32,11.69l3.47,3.47a3.16,3.16,0,0,1,4.42,0l3.47-3.47A7.59,7.59,0,0,0,7,11c-.23.21-.46.44-.67.67"
    />
    <line x1="12" y1="17.37" x2="12" y2="8.54" />
    <path fill="none" d="M7,8.54A2.68,2.68,0,0,1,7.21,7.4" />
    <path fill="none" d="M8.85,6.08a2.45,2.45,0,0,1,1.26,0" />
    <path fill="none" d="M12,8.54a2.53,2.53,0,0,0-.25-1.14" />
    <path fill="none" d="M12,8.54a2.53,2.53,0,0,1,.25-1.14" />
    <path fill="none" d="M13.89,6.08a2.45,2.45,0,0,1,1.26,0" />
    <path fill="none" d="M17.05,8.54a2.68,2.68,0,0,0-.26-1.14" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill="none" cx="12" cy="17.37" r="0.63" />
    <path
      fill={secondaryColor}
      d="M6.32,11.69l3.47,3.47a3.16,3.16,0,0,1,4.42,0l3.47-3.47A7.59,7.59,0,0,0,7,11c-.23.21-.46.44-.67.67"
    />
    <line x1="12" y1="17.37" x2="12" y2="8.54" />
    <path fill="none" d="M7,8.54A2.68,2.68,0,0,1,7.21,7.4" />
    <path fill="none" d="M8.85,6.08a2.45,2.45,0,0,1,1.26,0" />
    <path fill="none" d="M12,8.54a2.53,2.53,0,0,0-.25-1.14" />
    <path fill="none" d="M12,8.54a2.53,2.53,0,0,1,.25-1.14" />
    <path fill="none" d="M13.89,6.08a2.45,2.45,0,0,1,1.26,0" />
    <path fill="none" d="M17.05,8.54a2.68,2.68,0,0,0-.26-1.14" />
  </Fragment>
);

const WiperWash = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default WiperWash;
