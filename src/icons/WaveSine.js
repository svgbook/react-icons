import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M18,12H16.67a1.32,1.32,0,0,1-1.17-1.33c-.2-2.3-.5-4-1.83-4S12,9.06,12,12s-.33,5.33-1.66,5.33-1.64-1.7-1.83-4A1.33,1.33,0,0,0,7.33,12H6"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M18,12H16.67a1.32,1.32,0,0,1-1.17-1.33c-.2-2.3-.5-4-1.83-4S12,9.06,12,12s-.33,5.33-1.66,5.33-1.64-1.7-1.83-4A1.33,1.33,0,0,0,7.33,12H6"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M18,12H16.67a1.32,1.32,0,0,1-1.17-1.33c-.2-2.3-.5-4-1.83-4S12,9.06,12,12s-.33,5.33-1.66,5.33-1.64-1.7-1.83-4A1.33,1.33,0,0,0,7.33,12H6"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      d="M18,12H16.67a1.32,1.32,0,0,1-1.17-1.33c-.2-2.3-.5-4-1.83-4S12,9.06,12,12s-.33,5.33-1.66,5.33-1.64-1.7-1.83-4A1.33,1.33,0,0,0,7.33,12H6"
    />
  </Fragment>
);

const WaveSine = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default WaveSine;
