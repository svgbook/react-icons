import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M10,12l1.33,1.33L14,10.67" />
    <path
      fill="none"
      d="M12,6a8,8,0,0,0,5.67,2,8,8,0,0,1-5.42,9.93L12,18A8,8,0,0,1,6.26,8.25c0-.09,0-.17.07-.25A8,8,0,0,0,12,6"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M18.15,7.86a.5.5,0,0,0-.51-.36,7.46,7.46,0,0,1-5.31-1.87.49.49,0,0,0-.66,0A7.5,7.5,0,0,1,6.36,7.5a.48.48,0,0,0-.51.36l-.07.26a8.5,8.5,0,0,0,6.09,10.36l.13,0,.13,0,.26-.07A8.51,8.51,0,0,0,18.15,7.86ZM14.35,11l-2.66,2.67a.52.52,0,0,1-.36.14.5.5,0,0,1-.35-.14L9.65,12.35a.49.49,0,0,1,.7-.7l1,1,2.32-2.32a.5.5,0,0,1,.7,0A.5.5,0,0,1,14.35,11Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M12,6a8,8,0,0,0,5.67,2,8,8,0,0,1-5.42,9.93L12,18A8,8,0,0,1,6.26,8.25c0-.09,0-.17.07-.25A8,8,0,0,0,12,6"
    />
    <path fill="none" d="M10,12l1.33,1.33L14,10.67" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M12,6a8,8,0,0,0,5.67,2,8,8,0,0,1-5.42,9.93L12,18A8,8,0,0,1,6.26,8.25c0-.09,0-.17.07-.25A8,8,0,0,0,12,6"
    />
    <path fill="none" d="M10,12l1.33,1.33L14,10.67" />
  </Fragment>
);

const ShieldCheck = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default ShieldCheck;
