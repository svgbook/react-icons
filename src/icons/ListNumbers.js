import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path d="M11.25,7.5H18" />
    <path d="M11.25,12H18" />
    <path d="M12,16.5h6" />
    <path
      fill="none"
      d="M6,15a1.5,1.5,0,0,1,3,0c0,.44-.37.75-.75,1.13L6,18H9"
    />
    <path fill="none" d="M7.5,10.5V6L6,7.5" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M11.25,7.5H18" />
    <path d="M11.25,12H18" />
    <path d="M12,16.5h6" />
    <path
      fill="none"
      d="M6,15a1.5,1.5,0,0,1,3,0c0,.44-.37.75-.75,1.13L6,18H9"
    />
    <path fill="none" d="M7.5,10.5V6L6,7.5" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path d="M11.25,7.5H18" />
    <path d="M11.25,12H18" />
    <path d="M12,16.5h6" />
    <path
      fill="none"
      strokeOpacity=".2"
      d="M6,15a1.5,1.5,0,0,1,3,0c0,.44-.37.75-.75,1.13L6,18H9"
    />
    <path fill="none" strokeOpacity=".2" d="M7.5,10.5V6L6,7.5" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path d="M11.25,7.5H18" />
    <path d="M11.25,12H18" />
    <path d="M12,16.5h6" />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M6,15a1.5,1.5,0,0,1,3,0c0,.44-.37.75-.75,1.13L6,18H9"
    />
    <path fill="none" stroke={secondaryColor} d="M7.5,10.5V6L6,7.5" />
  </Fragment>
);

const ListNumbers = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default ListNumbers;
