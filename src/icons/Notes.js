import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <rect fill="none" x="7.33" y="6" width="9.33" height="12" rx="1.33" />
    <line x1="10" y1="8.67" x2="14" y2="8.67" />
    <line x1="10" y1="11.33" x2="14" y2="11.33" />
    <line x1="10" y1="14" x2="12.67" y2="14" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M15.33,5.5H8.67A1.84,1.84,0,0,0,6.83,7.33v9.34A1.84,1.84,0,0,0,8.67,18.5h6.66a1.84,1.84,0,0,0,1.84-1.83V7.33A1.84,1.84,0,0,0,15.33,5.5Zm-2.66,9H10a.5.5,0,0,1,0-1h2.67a.5.5,0,1,1,0,1ZM14,11.83H10a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h4a.5.5,0,0,1,.5.5A.5.5,0,0,1,14,11.83Zm0-2.66H10a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h4a.5.5,0,0,1,.5.5A.5.5,0,0,1,14,9.17Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <rect fillOpacity=".2" x="7.33" y="6" width="9.33" height="12" rx="1.33" />
    <line x1="10" y1="8.67" x2="14" y2="8.67" />
    <line x1="10" y1="11.33" x2="14" y2="11.33" />
    <line x1="10" y1="14" x2="12.67" y2="14" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <rect
      fill={secondaryColor}
      x="7.33"
      y="6"
      width="9.33"
      height="12"
      rx="1.33"
    />
    <line x1="10" y1="8.67" x2="14" y2="8.67" />
    <line x1="10" y1="11.33" x2="14" y2="11.33" />
    <line x1="10" y1="14" x2="12.67" y2="14" />
  </Fragment>
);

const Notes = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Notes;
