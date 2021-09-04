import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M12,8.67V6m-.67,0h1.34" />
    <path fill="none" d="M14.36,9.64l1.88-1.88m-.47-.47.94.94" />
    <path fill="none" d="M15.33,12H18m0-.67v1.34" />
    <path fill="none" d="M14.36,14.36l1.88,1.88m.47-.47-.94.94" />
    <path fill="none" d="M12,15.33V18m.67,0H11.33" />
    <path fill="none" d="M9.64,14.36,7.76,16.24m.47.47-.94-.94" />
    <path fill="none" d="M8.67,12H6m0,.67V11.33" />
    <path fill="none" d="M9.64,9.64,7.76,7.76m-.47.47.94-.94" />
    <circle fill="none" cx="12" cy="12" r="3.33" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M12,8.67V6m-.67,0h1.34" />
    <path fill="none" d="M14.36,9.64l1.88-1.88m-.47-.47.94.94" />
    <path fill="none" d="M15.33,12H18m0-.67v1.34" />
    <path fill="none" d="M14.36,14.36l1.88,1.88m.47-.47-.94.94" />
    <path fill="none" d="M12,15.33V18m.67,0H11.33" />
    <path fill="none" d="M9.64,14.36,7.76,16.24m.47.47-.94-.94" />
    <path fill="none" d="M8.67,12H6m0,.67V11.33" />
    <path fill="none" d="M9.64,9.64,7.76,7.76m-.47.47.94-.94" />
    <circle cx="12" cy="12" r="3.33" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M12,8.67V6m-.67,0h1.34" />
    <path fill="none" d="M14.36,9.64l1.88-1.88m-.47-.47.94.94" />
    <path fill="none" d="M15.33,12H18m0-.67v1.34" />
    <path fill="none" d="M14.36,14.36l1.88,1.88m.47-.47-.94.94" />
    <path fill="none" d="M12,15.33V18m.67,0H11.33" />
    <path fill="none" d="M9.64,14.36,7.76,16.24m.47.47-.94-.94" />
    <path fill="none" d="M8.67,12H6m0,.67V11.33" />
    <path fill="none" d="M9.64,9.64,7.76,7.76m-.47.47.94-.94" />
    <circle fillOpacity=".2" cx="12" cy="12" r="3.33" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M12,8.67V6m-.67,0h1.34" />
    <path fill="none" d="M14.36,9.64l1.88-1.88m-.47-.47.94.94" />
    <path fill="none" d="M15.33,12H18m0-.67v1.34" />
    <path fill="none" d="M14.36,14.36l1.88,1.88m.47-.47-.94.94" />
    <path fill="none" d="M12,15.33V18m.67,0H11.33" />
    <path fill="none" d="M9.64,14.36,7.76,16.24m.47.47-.94-.94" />
    <path fill="none" d="M8.67,12H6m0,.67V11.33" />
    <path fill="none" d="M9.64,9.64,7.76,7.76m-.47.47.94-.94" />
    <circle fill={secondaryColor} cx="12" cy="12" r="3.33" />
  </Fragment>
);

const CoronaVirus = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default CoronaVirus;
