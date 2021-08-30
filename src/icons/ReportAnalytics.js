import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M10,7.33H8.67A1.34,1.34,0,0,0,7.33,8.67v8A1.34,1.34,0,0,0,8.67,18h6.66a1.34,1.34,0,0,0,1.34-1.33v-8a1.34,1.34,0,0,0-1.34-1.34H14"
    />
    <path
      fill="none"
      d="M11.33,6h1.34A1.34,1.34,0,0,1,14,7.33h0a1.34,1.34,0,0,1-1.33,1.34H11.33A1.34,1.34,0,0,1,10,7.33h0A1.34,1.34,0,0,1,11.33,6Z"
    />
    <path fill="none" d="M10,15.33V12" />
    <path fill="none" d="M12,15.33v-.66" />
    <path fill="none" d="M14,15.33v-2" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M15.33,6.83h-.91A1.81,1.81,0,0,0,12.67,5.5H11.33A1.81,1.81,0,0,0,9.58,6.83H8.67A1.85,1.85,0,0,0,6.83,8.67v8A1.84,1.84,0,0,0,8.67,18.5h6.66a1.84,1.84,0,0,0,1.84-1.83v-8A1.85,1.85,0,0,0,15.33,6.83Zm-4.83,8.5a.5.5,0,0,1-1,0V12a.5.5,0,0,1,1,0Zm2,0a.5.5,0,0,1-1,0v-.66a.5.5,0,0,1,1,0Zm.17-7.16H11.33a.84.84,0,0,1-.83-.84.83.83,0,0,1,.83-.83h1.34a.83.83,0,0,1,.83.83A.84.84,0,0,1,12.67,8.17Zm1.83,7.16a.5.5,0,0,1-1,0v-2a.5.5,0,1,1,1,0Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M10,7.33H8.67A1.34,1.34,0,0,0,7.33,8.67v8A1.34,1.34,0,0,0,8.67,18h6.66a1.34,1.34,0,0,0,1.34-1.33v-8a1.34,1.34,0,0,0-1.34-1.34H14"
    />
    <path
      fill="none"
      d="M11.33,6h1.34A1.34,1.34,0,0,1,14,7.33h0a1.34,1.34,0,0,1-1.33,1.34H11.33A1.34,1.34,0,0,1,10,7.33h0A1.34,1.34,0,0,1,11.33,6Z"
    />
    <path fill="none" d="M10,15.33V12" />
    <path fill="none" d="M12,15.33v-.66" />
    <path fill="none" d="M14,15.33v-2" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M10,7.33H8.67A1.34,1.34,0,0,0,7.33,8.67v8A1.34,1.34,0,0,0,8.67,18h6.66a1.34,1.34,0,0,0,1.34-1.33v-8a1.34,1.34,0,0,0-1.34-1.34H14"
    />
    <path
      fill="none"
      d="M11.33,6h1.34A1.34,1.34,0,0,1,14,7.33h0a1.34,1.34,0,0,1-1.33,1.34H11.33A1.34,1.34,0,0,1,10,7.33h0A1.34,1.34,0,0,1,11.33,6Z"
    />
    <path fill="none" d="M10,15.33V12" />
    <path fill="none" d="M12,15.33v-.66" />
    <path fill="none" d="M14,15.33v-2" />
  </Fragment>
);

const ReportAnalytics = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default ReportAnalytics;
