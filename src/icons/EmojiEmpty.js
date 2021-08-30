import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="12" cy="12" r="6" />
    <line x1="10" y1="10.67" x2="10.01" y2="10.67" />
    <line x1="14" y1="10.67" x2="14.01" y2="10.67" />
    <line x1="10" y1="14" x2="14" y2="14" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M12,5.5A6.5,6.5,0,1,0,18.5,12,6.51,6.51,0,0,0,12,5.5Zm-2,4.67h0a.5.5,0,0,1,.5.5.51.51,0,0,1-1,0A.5.5,0,0,1,10,10.17Zm4,4.33H10a.5.5,0,0,1,0-1h4a.5.5,0,0,1,0,1Zm0-3.33a.51.51,0,0,1-.51-.5.5.5,0,0,1,.5-.5h0a.5.5,0,0,1,.5.5A.51.51,0,0,1,14,11.17Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fillOpacity=".2" cx="12" cy="12" r="6" />
    <line x1="10" y1="10.67" x2="10.01" y2="10.67" />
    <line x1="14" y1="10.67" x2="14.01" y2="10.67" />
    <line x1="10" y1="14" x2="14" y2="14" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx="12" cy="12" r="6" />
    <line x1="10" y1="10.67" x2="10.01" y2="10.67" />
    <line x1="14" y1="10.67" x2="14.01" y2="10.67" />
    <line x1="10" y1="14" x2="14" y2="14" />
  </Fragment>
);

const EmojiEmpty = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default EmojiEmpty;
