import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <rect fill="none" x="6" y="7.33" width="12" height="9.33" rx="1.33" />
    <path fill="none" d="M9.33,10.67H10v2.66" />
    <path fill="none" d="M14,10.67h.67v2.66" />
    <line x1="12" y1="11" x2="12" y2="11.01" />
    <line x1="12" y1="13" x2="12" y2="13.01" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M16.67,6.83H7.33A1.84,1.84,0,0,0,5.5,8.67v6.66a1.84,1.84,0,0,0,1.83,1.84h9.34a1.84,1.84,0,0,0,1.83-1.84V8.67A1.84,1.84,0,0,0,16.67,6.83Zm-6.17,6.5a.5.5,0,0,1-1,0V11.17H9.33a.51.51,0,0,1-.5-.5.5.5,0,0,1,.5-.5H10a.5.5,0,0,1,.5.5Zm2-.32a.5.5,0,1,1-.5-.51.5.5,0,0,1,.5.5Zm0-2a.5.5,0,1,1-.5-.51.5.5,0,0,1,.5.5Zm2.67,2.32a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5V11.17H14a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h.67a.5.5,0,0,1,.5.5Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <rect fillOpacity=".2" x="6" y="7.33" width="12" height="9.33" rx="1.33" />
    <path fill="none" d="M9.33,10.67H10v2.66" />
    <path fill="none" d="M14,10.67h.67v2.66" />
    <line x1="12" y1="11" x2="12" y2="11.01" />
    <line x1="12" y1="13" x2="12" y2="13.01" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <rect
      fill={secondaryColor}
      x="6"
      y="7.33"
      width="12"
      height="9.33"
      rx="1.33"
    />
    <path fill="none" d="M9.33,10.67H10v2.66" />
    <path fill="none" d="M14,10.67h.67v2.66" />
    <line x1="12" y1="11" x2="12" y2="11.01" />
    <line x1="12" y1="13" x2="12" y2="13.01" />
  </Fragment>
);

const OneToOne = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default OneToOne;
