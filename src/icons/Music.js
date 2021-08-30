import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="8.25" cy="15.75" r="2.25" />
    <circle fill="none" cx="15.75" cy="15.75" r="2.25" />
    <polyline fill="none" points="10.5 15.75 10.5 6 18 6 18 15.75" />
    <line x1="10.5" y1="9" x2="18" y2="9" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <circle cx="8.25" cy="15.75" r="2.25" />
    <circle cx="15.75" cy="15.75" r="2.25" />
    <polyline fill="none" points="10.5 15.75 10.5 6 18 6 18 15.75" />
    <line x1="10.5" y1="9" x2="18" y2="9" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fillOpacity=".2" cx="8.25" cy="15.75" r="2.25" />
    <circle fillOpacity=".2" cx="15.75" cy="15.75" r="2.25" />
    <polyline fill="none" points="10.5 15.75 10.5 6 18 6 18 15.75" />
    <line x1="10.5" y1="9" x2="18" y2="9" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx="8.25" cy="15.75" r="2.25" />
    <circle fill={secondaryColor} cx="15.75" cy="15.75" r="2.25" />
    <polyline fill="none" points="10.5 15.75 10.5 6 18 6 18 15.75" />
    <line x1="10.5" y1="9" x2="18" y2="9" />
  </Fragment>
);

const Music = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Music;
