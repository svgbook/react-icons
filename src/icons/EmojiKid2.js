import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="12" cy="12" r="6" />
    <line fill="none" x1="10" y1="10.67" x2="10.01" y2="10.67" />
    <line fill="none" x1="14" y1="10.67" x2="14.01" y2="10.67" />
    <path fill="none" d="M10.33,14a2.33,2.33,0,0,0,3.3,0l0,0" />
    <path fill="none" d="M12,6a1.34,1.34,0,0,0,0,2.67" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M12,5.5a.5.5,0,0,1,0,1,.83.83,0,0,0-.83.83.84.84,0,0,0,.83.84.5.5,0,0,1,.5.5.5.5,0,0,1-.5.5,1.84,1.84,0,0,1-1.83-1.84,1.61,1.61,0,0,1,.09-.54A1.81,1.81,0,0,1,12,5.5,6.5,6.5,0,1,0,18.5,12,6.51,6.51,0,0,0,12,5.5ZM9.5,10.67a.5.5,0,0,1,.5-.5h0a.5.5,0,0,1,.5.5.51.51,0,0,1-1,0ZM14,14.35a3,3,0,0,1-2,.84,2.77,2.77,0,0,1-2-.84.5.5,0,1,1,.71-.7,1.83,1.83,0,0,0,2.59,0,.52.52,0,0,1,.72,0A.48.48,0,0,1,14,14.35Zm0-3.18a.51.51,0,0,1-.51-.5.5.5,0,0,1,.5-.5h0a.5.5,0,0,1,.5.5A.51.51,0,0,1,14,11.17Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fillOpacity=".2" cx="12" cy="12" r="6" />
    <line fill="none" x1="10" y1="10.67" x2="10.01" y2="10.67" />
    <line fill="none" x1="14" y1="10.67" x2="14.01" y2="10.67" />
    <path fill="none" d="M10.33,14a2.33,2.33,0,0,0,3.3,0l0,0" />
    <path fill="none" d="M12,6a1.34,1.34,0,0,0,0,2.67" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx="12" cy="12" r="6" />
    <line fill="none" x1="10" y1="10.67" x2="10.01" y2="10.67" />
    <line fill="none" x1="14" y1="10.67" x2="14.01" y2="10.67" />
    <path fill="none" d="M10.33,14a2.33,2.33,0,0,0,3.3,0l0,0" />
    <path fill="none" d="M12,6a1.34,1.34,0,0,0,0,2.67" />
  </Fragment>
);

const EmojiKid2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default EmojiKid2;
