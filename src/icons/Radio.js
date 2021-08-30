import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M17.65,12.35v4.94a.71.71,0,0,1-.71.71H7.06a.71.71,0,0,1-.71-.71V12.35Z"
    />
    <path
      fill="none"
      d="M17.65,9.53v2.82H6.35v-3a.71.71,0,0,1,.19-.48h10.4A.71.71,0,0,1,17.65,9.53Z"
    />
    <path fill="none" d="M6.54,8.82a.78.78,0,0,1,.26-.17L13.41,6" />
    <path d="M8.47,12.35V10.94" />
    <path d="M15.53,15.18h0" />
    <path d="M12.71,15.18h0" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M16.94,8.32H9L13.6,6.46a.51.51,0,0,0,.28-.65.5.5,0,0,0-.65-.27L6.61,8.18a1,1,0,0,0-.34.22.43.43,0,0,0-.1.09.51.51,0,0,0-.09.13,1.09,1.09,0,0,0-.23.68v8A1.21,1.21,0,0,0,7.06,18.5h9.88a1.21,1.21,0,0,0,1.21-1.21V9.53A1.21,1.21,0,0,0,16.94,8.32ZM6.85,11.85V9.32H16.94a.21.21,0,0,1,.21.21v2.32H9v-.91a.5.5,0,0,0-1,0v.91Zm5.86,3.83a.5.5,0,0,1-.5-.5.5.5,0,1,1,.5.5Zm2.82,0a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5.5.5,0,1,1,0,1Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M17.65,12.35v4.94a.71.71,0,0,1-.71.71H7.06a.71.71,0,0,1-.71-.71V12.35Z"
    />
    <path
      fillOpacity=".2"
      d="M17.65,9.53v2.82H6.35v-3a.71.71,0,0,1,.19-.48h10.4A.71.71,0,0,1,17.65,9.53Z"
    />
    <path fill="none" d="M6.54,8.82a.78.78,0,0,1,.26-.17L13.41,6" />
    <path d="M8.47,12.35V10.94" />
    <path d="M15.53,15.18h0" />
    <path d="M12.71,15.18h0" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M17.65,12.35v4.94a.71.71,0,0,1-.71.71H7.06a.71.71,0,0,1-.71-.71V12.35Z"
    />
    <path
      fill={secondaryColor}
      d="M17.65,9.53v2.82H6.35v-3a.71.71,0,0,1,.19-.48h10.4A.71.71,0,0,1,17.65,9.53Z"
    />
    <path fill="none" d="M6.54,8.82a.78.78,0,0,1,.26-.17L13.41,6" />
    <path d="M8.47,12.35V10.94" />
    <path d="M15.53,15.18h0" />
    <path d="M12.71,15.18h0" />
  </Fragment>
);

const Radio = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Radio;
