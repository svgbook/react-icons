import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M12,18V15.08" />
    <path fill="none" d="M9.41,15.08h5.18V8.59a2.59,2.59,0,0,0-5.18,0Z" />
    <path fill="none" d="M9.41,10.87l5.18-2.28" />
    <path fill="none" d="M9.41,13.46l5.18-2.27" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M12,18V15.08" />
    <polygon points="14.59 11.19 14.59 15.08 9.41 15.08 9.41 13.46 14.59 11.19" />
    <polygon
      fill="none"
      points="14.59 8.59 14.59 11.19 9.41 13.46 9.41 10.86 14.59 8.59"
    />
    <path d="M14.59,8.59,9.41,10.86V8.59a2.59,2.59,0,0,1,5.18,0Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M12,18V15.08" />
    <path fillOpacity=".2" d="M9.41,15.08h5.18V8.59a2.59,2.59,0,0,0-5.18,0Z" />
    <path fill="none" d="M9.41,10.87l5.18-2.28" />
    <path fill="none" d="M9.41,13.46l5.18-2.27" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M12,18V15.08" />
    <path
      fill={secondaryColor}
      d="M9.41,15.08h5.18V8.59a2.59,2.59,0,0,0-5.18,0Z"
    />
    <path fill="none" d="M9.41,10.87l5.18-2.28" />
    <path fill="none" d="M9.41,13.46l5.18-2.27" />
  </Fragment>
);

const Icecream = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Icecream;
