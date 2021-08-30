import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M8.25,6a9.19,9.19,0,0,0,0,12" />
    <path fill="none" d="M15.75,6a9.19,9.19,0,0,1,0,12" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M8.25,6a9.19,9.19,0,0,0,0,12" />
    <path fill="none" d="M15.75,6a9.19,9.19,0,0,1,0,12" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M8.25,6a9.19,9.19,0,0,0,0,12" />
    <path fill="none" strokeOpacity=".2" d="M15.75,6a9.19,9.19,0,0,1,0,12" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M8.25,6a9.19,9.19,0,0,0,0,12" />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M15.75,6a9.19,9.19,0,0,1,0,12"
    />
  </Fragment>
);

const Parantheses = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Parantheses;
