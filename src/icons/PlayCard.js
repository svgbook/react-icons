import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <rect fill="none" x="7.33" y="6" width="9.33" height="12" rx="1.33" />
    <line x1="9.33" y1="8" x2="9.34" y2="8" />
    <line x1="14.67" y1="16" x2="14.67" y2="16" />
    <path fill="none" d="M12,14.67,10,12l2-2.67L14,12Z" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M15.33,5.5H8.67A1.84,1.84,0,0,0,6.83,7.33v9.34A1.84,1.84,0,0,0,8.67,18.5h6.66a1.84,1.84,0,0,0,1.84-1.83V7.33A1.84,1.84,0,0,0,15.33,5.5ZM8.84,8a.49.49,0,0,1,.49-.5h0a.5.5,0,1,1-.5.5ZM12,15.17a.51.51,0,0,1-.4-.2l-2-2.67a.51.51,0,0,1,0-.6L11.6,9a.52.52,0,0,1,.8,0l2,2.67a.51.51,0,0,1,0,.6L12.4,15A.51.51,0,0,1,12,15.17Zm2.67,1.33a.5.5,0,0,1-.5-.5.5.5,0,1,1,.5.5Z"
    />
    <polygon
      stroke="none"
      points="13.38 12 12 13.83 10.62 12 12 10.17 13.38 12"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <rect fillOpacity=".2" x="7.33" y="6" width="9.33" height="12" rx="1.33" />
    <line x1="9.33" y1="8" x2="9.34" y2="8" />
    <line x1="14.67" y1="16" x2="14.67" y2="16" />
    <path fill="none" d="M12,14.67,10,12l2-2.67L14,12Z" />
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
    <line x1="9.33" y1="8" x2="9.34" y2="8" />
    <line x1="14.67" y1="16" x2="14.67" y2="16" />
    <path fill="none" d="M12,14.67,10,12l2-2.67L14,12Z" />
  </Fragment>
);

const PlayCard = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default PlayCard;
