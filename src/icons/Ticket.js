import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M7.33,7.33h9.34A1.34,1.34,0,0,1,18,8.67v2a1.33,1.33,0,1,0,0,2.66v2a1.34,1.34,0,0,1-1.33,1.34H7.33A1.34,1.34,0,0,1,6,15.33v-2a1.33,1.33,0,0,0,0-2.66v-2A1.34,1.34,0,0,1,7.33,7.33"
    />
    <line x1="14" y1="7.33" x2="14" y2="8.67" />
    <line x1="14" y1="11.33" x2="14" y2="12.67" />
    <line x1="14" y1="15.33" x2="14" y2="16.67" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M18,11.17a.5.5,0,0,0,.5-.5v-2a1.84,1.84,0,0,0-1.83-1.84H7.33A1.84,1.84,0,0,0,5.5,8.67v2a.5.5,0,0,0,.5.5.83.83,0,0,1,0,1.66.5.5,0,0,0-.5.5v2a1.84,1.84,0,0,0,1.83,1.84h9.34a1.84,1.84,0,0,0,1.83-1.84v-2a.5.5,0,0,0-.5-.5.83.83,0,0,1,0-1.66Zm-3.5,5h-1v-.84a.5.5,0,1,1,1,0Zm0-3.5a.5.5,0,1,1-1,0V11.33a.5.5,0,1,1,1,0Zm0-4a.5.5,0,1,1-1,0V7.83h1Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M7.33,7.33h9.34A1.34,1.34,0,0,1,18,8.67v2a1.33,1.33,0,1,0,0,2.66v2a1.34,1.34,0,0,1-1.33,1.34H7.33A1.34,1.34,0,0,1,6,15.33v-2a1.33,1.33,0,0,0,0-2.66v-2A1.34,1.34,0,0,1,7.33,7.33"
    />
    <line x1="14" y1="7.33" x2="14" y2="8.67" />
    <line x1="14" y1="11.33" x2="14" y2="12.67" />
    <line x1="14" y1="15.33" x2="14" y2="16.67" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M7.33,7.33h9.34A1.34,1.34,0,0,1,18,8.67v2a1.33,1.33,0,1,0,0,2.66v2a1.34,1.34,0,0,1-1.33,1.34H7.33A1.34,1.34,0,0,1,6,15.33v-2a1.33,1.33,0,0,0,0-2.66v-2A1.34,1.34,0,0,1,7.33,7.33"
    />
    <line x1="14" y1="7.33" x2="14" y2="8.67" />
    <line x1="14" y1="11.33" x2="14" y2="12.67" />
    <line x1="14" y1="15.33" x2="14" y2="16.67" />
  </Fragment>
);

const Ticket = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Ticket;
