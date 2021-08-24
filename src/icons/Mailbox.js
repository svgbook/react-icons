import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M18,14v4H10.67V13.67a2.34,2.34,0,0,0-2.34-2.34h7A2.67,2.67,0,0,1,18,14Z"
    />
    <path fill="none" d="M10.67,13.67V18H6V13.67a2.34,2.34,0,1,1,4.67,0Z" />
    <polygon
      fill="none"
      points="16 7.33 14.67 8.67 12 8.67 12 6 14.67 6 16 7.33"
    />
    <line x1="12" y1="11.33" x2="12" y2="8.67" />
    <path fill="none" d="M8,14h.67" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M18,14v4H10.67V13.67a2.34,2.34,0,0,0-2.34-2.34h7A2.67,2.67,0,0,1,18,14Z" />
    <path fill="none" d="M10.67,13.67V18H6V13.67a2.34,2.34,0,1,1,4.67,0Z" />
    <polygon points="16 7.33 14.67 8.67 12 8.67 12 6 14.67 6 16 7.33" />
    <line x1="12" y1="11.33" x2="12" y2="8.67" />
    <path fill="none" d="M8,14h.67" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M18,14v4H10.67V13.67a2.34,2.34,0,0,0-2.34-2.34h7A2.67,2.67,0,0,1,18,14Z"
    />
    <path
      fillOpacity=".2"
      d="M10.67,13.67V18H6V13.67a2.34,2.34,0,1,1,4.67,0Z"
    />
    <polygon
      fillOpacity=".2"
      points="16 7.33 14.67 8.67 12 8.67 12 6 14.67 6 16 7.33"
    />
    <line x1="12" y1="11.33" x2="12" y2="8.67" />
    <path fill="none" d="M8,14h.67" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M18,14v4H10.67V13.67a2.34,2.34,0,0,0-2.34-2.34h7A2.67,2.67,0,0,1,18,14Z"
    />
    <path
      fill={secondaryColor}
      d="M10.67,13.67V18H6V13.67a2.34,2.34,0,1,1,4.67,0Z"
    />
    <polygon
      fill={secondaryColor}
      points="16 7.33 14.67 8.67 12 8.67 12 6 14.67 6 16 7.33"
    />
    <line x1="12" y1="11.33" x2="12" y2="8.67" />
    <path fill="none" d="M8,14h.67" />
  </Fragment>
);

const Mailbox = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Mailbox;
