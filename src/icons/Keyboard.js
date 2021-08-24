import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <rect fill="none" x="6" y="8.4" width="12" height="7.2" rx="1.2" />
    <line x1="8.4" y1="10.8" x2="8.4" y2="10.8" />
    <line x1="10.8" y1="10.8" x2="10.8" y2="10.8" />
    <line x1="13.2" y1="10.8" x2="13.2" y2="10.8" />
    <line x1="15.6" y1="10.8" x2="15.6" y2="10.8" />
    <line x1="8.4" y1="13.2" x2="8.4" y2="13.21" />
    <line x1="15.6" y1="13.2" x2="15.6" y2="13.21" />
    <line x1="10.8" y1="13.2" x2="13.2" y2="13.2" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M16.8,7.9H7.2A1.7,1.7,0,0,0,5.5,9.6v4.8a1.7,1.7,0,0,0,1.7,1.7h9.6a1.7,1.7,0,0,0,1.7-1.7V9.6A1.7,1.7,0,0,0,16.8,7.9Zm-6.46,2.71a.53.53,0,0,1,.27-.27.49.49,0,0,1,.54.11.36.36,0,0,1,.11.16.43.43,0,0,1,0,.19.51.51,0,0,1-.5.5.43.43,0,0,1-.19,0,.36.36,0,0,1-.16-.11.47.47,0,0,1-.15-.35A.43.43,0,0,1,10.34,10.61ZM8.9,13.21a.5.5,0,1,1-.5-.51.5.5,0,0,1,.5.5Zm-.15-2.06a.36.36,0,0,1-.16.11.47.47,0,0,1-.38,0,.36.36,0,0,1-.16-.11.48.48,0,0,1,0-.7.36.36,0,0,1,.16-.11.5.5,0,0,1,.38,0,.36.36,0,0,1,.16.11.48.48,0,0,1,0,.7ZM13.2,13.7H10.8a.5.5,0,0,1,0-1h2.4a.5.5,0,0,1,0,1Zm.35-2.55a.47.47,0,0,1-.35.15.41.41,0,0,1-.19,0,.36.36,0,0,1-.16-.11.48.48,0,0,1,0-.7.36.36,0,0,1,.16-.11.49.49,0,0,1,.54.11.48.48,0,0,1,0,.7Zm2.55,2.06a.5.5,0,1,1-.5-.51.5.5,0,0,1,.5.5Zm0-2.22a.53.53,0,0,1-.27.27.43.43,0,0,1-.19,0,.51.51,0,0,1-.5-.5.43.43,0,0,1,0-.19.53.53,0,0,1,.27-.27.5.5,0,0,1,.38,0,.53.53,0,0,1,.27.27.43.43,0,0,1,0,.19A.41.41,0,0,1,16.06,11Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <rect fill="none" x="6" y="8.4" width="12" height="7.2" rx="1.2" />
    <line strokeOpacity=".2" x1="8.4" y1="10.8" x2="8.4" y2="10.8" />
    <line strokeOpacity=".2" x1="10.8" y1="10.8" x2="10.8" y2="10.8" />
    <line strokeOpacity=".2" x1="13.2" y1="10.8" x2="13.2" y2="10.8" />
    <line strokeOpacity=".2" x1="15.6" y1="10.8" x2="15.6" y2="10.8" />
    <line strokeOpacity=".2" x1="8.4" y1="13.2" x2="8.4" y2="13.21" />
    <line strokeOpacity=".2" x1="15.6" y1="13.2" x2="15.6" y2="13.21" />
    <line strokeOpacity=".2" x1="10.8" y1="13.2" x2="13.2" y2="13.2" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <rect fill="none" x="6" y="8.4" width="12" height="7.2" rx="1.2" />
    <line stroke={secondaryColor} x1="8.4" y1="10.8" x2="8.4" y2="10.8" />
    <line stroke={secondaryColor} x1="10.8" y1="10.8" x2="10.8" y2="10.8" />
    <line stroke={secondaryColor} x1="13.2" y1="10.8" x2="13.2" y2="10.8" />
    <line stroke={secondaryColor} x1="15.6" y1="10.8" x2="15.6" y2="10.8" />
    <line stroke={secondaryColor} x1="8.4" y1="13.2" x2="8.4" y2="13.21" />
    <line stroke={secondaryColor} x1="15.6" y1="13.2" x2="15.6" y2="13.21" />
    <line stroke={secondaryColor} x1="10.8" y1="13.2" x2="13.2" y2="13.2" />
  </Fragment>
);

const Keyboard = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Keyboard;
