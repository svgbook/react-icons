import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="12" cy="12" r="6" />
    <line x1="10" y1="10" x2="10.01" y2="10" />
    <line x1="14" y1="10" x2="14.01" y2="10" />
    <path fill="none" d="M9.33,12.67a2.67,2.67,0,0,0,5.34,0m0,0H9.33" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M12,5.5A6.5,6.5,0,1,0,18.5,12,6.51,6.51,0,0,0,12,5.5Zm2,4h0a.5.5,0,1,1-.51.5A.5.5,0,0,1,14,9.5Zm-4,0h0a.5.5,0,1,1-.51.5A.5.5,0,0,1,10,9.5Zm2,6.33a3.17,3.17,0,0,1-3.17-3.16.5.5,0,0,1,.5-.5h5.34a.5.5,0,0,1,.5.5A3.17,3.17,0,0,1,12,15.83Z"
    />
    <path stroke="none" d="M14.11,13.17a2.17,2.17,0,0,1-4.22,0Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fillOpacity=".2" cx="12" cy="12" r="6" />
    <line x1="10" y1="10" x2="10.01" y2="10" />
    <line x1="14" y1="10" x2="14.01" y2="10" />
    <path fill="none" d="M9.33,12.67a2.67,2.67,0,0,0,5.34,0m0,0H9.33" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx="12" cy="12" r="6" />
    <line x1="10" y1="10" x2="10.01" y2="10" />
    <line x1="14" y1="10" x2="14.01" y2="10" />
    <path fill="none" d="M9.33,12.67a2.67,2.67,0,0,0,5.34,0m0,0H9.33" />
  </Fragment>
);

const EmojiHappy = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default EmojiHappy;
