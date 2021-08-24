import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M17,12.39l-5,4.94L7,12.39m0,0a3.33,3.33,0,1,1,4.65-4.78A4.55,4.55,0,0,1,12,8a3.33,3.33,0,0,1,5.32,4,3,3,0,0,1-.33.38"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M17,12.39l-5,4.94L7,12.39m0,0a3.33,3.33,0,1,1,4.65-4.78A4.55,4.55,0,0,1,12,8a3.33,3.33,0,0,1,5.32,4,3,3,0,0,1-.33.38" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M17,12.39l-5,4.94L7,12.39m0,0a3.33,3.33,0,1,1,4.65-4.78A4.55,4.55,0,0,1,12,8a3.33,3.33,0,0,1,5.32,4,3,3,0,0,1-.33.38"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M17,12.39l-5,4.94L7,12.39m0,0a3.33,3.33,0,1,1,4.65-4.78A4.55,4.55,0,0,1,12,8a3.33,3.33,0,0,1,5.32,4,3,3,0,0,1-.33.38"
    />
  </Fragment>
);

const Heart = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Heart;
