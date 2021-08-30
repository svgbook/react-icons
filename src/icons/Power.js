import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M8.17,7.53a5.94,5.94,0,1,0,8.36.71,5.87,5.87,0,0,0-.7-.71"
    />
    <line x1="12" y1="6" x2="12" y2="12.13" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M8.17,7.53a5.94,5.94,0,1,0,8.36.71,5.87,5.87,0,0,0-.7-.71"
    />
    <line x1="12" y1="6" x2="12" y2="12.13" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      strokeOpacity=".2"
      d="M8.17,7.53a5.94,5.94,0,1,0,8.36.71,5.87,5.87,0,0,0-.7-.71"
    />
    <line x1="12" y1="6" x2="12" y2="12.13" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      stroke={secondaryColor}
      d="M8.17,7.53a5.94,5.94,0,1,0,8.36.71,5.87,5.87,0,0,0-.7-.71"
    />
    <line x1="12" y1="6" x2="12" y2="12.13" />
  </Fragment>
);

const Power = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Power;
