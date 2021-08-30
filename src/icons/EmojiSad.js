import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="12" cy="12" r="6" />
    <line x1="10" y1="10.67" x2="10.01" y2="10.67" />
    <line x1="14" y1="10.67" x2="14.01" y2="10.67" />
    <path fill="none" d="M10.33,14.17a2.34,2.34,0,0,1,3.3,0l0,0" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M12,5.5A6.5,6.5,0,1,0,18.5,12,6.51,6.51,0,0,0,12,5.5ZM9.5,10.67a.5.5,0,0,1,.5-.5h0a.5.5,0,0,1,.5.5.51.51,0,0,1-1,0ZM14,14.48a.5.5,0,0,1-.71,0A1.9,1.9,0,0,0,12,14a1.79,1.79,0,0,0-1.29.55.51.51,0,0,1-.36.15.5.5,0,0,1-.35-.15.49.49,0,0,1,0-.7,2.82,2.82,0,0,1,4,0A.49.49,0,0,1,14,14.48Zm0-3.31a.51.51,0,0,1-.51-.5.5.5,0,0,1,.5-.5h0a.5.5,0,0,1,.5.5A.51.51,0,0,1,14,11.17Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fillOpacity=".2" cx="12" cy="12" r="6" />
    <line x1="10" y1="10.67" x2="10.01" y2="10.67" />
    <line x1="14" y1="10.67" x2="14.01" y2="10.67" />
    <path fill="none" d="M10.33,14.17a2.34,2.34,0,0,1,3.3,0l0,0" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx="12" cy="12" r="6" />
    <line x1="10" y1="10.67" x2="10.01" y2="10.67" />
    <line x1="14" y1="10.67" x2="14.01" y2="10.67" />
    <path fill="none" d="M10.33,14.17a2.34,2.34,0,0,1,3.3,0l0,0" />
  </Fragment>
);

const EmojiSad = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default EmojiSad;
