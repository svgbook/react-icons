import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <rect fill="none" x="6" y="6.6" width="12" height="7.2" rx="1.2" />
    <line x1="8.4" y1="9" x2="8.4" y2="9" />
    <line x1="10.8" y1="9" x2="10.8" y2="9" />
    <line x1="13.2" y1="9" x2="13.2" y2="9" />
    <line x1="15.6" y1="9" x2="15.6" y2="9" />
    <line x1="8.4" y1="11.4" x2="8.4" y2="11.41" />
    <line x1="15.6" y1="11.4" x2="15.6" y2="11.41" />
    <line x1="10.8" y1="11.4" x2="13.2" y2="11.4" />
    <path fill="none" d="M10.8,17.4,12,16.2l1.2,1.2" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M16.8,6.1H7.2A1.7,1.7,0,0,0,5.5,7.8v4.8a1.7,1.7,0,0,0,1.7,1.7h9.6a1.7,1.7,0,0,0,1.7-1.7V7.8A1.7,1.7,0,0,0,16.8,6.1ZM10.34,8.81a.36.36,0,0,1,.11-.16.5.5,0,0,1,.7,0,.36.36,0,0,1,.11.16.41.41,0,0,1,0,.19.51.51,0,0,1-.5.5.43.43,0,0,1-.19,0,.36.36,0,0,1-.16-.11A.47.47,0,0,1,10.3,9,.41.41,0,0,1,10.34,8.81ZM8.9,11.41a.5.5,0,1,1-.5-.51.5.5,0,0,1,.5.5ZM8.75,9.35a.36.36,0,0,1-.16.11.47.47,0,0,1-.38,0,.36.36,0,0,1-.16-.11A.47.47,0,0,1,7.9,9a.43.43,0,0,1,0-.19.53.53,0,0,1,.27-.27.5.5,0,0,1,.38,0,.53.53,0,0,1,.27.27A.43.43,0,0,1,8.9,9,.47.47,0,0,1,8.75,9.35ZM13.2,11.9H10.8a.5.5,0,0,1,0-1h2.4a.5.5,0,0,1,0,1Zm.35-2.55A.5.5,0,0,1,12.7,9a.43.43,0,0,1,0-.19A.53.53,0,0,1,13,8.54a.5.5,0,0,1,.38,0,.53.53,0,0,1,.27.27.43.43,0,0,1,0,.19A.47.47,0,0,1,13.55,9.35Zm2.55,2.06a.5.5,0,1,1-.5-.51.5.5,0,0,1,.5.5Zm0-2.22a.53.53,0,0,1-.27.27.43.43,0,0,1-.19,0,.41.41,0,0,1-.19,0,.53.53,0,0,1-.27-.27.43.43,0,0,1,0-.19.47.47,0,0,1,.15-.35.49.49,0,0,1,.54-.11.53.53,0,0,1,.27.27.41.41,0,0,1,0,.19A.43.43,0,0,1,16.06,9.19Z"
    />
    <path fill="none" d="M10.8,17.4,12,16.2l1.2,1.2" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <rect fill="none" x="6" y="6.6" width="12" height="7.2" rx="1.2" />
    <line strokeOpacity=".2" x1="8.4" y1="9" x2="8.4" y2="9" />
    <line strokeOpacity=".2" x1="10.8" y1="9" x2="10.8" y2="9" />
    <line strokeOpacity=".2" x1="13.2" y1="9" x2="13.2" y2="9" />
    <line strokeOpacity=".2" x1="15.6" y1="9" x2="15.6" y2="9" />
    <line strokeOpacity=".2" x1="8.4" y1="11.4" x2="8.4" y2="11.41" />
    <line strokeOpacity=".2" x1="15.6" y1="11.4" x2="15.6" y2="11.41" />
    <line strokeOpacity=".2" x1="10.8" y1="11.4" x2="13.2" y2="11.4" />
    <path fill="none" strokeOpacity=".2" d="M10.8,17.4,12,16.2l1.2,1.2" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <rect fill="none" x="6" y="6.6" width="12" height="7.2" rx="1.2" />
    <line stroke={secondaryColor} x1="8.4" y1="9" x2="8.4" y2="9" />
    <line stroke={secondaryColor} x1="10.8" y1="9" x2="10.8" y2="9" />
    <line stroke={secondaryColor} x1="13.2" y1="9" x2="13.2" y2="9" />
    <line stroke={secondaryColor} x1="15.6" y1="9" x2="15.6" y2="9" />
    <line stroke={secondaryColor} x1="8.4" y1="11.4" x2="8.4" y2="11.41" />
    <line stroke={secondaryColor} x1="15.6" y1="11.4" x2="15.6" y2="11.41" />
    <line stroke={secondaryColor} x1="10.8" y1="11.4" x2="13.2" y2="11.4" />
    <path fill="none" stroke={secondaryColor} d="M10.8,17.4,12,16.2l1.2,1.2" />
  </Fragment>
);

const KeyboardHide = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default KeyboardHide;
