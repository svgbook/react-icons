import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M18,11.25A6.08,6.08,0,0,0,6.37,9.75" />
    <path fill="none" d="M6,12.75a6.09,6.09,0,0,0,11.65,1.5" />
    <polyline fill="none" points="18.01 17.26 18.01 14.25 15.01 14.25" />
    <polyline fill="none" points="5.99 6.74 5.99 9.75 8.99 9.75" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M18,11.25A6.08,6.08,0,0,0,6.37,9.75" />
    <path fill="none" d="M6,12.75a6.09,6.09,0,0,0,11.65,1.5" />
    <polyline fill="none" points="18.01 17.26 18.01 14.25 15.01 14.25" />
    <polyline fill="none" points="5.99 6.74 5.99 9.75 8.99 9.75" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      strokeOpacity=".2"
      d="M18,11.25A6.08,6.08,0,0,0,6.37,9.75"
    />
    <path
      fill="none"
      strokeOpacity=".2"
      d="M6,12.75a6.09,6.09,0,0,0,11.65,1.5"
    />
    <polyline fill="none" points="18.01 17.26 18.01 14.25 15.01 14.25" />
    <polyline fill="none" points="5.99 6.74 5.99 9.75 8.99 9.75" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M18,11.25A6.08,6.08,0,0,0,6.37,9.75" />
    <path fill="none" d="M6,12.75a6.09,6.09,0,0,0,11.65,1.5" />
    <polyline
      fill="none"
      stroke={secondaryColor}
      points="18.01 17.26 18.01 14.25 15.01 14.25"
    />
    <polyline
      fill="none"
      stroke={secondaryColor}
      points="5.99 6.74 5.99 9.75 8.99 9.75"
    />
  </Fragment>
);

const Refresh = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Refresh;
