import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="12" cy="12" r="6" />
    <ellipse fill="none" cx="12" cy="12" rx="2.67" ry="6" />
    <ellipse fill="none" cx="12" cy="12" rx="6" ry="2.67" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M18.5,12A6.51,6.51,0,0,1,12,18.5a2.44,2.44,0,0,0,2-1.38,7,7,0,0,0,.88-2.25A7,7,0,0,0,17.12,14,2.44,2.44,0,0,0,18.5,12Z"
    />
    <path
      stroke="none"
      d="M12,18.5A6.51,6.51,0,0,1,5.5,12a2.44,2.44,0,0,0,1.38,2,7.21,7.21,0,0,0,2.26.88A6.82,6.82,0,0,0,10,17.12,2.44,2.44,0,0,0,12,18.5Z"
    />
    <path
      stroke="none"
      d="M12,5.5a2.44,2.44,0,0,0-2,1.38,7,7,0,0,0-.87,2.26A7,7,0,0,0,6.88,10,2.44,2.44,0,0,0,5.5,12,6.51,6.51,0,0,1,12,5.5Z"
    />
    <path
      stroke="none"
      d="M18.5,12a2.44,2.44,0,0,0-1.38-2,6.82,6.82,0,0,0-2.25-.87A7.21,7.21,0,0,0,14,6.88,2.44,2.44,0,0,0,12,5.5,6.51,6.51,0,0,1,18.5,12Z"
    />
    <path
      stroke="none"
      d="M13.78,15.06c-.42,1.51-1.13,2.44-1.78,2.44s-1.36-.93-1.78-2.44a14.46,14.46,0,0,0,3.56,0Z"
    />
    <path
      stroke="none"
      d="M13.78,8.94a14.46,14.46,0,0,0-3.56,0C10.64,7.43,11.35,6.5,12,6.5S13.36,7.43,13.78,8.94Z"
    />
    <path
      stroke="none"
      d="M8.83,12a14.42,14.42,0,0,0,.11,1.78C7.43,13.36,6.5,12.65,6.5,12s.93-1.36,2.44-1.78A14.42,14.42,0,0,0,8.83,12Z"
    />
    <path
      stroke="none"
      d="M14.17,12A12.5,12.5,0,0,1,14,14a12.71,12.71,0,0,1-4,0,12.71,12.71,0,0,1,0-4,12.71,12.71,0,0,1,4,0A12.5,12.5,0,0,1,14.17,12Z"
    />
    <path
      stroke="none"
      d="M17.5,12c0,.65-.93,1.36-2.44,1.78a14.46,14.46,0,0,0,0-3.56C16.57,10.64,17.5,11.35,17.5,12Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fillOpacity=".2" cx="12" cy="12" r="6" />
    <ellipse fill="none" cx="12" cy="12" rx="2.67" ry="6" />
    <ellipse fill="none" cx="12" cy="12" rx="6" ry="2.67" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx="12" cy="12" r="6" />
    <ellipse fill="none" cx="12" cy="12" rx="2.67" ry="6" />
    <ellipse fill="none" cx="12" cy="12" rx="6" ry="2.67" />
  </Fragment>
);

const View360 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default View360;
