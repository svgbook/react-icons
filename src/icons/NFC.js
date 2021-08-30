import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <rect fill="none" x="6" y="6" width="12" height="12" rx="2.25" />
    <path fill="none" d="M11.25,18A2.25,2.25,0,0,1,9,15.75V7.5l3.75,3.75" />
    <path fill="none" d="M12.75,6A2.25,2.25,0,0,1,15,8.25V16.5l-3.75-3.75" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M18.5,8.25v7.5a2.75,2.75,0,0,1-2.75,2.75h-4.5a.5.5,0,0,0,0-1A1.76,1.76,0,0,1,9.5,15.75v-7l2.9,2.89a.49.49,0,0,0,.7-.7L9.35,7.15A.47.47,0,0,0,8.81,7a.5.5,0,0,0-.31.46v8.25a2.73,2.73,0,0,0,2.75,2.75h-3A2.75,2.75,0,0,1,5.5,15.75V8.25A2.75,2.75,0,0,1,8.25,5.5h4.5a.5.5,0,0,0,0,1A1.76,1.76,0,0,1,14.5,8.25v7L11.6,12.4a.49.49,0,0,0-.7.7l3.75,3.75A.47.47,0,0,0,15,17a.43.43,0,0,0,.19,0,.5.5,0,0,0,.31-.46V8.25A2.73,2.73,0,0,0,12.75,5.5h3A2.75,2.75,0,0,1,18.5,8.25Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <rect fillOpacity=".2" x="6" y="6" width="12" height="12" rx="2.25" />
    <path fill="none" d="M11.25,18A2.25,2.25,0,0,1,9,15.75V7.5l3.75,3.75" />
    <path fill="none" d="M12.75,6A2.25,2.25,0,0,1,15,8.25V16.5l-3.75-3.75" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <rect fill={secondaryColor} x="6" y="6" width="12" height="12" rx="2.25" />
    <path fill="none" d="M11.25,18A2.25,2.25,0,0,1,9,15.75V7.5l3.75,3.75" />
    <path fill="none" d="M12.75,6A2.25,2.25,0,0,1,15,8.25V16.5l-3.75-3.75" />
  </Fragment>
);

const NFC = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default NFC;
