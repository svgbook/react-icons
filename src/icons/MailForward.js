import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M18,7.67l-6,4-6-4A1.34,1.34,0,0,1,7.33,6.33h9.34A1.34,1.34,0,0,1,18,7.67Z"
    />
    <line x1="18" y1="12.67" x2="18" y2="7.67" />
    <path fill="none" d="M6,7.67v6.66a1.34,1.34,0,0,0,1.33,1.34H12" />
    <path fill="none" d="M14,15.67h4" />
    <path fill="none" d="M16,13.67l2,2-2,2" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M18,7.67l-6,4-6-4A1.34,1.34,0,0,1,7.33,6.33h9.34A1.34,1.34,0,0,1,18,7.67Z" />
    <line x1="18" y1="12.67" x2="18" y2="7.67" />
    <path fill="none" d="M6,7.67v6.66a1.34,1.34,0,0,0,1.33,1.34H12" />
    <path fill="none" d="M14,15.67h4" />
    <path fill="none" d="M16,13.67l2,2-2,2" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M18,7.67l-6,4-6-4A1.34,1.34,0,0,1,7.33,6.33h9.34A1.34,1.34,0,0,1,18,7.67Z"
    />
    <line x1="18" y1="12.67" x2="18" y2="7.67" />
    <path fill="none" d="M6,7.67v6.66a1.34,1.34,0,0,0,1.33,1.34H12" />
    <path fill="none" strokeOpacity=".2" d="M14,15.67h4" />
    <path fill="none" strokeOpacity=".2" d="M16,13.67l2,2-2,2" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M18,7.67l-6,4-6-4A1.34,1.34,0,0,1,7.33,6.33h9.34A1.34,1.34,0,0,1,18,7.67Z"
    />
    <line x1="18" y1="12.67" x2="18" y2="7.67" />
    <path fill="none" d="M6,7.67v6.66a1.34,1.34,0,0,0,1.33,1.34H12" />
    <path fill="none" stroke={secondaryColor} d="M14,15.67h4" />
    <path fill="none" stroke={secondaryColor} d="M16,13.67l2,2-2,2" />
  </Fragment>
);

const MailForward = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default MailForward;
