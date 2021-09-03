import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M12,6a8,8,0,0,0,5.67,2,8,8,0,0,1-5.42,9.93L12,18A8,8,0,0,1,6.26,8.25c0-.09,0-.17.07-.25A8,8,0,0,0,12,6"
    />
    <circle fill="none" cx="12" cy="11.33" r="0.67" />
    <line x1="12" y1="12" x2="12" y2="13.67" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M18.15,7.86a.5.5,0,0,0-.51-.36,7.46,7.46,0,0,1-5.31-1.87.49.49,0,0,0-.66,0A7.5,7.5,0,0,1,6.36,7.5a.48.48,0,0,0-.51.36l-.07.26a8.5,8.5,0,0,0,6.09,10.36l.13,0,.13,0,.26-.07A8.51,8.51,0,0,0,18.15,7.86ZM12.5,12.38v1.29a.5.5,0,1,1-1,0V12.38a1.14,1.14,0,0,1-.67-1.05,1.17,1.17,0,0,1,2.34,0A1.14,1.14,0,0,1,12.5,12.38Z"
    />
    <path
      stroke="none"
      d="M12.17,11.33c0,.19-.34.19-.34,0a.17.17,0,0,1,.34,0Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M12,6a8,8,0,0,0,5.67,2,8,8,0,0,1-5.42,9.93L12,18A8,8,0,0,1,6.26,8.25c0-.09,0-.17.07-.25A8,8,0,0,0,12,6"
    />
    <circle fill="none" cx="12" cy="11.33" r="0.67" />
    <line x1="12" y1="12" x2="12" y2="13.67" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M12,6a8,8,0,0,0,5.67,2,8,8,0,0,1-5.42,9.93L12,18A8,8,0,0,1,6.26,8.25c0-.09,0-.17.07-.25A8,8,0,0,0,12,6"
    />
    <circle fill="none" cx="12" cy="11.33" r="0.67" />
    <line x1="12" y1="12" x2="12" y2="13.67" />
  </Fragment>
);

const ShieldLock = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default ShieldLock;
