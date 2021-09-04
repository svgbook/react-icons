import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M13.5,13.5A1.5,1.5,0,0,0,15,15h2.25v2.25a.75.75,0,0,1-.75.75h-9A1.5,1.5,0,0,1,6,16.5v-9A1.5,1.5,0,0,0,7.5,9h9a.75.75,0,0,1,.75.75V12H15A1.5,1.5,0,0,0,13.5,13.5Z"
    />
    <path
      fill="none"
      d="M15.75,6.75V9H7.5a1.5,1.5,0,0,1,0-3H15A.76.76,0,0,1,15.75,6.75Z"
    />
    <path fill="none" d="M18,12v3H15a1.5,1.5,0,0,1,0-3Z" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M13.5,13.5A1.5,1.5,0,0,0,15,15h2.25v2.25a.75.75,0,0,1-.75.75h-9A1.5,1.5,0,0,1,6,16.5v-9A1.5,1.5,0,0,0,7.5,9h9a.75.75,0,0,1,.75.75V12H15A1.5,1.5,0,0,0,13.5,13.5Z" />
    <path
      fill="none"
      d="M15.75,6.75V9H7.5a1.5,1.5,0,0,1,0-3H15A.76.76,0,0,1,15.75,6.75Z"
    />
    <path fill="none" d="M18,12v3H15a1.5,1.5,0,0,1,0-3Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M13.5,13.5A1.5,1.5,0,0,0,15,15h2.25v2.25a.75.75,0,0,1-.75.75h-9A1.5,1.5,0,0,1,6,16.5v-9A1.5,1.5,0,0,0,7.5,9h9a.75.75,0,0,1,.75.75V12H15A1.5,1.5,0,0,0,13.5,13.5Z"
    />
    <path
      fillOpacity=".2"
      d="M15.75,6.75V9H7.5a1.5,1.5,0,0,1,0-3H15A.76.76,0,0,1,15.75,6.75Z"
    />
    <path fillOpacity=".2" d="M18,12v3H15a1.5,1.5,0,0,1,0-3Z" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M13.5,13.5A1.5,1.5,0,0,0,15,15h2.25v2.25a.75.75,0,0,1-.75.75h-9A1.5,1.5,0,0,1,6,16.5v-9A1.5,1.5,0,0,0,7.5,9h9a.75.75,0,0,1,.75.75V12H15A1.5,1.5,0,0,0,13.5,13.5Z"
    />
    <path
      fill={secondaryColor}
      d="M15.75,6.75V9H7.5a1.5,1.5,0,0,1,0-3H15A.76.76,0,0,1,15.75,6.75Z"
    />
    <path fill={secondaryColor} d="M18,12v3H15a1.5,1.5,0,0,1,0-3Z" />
  </Fragment>
);

const Wallet = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Wallet;
