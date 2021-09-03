import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M12,8.67A3.33,3.33,0,1,0,15.33,12,3.33,3.33,0,0,0,12,8.67Zm0,4a.67.67,0,1,1,.67-.67A.67.67,0,0,1,12,12.67Z"
    />
    <path
      fill="none"
      d="M12,6a6,6,0,1,0,6,6A6,6,0,0,0,12,6Zm0,9.33A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M12,5.5A6.5,6.5,0,1,0,18.5,12,6.51,6.51,0,0,0,12,5.5Zm0,10.33A3.83,3.83,0,1,1,15.83,12,3.84,3.84,0,0,1,12,15.83Z"
    />
    <path
      stroke="none"
      d="M12,9.17A2.83,2.83,0,1,0,14.83,12,2.83,2.83,0,0,0,12,9.17ZM11.83,12a.17.17,0,0,1,.34,0C12.17,12.19,11.83,12.18,11.83,12Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M12,8.67A3.33,3.33,0,1,0,15.33,12,3.33,3.33,0,0,0,12,8.67Zm0,4a.67.67,0,1,1,.67-.67A.67.67,0,0,1,12,12.67Z"
    />
    <path
      fillOpacity=".2"
      d="M12,6a6,6,0,1,0,6,6A6,6,0,0,0,12,6Zm0,9.33A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M12,8.67A3.33,3.33,0,1,0,15.33,12,3.33,3.33,0,0,0,12,8.67Zm0,4a.67.67,0,1,1,.67-.67A.67.67,0,0,1,12,12.67Z"
    />
    <path
      fill={secondaryColor}
      d="M12,6a6,6,0,1,0,6,6A6,6,0,0,0,12,6Zm0,9.33A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"
    />
  </Fragment>
);

const Target = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Target;
