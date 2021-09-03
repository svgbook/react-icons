import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M7.06,16.59h9.88" />
    <path fill="none" d="M15.53,18l1.41-1.41-1.41-1.41" />
    <path fill="none" d="M14.82,6H10.24a2.47,2.47,0,1,0,0,4.94h.35" />
    <path fill="none" d="M13.41,13.76V6" />
    <path fill="none" d="M10.59,13.76V6" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M7.06,16.59h9.88" />
    <path fill="none" d="M15.53,18l1.41-1.41-1.41-1.41" />
    <path fill="none" d="M14.82,6H10.24a2.47,2.47,0,1,0,0,4.94h.35" />
    <path fill="none" d="M13.41,13.76V6" />
    <path fill="none" d="M10.59,13.76V6" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M7.06,16.59h9.88" />
    <path fill="none" d="M15.53,18l1.41-1.41-1.41-1.41" />
    <path
      fill="none"
      strokeOpacity=".2"
      d="M14.82,6H10.24a2.47,2.47,0,1,0,0,4.94h.35"
    />
    <path fill="none" strokeOpacity=".2" d="M13.41,13.76V6" />
    <path fill="none" strokeOpacity=".2" d="M10.59,13.76V6" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" stroke={secondaryColor} d="M7.06,16.59h9.88" />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M15.53,18l1.41-1.41-1.41-1.41"
    />
    <path fill="none" d="M14.82,6H10.24a2.47,2.47,0,1,0,0,4.94h.35" />
    <path fill="none" d="M13.41,13.76V6" />
    <path fill="none" d="M10.59,13.76V6" />
  </Fragment>
);

const TextDirectionLTR = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default TextDirectionLTR;
