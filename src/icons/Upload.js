import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M6.35,15.18v1.41A1.41,1.41,0,0,0,7.76,18h8.48a1.41,1.41,0,0,0,1.41-1.41V15.18"
    />
    <line x1="12" y1="6" x2="12" y2="14.47" />
    <polyline fill="none" points="8.47 9.53 12 6 15.53 9.53" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M6.35,15.18v1.41A1.41,1.41,0,0,0,7.76,18h8.48a1.41,1.41,0,0,0,1.41-1.41V15.18"
    />
    <line x1="12" y1="6" x2="12" y2="14.47" />
    <polyline fill="none" points="8.47 9.53 12 6 15.53 9.53" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      strokeOpacity=".2"
      d="M6.35,15.18v1.41A1.41,1.41,0,0,0,7.76,18h8.48a1.41,1.41,0,0,0,1.41-1.41V15.18"
    />
    <line x1="12" y1="6" x2="12" y2="14.47" />
    <polyline fill="none" points="8.47 9.53 12 6 15.53 9.53" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      d="M6.35,15.18v1.41A1.41,1.41,0,0,0,7.76,18h8.48a1.41,1.41,0,0,0,1.41-1.41V15.18"
    />
    <line stroke={secondaryColor} x1="12" y1="6" x2="12" y2="14.47" />
    <polyline
      fill="none"
      stroke={secondaryColor}
      points="8.47 9.53 12 6 15.53 9.53"
    />
  </Fragment>
);

const Upload = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Upload;
