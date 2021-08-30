import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="12" cy="12" r="6" />
    <line x1="10" y1="10.67" x2="10.01" y2="10.67" />
    <line x1="14" y1="10.67" x2="14.01" y2="10.67" />
    <path fill="none" d="M10.33,14.67a6.65,6.65,0,0,1,4-1" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M12,5.5A6.5,6.5,0,1,0,18.5,12,6.51,6.51,0,0,0,12,5.5Zm2,4.67h0a.5.5,0,0,1,.5.5.51.51,0,0,1-1,0A.5.5,0,0,1,14,10.17Zm-4.5.5a.5.5,0,0,1,.5-.5h0a.5.5,0,0,1,.5.5.51.51,0,0,1-1,0Zm4.8,3.5a6,6,0,0,0-3.7.92.53.53,0,0,1-.27.08.5.5,0,0,1-.42-.24.49.49,0,0,1,.16-.69,7.06,7.06,0,0,1,4.3-1.07.5.5,0,0,1,.46.53A.52.52,0,0,1,14.3,14.17Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fillOpacity=".2" cx="12" cy="12" r="6" />
    <line x1="10" y1="10.67" x2="10.01" y2="10.67" />
    <line x1="14" y1="10.67" x2="14.01" y2="10.67" />
    <path fill="none" d="M10.33,14.67a6.65,6.65,0,0,1,4-1" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx="12" cy="12" r="6" />
    <line x1="10" y1="10.67" x2="10.01" y2="10.67" />
    <line x1="14" y1="10.67" x2="14.01" y2="10.67" />
    <path fill="none" d="M10.33,14.67a6.65,6.65,0,0,1,4-1" />
  </Fragment>
);

const EmojiConfused = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default EmojiConfused;
