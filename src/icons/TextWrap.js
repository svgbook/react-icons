import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="6" y1="6.75" x2="18" y2="6.75" />
    <path
      fill="none"
      d="M6,11.25h9.75a2.25,2.25,0,0,1,0,4.5h-3l1.5-1.5m0,3-1.5-1.5"
    />
    <line x1="6" y1="15.75" x2="9.75" y2="15.75" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="6" y1="6.75" x2="18" y2="6.75" />
    <path
      fill="none"
      d="M6,11.25h9.75a2.25,2.25,0,0,1,0,4.5h-3l1.5-1.5m0,3-1.5-1.5"
    />
    <line x1="6" y1="15.75" x2="9.75" y2="15.75" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line strokeOpacity=".2" x1="6" y1="6.75" x2="18" y2="6.75" />
    <path
      fill="none"
      d="M6,11.25h9.75a2.25,2.25,0,0,1,0,4.5h-3l1.5-1.5m0,3-1.5-1.5"
    />
    <line strokeOpacity=".2" x1="6" y1="15.75" x2="9.75" y2="15.75" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line x1="6" y1="6.75" x2="18" y2="6.75" />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M6,11.25h9.75a2.25,2.25,0,0,1,0,4.5h-3l1.5-1.5m0,3-1.5-1.5"
    />
    <line x1="6" y1="15.75" x2="9.75" y2="15.75" />
  </Fragment>
);

const TextWrap = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default TextWrap;
