import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path d="M6,6,18,18" />
    <path fill="none" d="M7.76,7.76a6,6,0,0,0,8.48,8.48Z" />
    <path fill="none" d="M17.36,14.7A6,6,0,0,0,9.3,6.64" />
    <path d="M14.66,12H16" />
    <path d="M12.66,14H14" />
    <path d="M12.66,16h.67" />
    <path d="M12.66,10h2.67" />
    <path d="M12.66,8h.67" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M17.36,15.2a.46.46,0,0,1-.23-.06.5.5,0,0,1-.22-.67,5.5,5.5,0,0,0-2.44-7.38,5.51,5.51,0,0,0-4.94,0,.5.5,0,0,1-.67-.22.49.49,0,0,1,.22-.67,6.49,6.49,0,0,1,8.72,8.72A.48.48,0,0,1,17.36,15.2Z"
    />
    <path
      stroke="none"
      d="M16,12.5H14.66a.5.5,0,0,1-.5-.5.51.51,0,0,1,.5-.5H16a.51.51,0,0,1,.5.5A.5.5,0,0,1,16,12.5Z"
    />
    <path
      stroke="none"
      d="M15.33,10.5H12.66a.5.5,0,0,1-.5-.5.51.51,0,0,1,.5-.5h2.67a.5.5,0,0,1,.5.5A.5.5,0,0,1,15.33,10.5Z"
    />
    <path
      stroke="none"
      d="M13.33,8.5h-.67a.5.5,0,0,1-.5-.5.51.51,0,0,1,.5-.5h.67a.5.5,0,0,1,.5.5A.5.5,0,0,1,13.33,8.5Z"
    />
    <path
      stroke="none"
      d="M18.35,17.65l-1.76-1.76-2.18-2.17a.47.47,0,0,1,.09.28.5.5,0,0,1-.5.5H12.66a.5.5,0,0,1,0-1H14a.54.54,0,0,1,.28.08L8.11,7.41,6.35,5.65a.5.5,0,0,0-.7,0,.5.5,0,0,0,0,.71L7.07,7.78a6.49,6.49,0,0,0,9.15,9.15l1.42,1.42a.51.51,0,0,0,.36.15.5.5,0,0,0,.35-.85Zm-5-1.15h-.67a.5.5,0,0,1,0-1h.67a.5.5,0,0,1,0,1Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path d="M6,6,18,18" />
    <path fillOpacity=".2" d="M7.76,7.76a6,6,0,0,0,8.48,8.48Z" />
    <path fill="none" d="M17.36,14.7A6,6,0,0,0,9.3,6.64" />
    <path d="M14.66,12H16" />
    <path d="M12.66,14H14" />
    <path d="M12.66,16h.67" />
    <path d="M12.66,10h2.67" />
    <path d="M12.66,8h.67" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path d="M6,6,18,18" />
    <path fill={secondaryColor} d="M7.76,7.76a6,6,0,0,0,8.48,8.48Z" />
    <path fill="none" d="M17.36,14.7A6,6,0,0,0,9.3,6.64" />
    <path d="M14.66,12H16" />
    <path d="M12.66,14H14" />
    <path d="M12.66,16h.67" />
    <path d="M12.66,10h2.67" />
    <path d="M12.66,8h.67" />
  </Fragment>
);

const ShadowOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default ShadowOff;
