import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M10.51,13.49a2.61,2.61,0,0,0,3.69,0l0,0,3-3a2.64,2.64,0,0,0-3.74-3.74l-.37.38"
    />
    <path
      fill="none"
      d="M13.49,10.51a2.61,2.61,0,0,0-3.69,0l0,0-3,3a2.64,2.64,0,0,0,3.74,3.74l.37-.38"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M10.51,13.49a2.61,2.61,0,0,0,3.69,0l0,0,3-3a2.64,2.64,0,0,0-3.74-3.74l-.37.38"
    />
    <path
      fill="none"
      d="M13.49,10.51a2.61,2.61,0,0,0-3.69,0l0,0-3,3a2.64,2.64,0,0,0,3.74,3.74l.37-.38"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      strokeOpacity=".2"
      d="M10.51,13.49a2.61,2.61,0,0,0,3.69,0l0,0,3-3a2.64,2.64,0,0,0-3.74-3.74l-.37.38"
    />
    <path
      fill="none"
      d="M13.49,10.51a2.61,2.61,0,0,0-3.69,0l0,0-3,3a2.64,2.64,0,0,0,3.74,3.74l.37-.38"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      stroke={secondaryColor}
      d="M10.51,13.49a2.61,2.61,0,0,0,3.69,0l0,0,3-3a2.64,2.64,0,0,0-3.74-3.74l-.37.38"
    />
    <path
      fill="none"
      d="M13.49,10.51a2.61,2.61,0,0,0-3.69,0l0,0-3,3a2.64,2.64,0,0,0,3.74,3.74l.37-.38"
    />
  </Fragment>
);

const Link = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Link;
