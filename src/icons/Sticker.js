import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M18,12l-1.5.37a4.5,4.5,0,0,1-4.88-4.08,5.21,5.21,0,0,1,0-.79L12,6Z"
    />
    <path
      fill="none"
      d="M18,12a6,6,0,1,1-6-6l-.38,1.5a5.21,5.21,0,0,0,0,.79,4.5,4.5,0,0,0,4.88,4.08Z"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M18,12l-1.5.37a4.5,4.5,0,0,1-4.88-4.08,5.21,5.21,0,0,1,0-.79L12,6Z"
    />
    <path d="M18,12a6,6,0,1,1-6-6l-.38,1.5a5.21,5.21,0,0,0,0,.79,4.5,4.5,0,0,0,4.88,4.08Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M18,12l-1.5.37a4.5,4.5,0,0,1-4.88-4.08,5.21,5.21,0,0,1,0-.79L12,6Z"
    />
    <path
      fillOpacity=".2"
      d="M18,12a6,6,0,1,1-6-6l-.38,1.5a5.21,5.21,0,0,0,0,.79,4.5,4.5,0,0,0,4.88,4.08Z"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      d="M18,12l-1.5.37a4.5,4.5,0,0,1-4.88-4.08,5.21,5.21,0,0,1,0-.79L12,6Z"
    />
    <path
      fill={secondaryColor}
      d="M18,12a6,6,0,1,1-6-6l-.38,1.5a5.21,5.21,0,0,0,0,.79,4.5,4.5,0,0,0,4.88,4.08Z"
    />
  </Fragment>
);

const Sticker = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Sticker;
