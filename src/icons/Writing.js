import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M18,16.24V7.77a1.41,1.41,0,1,0-2.82,0v8.47l1.41,1.41Z"
    />
    <path d="M15.18,9.18H18" />
    <path
      fill="none"
      d="M16.59,17.65H7.41a1.42,1.42,0,0,1,0-2.83h2.83a1.41,1.41,0,0,0,0-2.82H8.12"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M18.5,9.68v6.55a.49.49,0,0,1-.15.36L16.94,18a.51.51,0,0,1-.35.15H7.41a1.92,1.92,0,0,1,0-3.83h2.83a.91.91,0,0,0,0-1.82H8.12a.5.5,0,1,1,0-1h2.12a1.91,1.91,0,0,1,0,3.82H7.41a.92.92,0,0,0,0,1.83h8l-.56-.56a.52.52,0,0,1-.14-.36V9.68Z"
    />
    <path stroke="none" d="M18.5,7.77v.91H14.68V7.77a1.91,1.91,0,1,1,3.82,0Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M18,16.24V7.77a1.41,1.41,0,1,0-2.82,0v8.47l1.41,1.41Z"
    />
    <path d="M15.18,9.18H18" />
    <path
      fill="none"
      d="M16.59,17.65H7.41a1.42,1.42,0,0,1,0-2.83h2.83a1.41,1.41,0,0,0,0-2.82H8.12"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M18,16.24V7.77a1.41,1.41,0,1,0-2.82,0v8.47l1.41,1.41Z"
    />
    <path d="M15.18,9.18H18" />
    <path
      fill="none"
      d="M16.59,17.65H7.41a1.42,1.42,0,0,1,0-2.83h2.83a1.41,1.41,0,0,0,0-2.82H8.12"
    />
  </Fragment>
);

const Writing = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Writing;
