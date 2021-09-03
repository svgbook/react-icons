import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="12" cy="12" r="6" />
    <path d="M12.67,12H16" />
    <path d="M12.67,14h2.66" />
    <path d="M12.67,16h.66" />
    <path d="M12.67,10h2.66" />
    <path d="M12.67,8h.66" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M12,5.5A6.5,6.5,0,1,0,18.5,12,6.51,6.51,0,0,0,12,5.5Zm.67,2h.66a.5.5,0,0,1,0,1h-.66a.5.5,0,0,1,0-1Zm0,2h2.66a.5.5,0,0,1,0,1H12.67a.5.5,0,0,1,0-1Zm.66,7h-.66a.5.5,0,0,1,0-1h.66a.5.5,0,0,1,0,1Zm2-2H12.67a.5.5,0,0,1,0-1h2.66a.5.5,0,0,1,0,1Zm.67-2H12.67a.5.5,0,0,1,0-1H16a.5.5,0,0,1,0,1Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fillOpacity=".2" cx="12" cy="12" r="6" />
    <path d="M12.67,12H16" />
    <path d="M12.67,14h2.66" />
    <path d="M12.67,16h.66" />
    <path d="M12.67,10h2.66" />
    <path d="M12.67,8h.66" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx="12" cy="12" r="6" />
    <path d="M12.67,12H16" />
    <path d="M12.67,14h2.66" />
    <path d="M12.67,16h.66" />
    <path d="M12.67,10h2.66" />
    <path d="M12.67,8h.66" />
  </Fragment>
);

const Shadow = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Shadow;
