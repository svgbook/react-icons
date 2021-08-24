import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="12" cy="7.26" r="1.26" />
    <path
      fill="none"
      d="M10.74,18V14.84l-.63-.63V11.68a.63.63,0,0,1,.63-.63h2.52a.63.63,0,0,1,.63.63v2.53l-.63.63V18"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <circle cx="12" cy="7.26" r="1.26" />
    <path
      fill="none"
      d="M10.74,18V14.84l-.63-.63V11.68a.63.63,0,0,1,.63-.63h2.52a.63.63,0,0,1,.63.63v2.53l-.63.63V18"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fill="none" cx="12" cy="7.26" r="1.26" />
    <path
      fill="none"
      strokeOpacity=".2"
      d="M10.74,18V14.84l-.63-.63V11.68a.63.63,0,0,1,.63-.63h2.52a.63.63,0,0,1,.63.63v2.53l-.63.63V18"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill="none" stroke={secondaryColor} cx="12" cy="7.26" r="1.26" />
    <path
      fill="none"
      d="M10.74,18V14.84l-.63-.63V11.68a.63.63,0,0,1,.63-.63h2.52a.63.63,0,0,1,.63.63v2.53l-.63.63V18"
    />
  </Fragment>
);

const Man = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Man;
