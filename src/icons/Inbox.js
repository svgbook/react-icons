import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M18,7.5v5.25H15.75L13.5,15h-3L8.25,12.75H6V7.5A1.5,1.5,0,0,1,7.5,6h9A1.5,1.5,0,0,1,18,7.5Z"
    />
    <path
      fill="none"
      d="M18,12.75V16.5A1.5,1.5,0,0,1,16.5,18h-9A1.5,1.5,0,0,1,6,16.5V12.75H8.25L10.5,15h3l2.25-2.25Z"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M18,7.5v5.25H15.75L13.5,15h-3L8.25,12.75H6V7.5A1.5,1.5,0,0,1,7.5,6h9A1.5,1.5,0,0,1,18,7.5Z" />
    <path
      fill="none"
      d="M18,12.75V16.5A1.5,1.5,0,0,1,16.5,18h-9A1.5,1.5,0,0,1,6,16.5V12.75H8.25L10.5,15h3l2.25-2.25Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M18,7.5v5.25H15.75L13.5,15h-3L8.25,12.75H6V7.5A1.5,1.5,0,0,1,7.5,6h9A1.5,1.5,0,0,1,18,7.5Z"
    />
    <path
      fill="none"
      d="M18,12.75V16.5A1.5,1.5,0,0,1,16.5,18h-9A1.5,1.5,0,0,1,6,16.5V12.75H8.25L10.5,15h3l2.25-2.25Z"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M18,7.5v5.25H15.75L13.5,15h-3L8.25,12.75H6V7.5A1.5,1.5,0,0,1,7.5,6h9A1.5,1.5,0,0,1,18,7.5Z"
    />
    <path
      fill="none"
      d="M18,12.75V16.5A1.5,1.5,0,0,1,16.5,18h-9A1.5,1.5,0,0,1,6,16.5V12.75H8.25L10.5,15h3l2.25-2.25Z"
    />
  </Fragment>
);

const Inbox = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Inbox;
