import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M15.33,11.33H8.67a1.34,1.34,0,0,0-1.34,1.34v4A1.34,1.34,0,0,0,8.67,18h6.66a1.34,1.34,0,0,0,1.34-1.33v-4A1.34,1.34,0,0,0,15.33,11.33Zm-3.33,4a.67.67,0,1,1,.67-.66A.67.67,0,0,1,12,15.33Z"
    />
    <path fill="none" d="M9.33,11.33V8.67a2.67,2.67,0,0,1,5.34,0v2.66" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M15.33,11.33H8.67a1.34,1.34,0,0,0-1.34,1.34v4A1.34,1.34,0,0,0,8.67,18h6.66a1.34,1.34,0,0,0,1.34-1.33v-4A1.34,1.34,0,0,0,15.33,11.33Zm-3.33,4a.67.67,0,1,1,.67-.66A.67.67,0,0,1,12,15.33Z" />
    <path fill="none" d="M9.33,11.33V8.67a2.67,2.67,0,0,1,5.34,0v2.66" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M15.33,11.33H8.67a1.34,1.34,0,0,0-1.34,1.34v4A1.34,1.34,0,0,0,8.67,18h6.66a1.34,1.34,0,0,0,1.34-1.33v-4A1.34,1.34,0,0,0,15.33,11.33Zm-3.33,4a.67.67,0,1,1,.67-.66A.67.67,0,0,1,12,15.33Z"
    />
    <path fill="none" d="M9.33,11.33V8.67a2.67,2.67,0,0,1,5.34,0v2.66" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M15.33,11.33H8.67a1.34,1.34,0,0,0-1.34,1.34v4A1.34,1.34,0,0,0,8.67,18h6.66a1.34,1.34,0,0,0,1.34-1.33v-4A1.34,1.34,0,0,0,15.33,11.33Zm-3.33,4a.67.67,0,1,1,.67-.66A.67.67,0,0,1,12,15.33Z"
    />
    <path fill="none" d="M9.33,11.33V8.67a2.67,2.67,0,0,1,5.34,0v2.66" />
  </Fragment>
);

const Lock = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Lock;
