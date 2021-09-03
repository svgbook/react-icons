import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path d="M18,18h0" />
    <path d="M6,18H6" />
    <path d="M9,18H9" />
    <path d="M12,18h0" />
    <path d="M15,18h0" />
    <path d="M18,6h0" />
    <path d="M6,6H6" />
    <path d="M9,6H9" />
    <path d="M12,6h0" />
    <path d="M15,6h0" />
    <rect fill="none" x="6" y="9" width="12" height="6" rx="0.75" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M18,18h0" />
    <path d="M6,18H6" />
    <path d="M9,18H9" />
    <path d="M12,18h0" />
    <path d="M15,18h0" />
    <path d="M18,6h0" />
    <path d="M6,6H6" />
    <path d="M9,6H9" />
    <path d="M12,6h0" />
    <path d="M15,6h0" />
    <rect x="6" y="9" width="12" height="6" rx="0.75" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path strokeOpacity=".2" d="M18,18h0" />
    <path strokeOpacity=".2" d="M6,18H6" />
    <path strokeOpacity=".2" d="M9,18H9" />
    <path strokeOpacity=".2" d="M12,18h0" />
    <path strokeOpacity=".2" d="M15,18h0" />
    <path strokeOpacity=".2" d="M18,6h0" />
    <path strokeOpacity=".2" d="M6,6H6" />
    <path strokeOpacity=".2" d="M9,6H9" />
    <path strokeOpacity=".2" d="M12,6h0" />
    <path strokeOpacity=".2" d="M15,6h0" />
    <rect fillOpacity=".2" x="6" y="9" width="12" height="6" rx="0.75" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path d="M18,18h0" />
    <path d="M6,18H6" />
    <path d="M9,18H9" />
    <path d="M12,18h0" />
    <path d="M15,18h0" />
    <path d="M18,6h0" />
    <path d="M6,6H6" />
    <path d="M9,6H9" />
    <path d="M12,6h0" />
    <path d="M15,6h0" />
    <rect fill={secondaryColor} x="6" y="9" width="12" height="6" rx="0.75" />
  </Fragment>
);

const Section = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Section;
