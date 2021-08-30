import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="12" cy="12" r="6" />
    <line x1="10" y1="10.67" x2="10.01" y2="10.67" />
    <line x1="14" y1="10.67" x2="14.01" y2="10.67" />
    <path
      fill="none"
      d="M10.67,13.33v1.34a1.33,1.33,0,1,0,2.66,0V13.33m1,0H9.67"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M12,5.5A6.5,6.5,0,1,0,18.5,12,6.51,6.51,0,0,0,12,5.5Zm2,4.67h0a.5.5,0,0,1,.5.5.51.51,0,0,1-1,0A.5.5,0,0,1,14,10.17Zm-4,0h0a.5.5,0,0,1,.5.5.51.51,0,0,1-1,0A.5.5,0,0,1,10,10.17Zm4.33,3.66h-.5v.84a1.83,1.83,0,1,1-3.66,0v-.84h-.5a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h4.66a.5.5,0,0,1,.5.5A.5.5,0,0,1,14.33,13.83Z"
    />
    <path stroke="none" d="M12.83,13.83v.84a.83.83,0,1,1-1.66,0v-.84Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fillOpacity=".2" cx="12" cy="12" r="6" />
    <line x1="10" y1="10.67" x2="10.01" y2="10.67" />
    <line x1="14" y1="10.67" x2="14.01" y2="10.67" />
    <path
      fill="none"
      d="M10.67,13.33v1.34a1.33,1.33,0,1,0,2.66,0V13.33m1,0H9.67"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx="12" cy="12" r="6" />
    <line x1="10" y1="10.67" x2="10.01" y2="10.67" />
    <line x1="14" y1="10.67" x2="14.01" y2="10.67" />
    <path
      fill="none"
      d="M10.67,13.33v1.34a1.33,1.33,0,1,0,2.66,0V13.33m1,0H9.67"
    />
  </Fragment>
);

const EmojiPlayful = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default EmojiPlayful;
