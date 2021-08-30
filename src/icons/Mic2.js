import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M12,6h0a1.89,1.89,0,0,1,1.89,1.89v3.16A1.89,1.89,0,0,1,12,13h0a1.89,1.89,0,0,1-1.89-1.9V7.89A1.89,1.89,0,0,1,12,6Z"
    />
    <path fill="none" d="M7.58,11.05a4.42,4.42,0,0,0,8.84,0" />
    <line x1="9.47" y1="18" x2="14.53" y2="18" />
    <line x1="12" y1="15.47" x2="12" y2="18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M12,6h0a1.89,1.89,0,0,1,1.89,1.89v3.16A1.89,1.89,0,0,1,12,13h0a1.89,1.89,0,0,1-1.89-1.9V7.89A1.89,1.89,0,0,1,12,6Z" />
    <path fill="none" d="M7.58,11.05a4.42,4.42,0,0,0,8.84,0" />
    <line x1="9.47" y1="18" x2="14.53" y2="18" />
    <line x1="12" y1="15.47" x2="12" y2="18" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M12,6h0a1.89,1.89,0,0,1,1.89,1.89v3.16A1.89,1.89,0,0,1,12,13h0a1.89,1.89,0,0,1-1.89-1.9V7.89A1.89,1.89,0,0,1,12,6Z"
    />
    <path fill="none" d="M7.58,11.05a4.42,4.42,0,0,0,8.84,0" />
    <line x1="9.47" y1="18" x2="14.53" y2="18" />
    <line x1="12" y1="15.47" x2="12" y2="18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M12,6h0a1.89,1.89,0,0,1,1.89,1.89v3.16A1.89,1.89,0,0,1,12,13h0a1.89,1.89,0,0,1-1.89-1.9V7.89A1.89,1.89,0,0,1,12,6Z"
    />
    <path fill="none" d="M7.58,11.05a4.42,4.42,0,0,0,8.84,0" />
    <line x1="9.47" y1="18" x2="14.53" y2="18" />
    <line x1="12" y1="15.47" x2="12" y2="18" />
  </Fragment>
);

const Mic2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Mic2;
