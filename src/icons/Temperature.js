import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M13.33,17.64A2.67,2.67,0,0,1,10.66,13V10h2.67v3a2.82,2.82,0,0,1,1,1A2.68,2.68,0,0,1,13.33,17.64Z"
    />
    <path fill="none" d="M13.33,7.34V10H10.66V7.34a1.34,1.34,0,1,1,2.67,0Z" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M13.33,17.64A2.67,2.67,0,0,1,10.66,13V10h2.67v3a2.82,2.82,0,0,1,1,1A2.68,2.68,0,0,1,13.33,17.64Z" />
    <path fill="none" d="M13.33,7.34V10H10.66V7.34a1.34,1.34,0,1,1,2.67,0Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M13.33,17.64A2.67,2.67,0,0,1,10.66,13V10h2.67v3a2.82,2.82,0,0,1,1,1A2.68,2.68,0,0,1,13.33,17.64Z"
    />
    <path fill="none" d="M13.33,7.34V10H10.66V7.34a1.34,1.34,0,1,1,2.67,0Z" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M13.33,17.64A2.67,2.67,0,0,1,10.66,13V10h2.67v3a2.82,2.82,0,0,1,1,1A2.68,2.68,0,0,1,13.33,17.64Z"
    />
    <path fill="none" d="M13.33,7.34V10H10.66V7.34a1.34,1.34,0,1,1,2.67,0Z" />
  </Fragment>
);

const Temperature = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Temperature;
