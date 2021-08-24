import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path d="M6,12H6" />
    <path d="M9,12H9" />
    <path d="M12,12h0" />
    <path d="M15,12h0" />
    <path d="M18,12h0" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M6,12H6" />
    <path d="M9,12H9" />
    <path d="M12,12h0" />
    <path d="M15,12h0" />
    <path d="M18,12h0" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path d="M6,12H6" />
    <path strokeOpacity=".2" d="M9,12H9" />
    <path d="M12,12h0" />
    <path strokeOpacity=".2" d="M15,12h0" />
    <path d="M18,12h0" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path d="M6,12H6" />
    <path stroke={secondaryColor} d="M9,12H9" />
    <path d="M12,12h0" />
    <path stroke={secondaryColor} d="M15,12h0" />
    <path d="M18,12h0" />
  </Fragment>
);

const LineDotted = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default LineDotted;
