import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M6,6A1.41,1.41,0,0,1,7.41,7.41v6.35" />
    <path fill="none" d="M7.41,7.41a1.42,1.42,0,0,1,2.83,0v6.35" />
    <path
      fill="none"
      d="M10.24,7.41a1.41,1.41,0,0,1,2.82,0v7.06c0,2,2.21,3.53,4.94,3.53"
    />
    <path
      fill="none"
      d="M12.35,18c2.73,0,4.94-1.58,4.94-3.53V13.06a2.12,2.12,0,1,0-4.23,0"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M6,6A1.41,1.41,0,0,1,7.41,7.41v6.35" />
    <path fill="none" d="M7.41,7.41a1.42,1.42,0,0,1,2.83,0v6.35" />
    <path
      fill="none"
      d="M10.24,7.41a1.41,1.41,0,0,1,2.82,0v7.06c0,2,2.21,3.53,4.94,3.53"
    />
    <path
      fill="none"
      d="M12.35,18c2.73,0,4.94-1.58,4.94-3.53V13.06a2.12,2.12,0,1,0-4.23,0"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M6,6A1.41,1.41,0,0,1,7.41,7.41v6.35" />
    <path fill="none" d="M7.41,7.41a1.42,1.42,0,0,1,2.83,0v6.35" />

    <path
      fill="none"
      strokeOpacity=".2"
      d="M12.35,18c2.73,0,4.94-1.58,4.94-3.53V13.06a2.12,2.12,0,1,0-4.23,0"
    />
    <path
      fill="none"
      d="M10.24,7.41a1.41,1.41,0,0,1,2.82,0v7.06c0,2,2.21,3.53,4.94,3.53"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M6,6A1.41,1.41,0,0,1,7.41,7.41v6.35" />
    <path fill="none" d="M7.41,7.41a1.42,1.42,0,0,1,2.83,0v6.35" />

    <path
      fill="none"
      stroke={secondaryColor}
      d="M12.35,18c2.73,0,4.94-1.58,4.94-3.53V13.06a2.12,2.12,0,1,0-4.23,0"
    />
    <path
      fill="none"
      d="M10.24,7.41a1.41,1.41,0,0,1,2.82,0v7.06c0,2,2.21,3.53,4.94,3.53"
    />
  </Fragment>
);

const ZodiacVirgo = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default ZodiacVirgo;
