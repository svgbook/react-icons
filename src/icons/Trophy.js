import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="9.33" y1="17.67" x2="14.67" y2="17.67" />
    <line x1="12" y1="15" x2="12" y2="17.67" />
    <path fill="none" d="M8.67,6.33v5.34a3.33,3.33,0,1,0,6.66,0V6.33Z" />
    <circle fill="none" cx="7.33" cy="9.67" r="1.33" />
    <circle fill="none" cx="16.67" cy="9.67" r="1.33" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="9.33" y1="17.67" x2="14.67" y2="17.67" />
    <line x1="12" y1="15" x2="12" y2="17.67" />
    <path d="M8.67,6.33v5.34a3.33,3.33,0,1,0,6.66,0V6.33Z" />
    <circle fill="none" cx="7.33" cy="9.67" r="1.33" />
    <circle fill="none" cx="16.67" cy="9.67" r="1.33" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line x1="9.33" y1="17.67" x2="14.67" y2="17.67" />
    <line x1="12" y1="15" x2="12" y2="17.67" />
    <path fillOpacity=".2" d="M8.67,6.33v5.34a3.33,3.33,0,1,0,6.66,0V6.33Z" />
    <circle fill="none" cx="7.33" cy="9.67" r="1.33" />
    <circle fill="none" cx="16.67" cy="9.67" r="1.33" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line x1="9.33" y1="17.67" x2="14.67" y2="17.67" />
    <line x1="12" y1="15" x2="12" y2="17.67" />
    <path
      fill={secondaryColor}
      d="M8.67,6.33v5.34a3.33,3.33,0,1,0,6.66,0V6.33Z"
    />
    <circle fill="none" cx="7.33" cy="9.67" r="1.33" />
    <circle fill="none" cx="16.67" cy="9.67" r="1.33" />
  </Fragment>
);

const Trophy = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Trophy;
