import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M18,15.33a1.33,1.33,0,0,0-.09-.49L13.16,6.69a1.32,1.32,0,0,0-1.81-.52,1.3,1.3,0,0,0-.52.52l-.55.94"
    />
    <path fill="none" d="M6,6,18,18" />
    <path
      fill="none"
      d="M7.27,16.67h9.39L9.31,9.32l-3.2,5.52a1.32,1.32,0,0,0,.73,1.73,1.28,1.28,0,0,0,.43.1"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M18,15.33a1.33,1.33,0,0,0-.09-.49L13.16,6.69a1.32,1.32,0,0,0-1.81-.52,1.3,1.3,0,0,0-.52.52l-.55.94"
    />
    <path d="M7.27,16.67h9.39L9.31,9.32l-3.2,5.52a1.32,1.32,0,0,0,.73,1.73,1.28,1.28,0,0,0,.43.1" />
    <path fill="none" d="M6,6,18,18" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M18,15.33a1.33,1.33,0,0,0-.09-.49L13.16,6.69a1.32,1.32,0,0,0-1.81-.52,1.3,1.3,0,0,0-.52.52l-.55.94"
    />
    <path
      fillOpacity=".2"
      d="M7.27,16.67h9.39L9.31,9.32l-3.2,5.52a1.32,1.32,0,0,0,.73,1.73,1.28,1.28,0,0,0,.43.1"
    />
    <path fill="none" d="M6,6,18,18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      d="M18,15.33a1.33,1.33,0,0,0-.09-.49L13.16,6.69a1.32,1.32,0,0,0-1.81-.52,1.3,1.3,0,0,0-.52.52l-.55.94"
    />
    <path
      fill={secondaryColor}
      d="M7.27,16.67h9.39L9.31,9.32l-3.2,5.52a1.32,1.32,0,0,0,.73,1.73,1.28,1.28,0,0,0,.43.1"
    />
    <path fill="none" d="M6,6,18,18" />
  </Fragment>
);

const TriangleOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default TriangleOff;
