import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="12.67" cy="6.67" r="0.67" />
    <line x1="8.67" y1="18" x2="10.67" y2="15.33" />
    <path fill="none" d="M14.67,18l-1.34-2.67-2-2,.67-4" />
    <path fill="none" d="M8,12l1.33-2L12,9.33l2,2L16,12" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <circle cx="12.67" cy="6.67" r="0.67" />
    <line x1="8.67" y1="18" x2="10.67" y2="15.33" />
    <path fill="none" d="M14.67,18l-1.34-2.67-2-2,.67-4" />
    <path fill="none" d="M8,12l1.33-2L12,9.33l2,2L16,12" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fill="none" strokeOpacity=".2" cx="12.67" cy="6.67" r="0.67" />
    <line x1="8.67" y1="18" x2="10.67" y2="15.33" />
    <path fill="none" d="M14.67,18l-1.34-2.67-2-2,.67-4" />
    <path fill="none" d="M8,12l1.33-2L12,9.33l2,2L16,12" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill="none" stroke={secondaryColor} cx="12.67" cy="6.67" r="0.67" />
    <line x1="8.67" y1="18" x2="10.67" y2="15.33" />
    <path fill="none" d="M14.67,18l-1.34-2.67-2-2,.67-4" />
    <path fill="none" d="M8,12l1.33-2L12,9.33l2,2L16,12" />
  </Fragment>
);

const Walk = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Walk;
