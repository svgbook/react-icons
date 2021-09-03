import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="6" y1="7.77" x2="13.06" y2="7.77" />
    <path fill="none" d="M6,12H18L15.88,9.88m0,4.24L18,12" />
    <line x1="6" y1="16.24" x2="13.06" y2="16.24" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="6" y1="7.77" x2="13.06" y2="7.77" />
    <path fill="none" d="M6,12H18L15.88,9.88m0,4.24L18,12" />
    <line x1="6" y1="16.24" x2="13.06" y2="16.24" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line strokeOpacity=".2" x1="6" y1="7.77" x2="13.06" y2="7.77" />
    <path fill="none" d="M6,12H18L15.88,9.88m0,4.24L18,12" />
    <line strokeOpacity=".2" x1="6" y1="16.24" x2="13.06" y2="16.24" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line x1="6" y1="7.77" x2="13.06" y2="7.77" />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M6,12H18L15.88,9.88m0,4.24L18,12"
    />
    <line x1="6" y1="16.24" x2="13.06" y2="16.24" />
  </Fragment>
);

const TextWrapDisabled = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default TextWrapDisabled;
