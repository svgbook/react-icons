import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M14.33,10.67V7.33c0-.92.42-1.33,1.34-1.33S17,6.41,17,7.33v3.34m0-2H14.33"
    />
    <path fill="none" d="M17,18H14.33L17,13.33H14.33" />
    <path fill="none" d="M11,10,9,8,7,10" />
    <path d="M9,8v8" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M14.33,10.67V7.33c0-.92.42-1.33,1.34-1.33S17,6.41,17,7.33v3.34m0-2H14.33"
    />
    <path fill="none" d="M17,18H14.33L17,13.33H14.33" />
    <path fill="none" d="M11,10,9,8,7,10" />
    <path d="M9,8v8" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      strokeOpacity=".2"
      d="M14.33,10.67V7.33c0-.92.42-1.33,1.34-1.33S17,6.41,17,7.33v3.34m0-2H14.33"
    />
    <path fill="none" strokeOpacity=".2" d="M17,18H14.33L17,13.33H14.33" />
    <path fill="none" d="M11,10,9,8,7,10" />
    <path d="M9,8v8" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      d="M14.33,10.67V7.33c0-.92.42-1.33,1.34-1.33S17,6.41,17,7.33v3.34m0-2H14.33"
    />
    <path fill="none" d="M17,18H14.33L17,13.33H14.33" />
    <path fill="none" stroke={secondaryColor} d="M11,10,9,8,7,10" />
    <path stroke={secondaryColor} d="M9,8v8" />
  </Fragment>
);

const SortAscending3 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default SortAscending3;
