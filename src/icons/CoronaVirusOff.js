import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M15.28,12.62a3.34,3.34,0,0,0-2.65-3.89,3.45,3.45,0,0,0-1.24,0"
    />
    <path fill="none" d="M12,8.67V6m-.67,0h1.34" />
    <path fill="none" d="M14.36,9.64l1.88-1.88m-.47-.47.94.94" />
    <path fill="none" d="M15.33,12H18m0-.67v1.34" />
    <path fill="none" d="M12,15.33V18m.67,0H11.33" />
    <path fill="none" d="M9.64,14.36,7.76,16.24m.47.47-.94-.94" />
    <path fill="none" d="M8.67,12H6m0,.67V11.33" />
    <path fill="none" d="M9.65,9.64a3.33,3.33,0,0,0,4.7,4.72Z" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M15.28,12.62a3.34,3.34,0,0,0-2.65-3.89,3.45,3.45,0,0,0-1.24,0"
    />
    <path fill="none" d="M12,8.67V6m-.67,0h1.34" />
    <path fill="none" d="M14.36,9.64l1.88-1.88m-.47-.47.94.94" />
    <path fill="none" d="M15.33,12H18m0-.67v1.34" />
    <path fill="none" d="M12,15.33V18m.67,0H11.33" />
    <path fill="none" d="M9.64,14.36,7.76,16.24m.47.47-.94-.94" />
    <path fill="none" d="M8.67,12H6m0,.67V11.33" />
    <path d="M9.65,9.64a3.33,3.33,0,0,0,4.7,4.72Z" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M15.28,12.62a3.34,3.34,0,0,0-2.65-3.89,3.45,3.45,0,0,0-1.24,0"
    />
    <path fill="none" d="M12,8.67V6m-.67,0h1.34" />
    <path fill="none" d="M14.36,9.64l1.88-1.88m-.47-.47.94.94" />
    <path fill="none" d="M15.33,12H18m0-.67v1.34" />
    <path fill="none" d="M12,15.33V18m.67,0H11.33" />
    <path fill="none" d="M9.64,14.36,7.76,16.24m.47.47-.94-.94" />
    <path fill="none" d="M8.67,12H6m0,.67V11.33" />
    <path fillOpacity=".2" d="M9.65,9.64a3.33,3.33,0,0,0,4.7,4.72Z" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      d="M15.28,12.62a3.34,3.34,0,0,0-2.65-3.89,3.45,3.45,0,0,0-1.24,0"
    />
    <path fill="none" d="M12,8.67V6m-.67,0h1.34" />
    <path fill="none" d="M14.36,9.64l1.88-1.88m-.47-.47.94.94" />
    <path fill="none" d="M15.33,12H18m0-.67v1.34" />
    <path fill="none" d="M12,15.33V18m.67,0H11.33" />
    <path fill="none" d="M9.64,14.36,7.76,16.24m.47.47-.94-.94" />
    <path fill="none" d="M8.67,12H6m0,.67V11.33" />
    <path fill={secondaryColor} d="M9.65,9.64a3.33,3.33,0,0,0,4.7,4.72Z" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Fragment>
);

const CoronaVirusOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default CoronaVirusOff;
