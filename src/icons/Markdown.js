import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <rect fill="none" x="6" y="7.33" width="12" height="9.33" rx="1.33" />
    <path fill="none" d="M8.67,14V10L10,11.33,11.33,10v4" />
    <path fill="none" d="M13.33,12.67,14.67,14,16,12.67M14.67,14V10" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M16.67,6.83H7.33A1.84,1.84,0,0,0,5.5,8.67v6.66a1.84,1.84,0,0,0,1.83,1.84h9.34a1.84,1.84,0,0,0,1.83-1.84V8.67A1.84,1.84,0,0,0,16.67,6.83ZM11.83,14a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5V11.21l-.48.48a.51.51,0,0,1-.7,0l-.48-.48V14a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5V10a.5.5,0,0,1,.31-.46A.48.48,0,0,1,9,9.65l1,1,1-1a.48.48,0,0,1,.54-.11.5.5,0,0,1,.31.46Zm4.52-1L15,14.35l0,0a.49.49,0,0,1-.33.13.51.51,0,0,1-.34-.13l0,0L13,13a.5.5,0,0,1,0-.71.51.51,0,0,1,.71,0l.48.48V10a.5.5,0,0,1,.5-.5.5.5,0,0,1,.5.5v2.79l.48-.48a.5.5,0,0,1,.7,0A.5.5,0,0,1,16.35,13Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <rect fillOpacity=".2" x="6" y="7.33" width="12" height="9.33" rx="1.33" />
    <path fill="none" d="M8.67,14V10L10,11.33,11.33,10v4" />
    <path fill="none" d="M13.33,12.67,14.67,14,16,12.67M14.67,14V10" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <rect
      fill={secondaryColor}
      x="6"
      y="7.33"
      width="12"
      height="9.33"
      rx="1.33"
    />
    <path fill="none" d="M8.67,14V10L10,11.33,11.33,10v4" />
    <path fill="none" d="M13.33,12.67,14.67,14,16,12.67M14.67,14V10" />
  </Fragment>
);

const Markdown = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Markdown;
