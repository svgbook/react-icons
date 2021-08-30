import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <rect fill="none" x="6" y="6" width="4.5" height="4.5" rx="0.75" />
    <line x1="8.25" y1="15.75" x2="8.25" y2="15.76" />
    <rect fill="none" x="13.5" y="6" width="4.5" height="4.5" rx="0.75" />
    <line x1="8.25" y1="8.25" x2="8.25" y2="8.26" />
    <rect fill="none" x="6" y="13.5" width="4.5" height="4.5" rx="0.75" />
    <line x1="15.75" y1="8.25" x2="15.75" y2="8.26" />
    <line x1="13.5" y1="13.5" x2="15.75" y2="13.5" />
    <line x1="18" y1="13.5" x2="18" y2="13.51" />
    <line x1="13.5" y1="13.5" x2="13.5" y2="15.75" />
    <line x1="13.5" y1="18" x2="15.75" y2="18" />
    <line x1="15.75" y1="15.75" x2="18" y2="15.75" />
    <line x1="18" y1="15.75" x2="18" y2="18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M9.75,5.5h-3A1.25,1.25,0,0,0,5.5,6.75v3A1.25,1.25,0,0,0,6.75,11h3A1.25,1.25,0,0,0,11,9.75v-3A1.25,1.25,0,0,0,9.75,5.5Zm-1,2.76a.5.5,0,1,1-.5-.51.5.5,0,0,1,.5.5Z"
    />
    <path
      stroke="none"
      d="M17.25,5.5h-3A1.25,1.25,0,0,0,13,6.75v3A1.25,1.25,0,0,0,14.25,11h3A1.25,1.25,0,0,0,18.5,9.75v-3A1.25,1.25,0,0,0,17.25,5.5Zm-1,2.76a.5.5,0,1,1-.5-.51.5.5,0,0,1,.5.5Z"
    />
    <path
      stroke="none"
      d="M9.75,13h-3A1.25,1.25,0,0,0,5.5,14.25v3A1.25,1.25,0,0,0,6.75,18.5h3A1.25,1.25,0,0,0,11,17.25v-3A1.25,1.25,0,0,0,9.75,13Zm-1,2.76a.5.5,0,1,1-.5-.51.5.5,0,0,1,.5.5Z"
    />
    <path
      stroke="none"
      d="M16.25,13.5a.5.5,0,0,1-.5.5H14v1.75a.5.5,0,0,1-1,0V13.5a.5.5,0,0,1,.5-.5h2.25A.5.5,0,0,1,16.25,13.5Z"
    />
    <path
      stroke="none"
      d="M18,14a.51.51,0,0,1,0-1,.5.5,0,0,1,.5.5h0A.5.5,0,0,1,18,14Z"
    />
    <path
      stroke="none"
      d="M15.75,18.5H13.5a.5.5,0,0,1,0-1h2.25a.5.5,0,0,1,0,1Z"
    />
    <path
      stroke="none"
      d="M18.5,15.75V18a.5.5,0,0,1-1,0V16.25H15.75a.5.5,0,0,1,0-1H18A.5.5,0,0,1,18.5,15.75Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <rect fillOpacity=".2" x="6" y="6" width="4.5" height="4.5" rx="0.75" />
    <line x1="8.25" y1="15.75" x2="8.25" y2="15.76" />
    <rect fillOpacity=".2" x="13.5" y="6" width="4.5" height="4.5" rx="0.75" />
    <line x1="8.25" y1="8.25" x2="8.25" y2="8.26" />
    <rect fillOpacity=".2" x="6" y="13.5" width="4.5" height="4.5" rx="0.75" />
    <line x1="15.75" y1="8.25" x2="15.75" y2="8.26" />
    <line x1="13.5" y1="13.5" x2="15.75" y2="13.5" />
    <line x1="18" y1="13.5" x2="18" y2="13.51" />
    <line x1="13.5" y1="13.5" x2="13.5" y2="15.75" />
    <line x1="13.5" y1="18" x2="15.75" y2="18" />
    <line x1="15.75" y1="15.75" x2="18" y2="15.75" />
    <line x1="18" y1="15.75" x2="18" y2="18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <rect
      fill={secondaryColor}
      x="6"
      y="6"
      width="4.5"
      height="4.5"
      rx="0.75"
    />
    <rect
      fill={secondaryColor}
      x="13.5"
      y="6"
      width="4.5"
      height="4.5"
      rx="0.75"
    />
    <line x1="8.25" y1="8.25" x2="8.25" y2="8.26" />
    <rect
      fill={secondaryColor}
      x="6"
      y="13.5"
      width="4.5"
      height="4.5"
      rx="0.75"
    />
    <line x1="8.25" y1="15.75" x2="8.25" y2="15.76" />
    <line x1="15.75" y1="8.25" x2="15.75" y2="8.26" />
    <line x1="13.5" y1="13.5" x2="15.75" y2="13.5" />
    <line x1="18" y1="13.5" x2="18" y2="13.51" />
    <line x1="13.5" y1="13.5" x2="13.5" y2="15.75" />
    <line x1="13.5" y1="18" x2="15.75" y2="18" />
    <line x1="15.75" y1="15.75" x2="18" y2="15.75" />
    <line x1="18" y1="15.75" x2="18" y2="18" />
  </Fragment>
);

const QRCode = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default QRCode;
