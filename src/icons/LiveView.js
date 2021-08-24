import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M12,16.5,9.38,12.75a3,3,0,1,1,5.25,0L12,16.5" />
    <line x1="12" y1="11.25" x2="12" y2="11.26" />
    <path fill="none" d="M6,9V7.5A1.5,1.5,0,0,1,7.5,6H9" />
    <path fill="none" d="M6,15v1.5A1.5,1.5,0,0,0,7.5,18H9" />
    <path fill="none" d="M15,6h1.5A1.5,1.5,0,0,1,18,7.5V9" />
    <path fill="none" d="M15,18h1.5A1.5,1.5,0,0,0,18,16.5V15" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M12,16.5,9.38,12.75a3,3,0,1,1,5.25,0L12,16.5" />
    <line x1="12" y1="11.25" x2="12" y2="11.26" />
    <path fill="none" d="M6,9V7.5A1.5,1.5,0,0,1,7.5,6H9" />
    <path fill="none" d="M6,15v1.5A1.5,1.5,0,0,0,7.5,18H9" />
    <path fill="none" d="M15,6h1.5A1.5,1.5,0,0,1,18,7.5V9" />
    <path fill="none" d="M15,18h1.5A1.5,1.5,0,0,0,18,16.5V15" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fillOpacity=".2" d="M12,16.5,9.38,12.75a3,3,0,1,1,5.25,0L12,16.5" />
    <line x1="12" y1="11.25" x2="12" y2="11.26" />
    <path fill="none" d="M6,9V7.5A1.5,1.5,0,0,1,7.5,6H9" />
    <path fill="none" d="M6,15v1.5A1.5,1.5,0,0,0,7.5,18H9" />
    <path fill="none" d="M15,6h1.5A1.5,1.5,0,0,1,18,7.5V9" />
    <path fill="none" d="M15,18h1.5A1.5,1.5,0,0,0,18,16.5V15" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M12,16.5,9.38,12.75a3,3,0,1,1,5.25,0L12,16.5"
    />
    <line x1="12" y1="11.25" x2="12" y2="11.26" />
    <path fill="none" d="M6,9V7.5A1.5,1.5,0,0,1,7.5,6H9" />
    <path fill="none" d="M6,15v1.5A1.5,1.5,0,0,0,7.5,18H9" />
    <path fill="none" d="M15,6h1.5A1.5,1.5,0,0,1,18,7.5V9" />
    <path fill="none" d="M15,18h1.5A1.5,1.5,0,0,0,18,16.5V15" />
  </Fragment>
);

const LiveView = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default LiveView;
