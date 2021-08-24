import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <polyline fill="none" points="6 10 12 14 18 10 12 6 6 10" />
    <path
      fill="none"
      d="M18,10v6.67A1.34,1.34,0,0,1,16.67,18H7.33A1.34,1.34,0,0,1,6,16.67V10"
    />
    <line x1="6" y1="16.67" x2="10" y2="12.67" />
    <line x1="14" y1="12.67" x2="18" y2="16.67" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <polyline points="6 10 12 14 18 10 12 6 6 10" />
    <path
      fill="none"
      d="M18,10v6.67A1.34,1.34,0,0,1,16.67,18H7.33A1.34,1.34,0,0,1,6,16.67V10"
    />
    <line x1="6" y1="16.67" x2="10" y2="12.67" />
    <line x1="14" y1="12.67" x2="18" y2="16.67" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <polyline fillOpacity=".2" points="6 10 12 14 18 10 12 6 6 10" />
    <path
      fill="none"
      d="M18,10v6.67A1.34,1.34,0,0,1,16.67,18H7.33A1.34,1.34,0,0,1,6,16.67V10"
    />
    <line x1="6" y1="16.67" x2="10" y2="12.67" />
    <line x1="14" y1="12.67" x2="18" y2="16.67" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <polyline fill={secondaryColor} points="6 10 12 14 18 10 12 6 6 10" />
    <path
      fill="none"
      d="M18,10v6.67A1.34,1.34,0,0,1,16.67,18H7.33A1.34,1.34,0,0,1,6,16.67V10"
    />
    <line x1="6" y1="16.67" x2="10" y2="12.67" />
    <line x1="14" y1="12.67" x2="18" y2="16.67" />
  </Fragment>
);

const MailOpened = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default MailOpened;
