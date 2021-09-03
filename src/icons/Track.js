import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M6,14.25,14.25,6M18,9.75,9.75,18" />
    <line fill="none" x1="6.75" y1="12" x2="12" y2="17.25" />
    <line fill="none" x1="9.38" y1="9.38" x2="14.63" y2="14.63" />
    <line fill="none" x1="12" y1="6.75" x2="17.25" y2="12" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M6,14.25,14.25,6M18,9.75,9.75,18" />
    <line fill="none" x1="6.75" y1="12" x2="12" y2="17.25" />
    <line fill="none" x1="9.38" y1="9.38" x2="14.63" y2="14.63" />
    <line fill="none" x1="12" y1="6.75" x2="17.25" y2="12" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" strokeOpacity=".2" d="M6,14.25,14.25,6M18,9.75,9.75,18" />
    <line fill="none" x1="6.75" y1="12" x2="12" y2="17.25" />
    <line fill="none" x1="9.38" y1="9.38" x2="14.63" y2="14.63" />
    <line fill="none" x1="12" y1="6.75" x2="17.25" y2="12" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M6,14.25,14.25,6M18,9.75,9.75,18" />
    <line
      fill="none"
      stroke={secondaryColor}
      x1="6.75"
      y1="12"
      x2="12"
      y2="17.25"
    />
    <line
      fill="none"
      stroke={secondaryColor}
      x1="9.38"
      y1="9.38"
      x2="14.63"
      y2="14.63"
    />
    <line
      fill="none"
      stroke={secondaryColor}
      x1="12"
      y1="6.75"
      x2="17.25"
      y2="12"
    />
  </Fragment>
);

const Track = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Track;
