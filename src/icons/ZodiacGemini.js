import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="8.67" y1="7" x2="8.67" y2="17" />
    <line x1="15.33" y1="7" x2="15.33" y2="17" />
    <path fill="none" d="M6,6A14,14,0,0,0,18,6" />
    <path fill="none" d="M6,18a14,14,0,0,1,12,0" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="8.67" y1="7" x2="8.67" y2="17" />
    <line x1="15.33" y1="7" x2="15.33" y2="17" />
    <path fill="none" d="M6,6A14,14,0,0,0,18,6" />
    <path fill="none" d="M6,18a14,14,0,0,1,12,0" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line strokeOpacity=".2" x1="8.67" y1="7" x2="8.67" y2="17" />
    <line strokeOpacity=".2" x1="15.33" y1="7" x2="15.33" y2="17" />
    <path fill="none" d="M6,6A14,14,0,0,0,18,6" />
    <path fill="none" d="M6,18a14,14,0,0,1,12,0" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line x1="8.67" y1="7" x2="8.67" y2="17" />
    <line x1="15.33" y1="7" x2="15.33" y2="17" />
    <path fill="none" stroke={secondaryColor} d="M6,6A14,14,0,0,0,18,6" />
    <path fill="none" stroke={secondaryColor} d="M6,18a14,14,0,0,1,12,0" />
  </Fragment>
);

const ZodiacGemini = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default ZodiacGemini;
