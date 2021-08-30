import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M6,16.5v-3a.76.76,0,0,1,.75-.75h10.5a.76.76,0,0,1,.75.75v3a.76.76,0,0,1-.75.75H6.75A.76.76,0,0,1,6,16.5Z"
    />
    <path d="M12,9.75v-3" />
    <line x1="10.5" y1="8.25" x2="13.5" y2="8.25" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M6,16.5v-3a.76.76,0,0,1,.75-.75h10.5a.76.76,0,0,1,.75.75v3a.76.76,0,0,1-.75.75H6.75A.76.76,0,0,1,6,16.5Z" />
    <path d="M12,9.75v-3" />
    <line x1="10.5" y1="8.25" x2="13.5" y2="8.25" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M6,16.5v-3a.76.76,0,0,1,.75-.75h10.5a.76.76,0,0,1,.75.75v3a.76.76,0,0,1-.75.75H6.75A.76.76,0,0,1,6,16.5Z"
    />
    <path d="M12,9.75v-3" />
    <line x1="10.5" y1="8.25" x2="13.5" y2="8.25" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M6,16.5v-3a.76.76,0,0,1,.75-.75h10.5a.76.76,0,0,1,.75.75v3a.76.76,0,0,1-.75.75H6.75A.76.76,0,0,1,6,16.5Z"
    />
    <path stroke={secondaryColor} d="M12,9.75v-3" />
    <line stroke={secondaryColor} x1="10.5" y1="8.25" x2="13.5" y2="8.25" />
  </Fragment>
);

const RowInsertTop = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default RowInsertTop;
