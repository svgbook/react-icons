import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="12" cy="12" r="6" />
    <line x1="10" y1="10" x2="10.01" y2="10" />
    <line x1="14" y1="10" x2="14.01" y2="10" />
    <circle fill="none" cx="12" cy="14" r="1.33" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M12,5.5A6.5,6.5,0,1,0,18.5,12,6.51,6.51,0,0,0,12,5.5ZM9.5,10a.5.5,0,0,1,.5-.5h0a.5.5,0,1,1-.51.5ZM12,15.83A1.83,1.83,0,1,1,13.83,14,1.83,1.83,0,0,1,12,15.83Zm2-5.33a.5.5,0,0,1-.51-.5.5.5,0,0,1,.5-.5h0a.5.5,0,0,1,0,1Z"
    />
    <path
      stroke="none"
      d="M12.83,14a.83.83,0,1,1-.83-.83A.83.83,0,0,1,12.83,14Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fillOpacity=".2" cx="12" cy="12" r="6" />
    <line x1="10" y1="10" x2="10.01" y2="10" />
    <line x1="14" y1="10" x2="14.01" y2="10" />
    <circle fill="none" cx="12" cy="14" r="1.33" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx="12" cy="12" r="6" />
    <line x1="10" y1="10" x2="10.01" y2="10" />
    <line x1="14" y1="10" x2="14.01" y2="10" />
    <circle fill="none" cx="12" cy="14" r="1.33" />
  </Fragment>
);

const EmojiSurprised = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default EmojiSurprised;
