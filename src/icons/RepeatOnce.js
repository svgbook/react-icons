import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M6.67,12V10a2,2,0,0,1,2-2h8.66" />
    <path fill="none" d="M17.33,12v2a2,2,0,0,1-2,2H6.67" />
    <path fill="none" d="M11.33,11.33l.67-.66v2.66" />
    <polyline fill="none" points="8.67 18 6.67 16 8.67 14" />
    <polyline fill="none" points="15.33 6 17.33 8 15.33 10" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M6.67,12V10a2,2,0,0,1,2-2h8.66" />
    <path fill="none" d="M17.33,12v2a2,2,0,0,1-2,2H6.67" />
    <path fill="none" d="M11.33,11.33l.67-.66v2.66" />
    <polyline fill="none" points="8.67 18 6.67 16 8.67 14" />
    <polyline fill="none" points="15.33 6 17.33 8 15.33 10" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" strokeOpacity=".2" d="M6.67,12V10a2,2,0,0,1,2-2h8.66" />
    <path fill="none" strokeOpacity=".2" d="M17.33,12v2a2,2,0,0,1-2,2H6.67" />
    <path fill="none" strokeOpacity=".2" d="M11.33,11.33l.67-.66v2.66" />
    <polyline fill="none" points="8.67 18 6.67 16 8.67 14" />
    <polyline fill="none" points="15.33 6 17.33 8 15.33 10" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill={"none"} d="M6.67,12V10a2,2,0,0,1,2-2h8.66" />
    <path fill={"none"} d="M17.33,12v2a2,2,0,0,1-2,2H6.67" />
    <path fill="none" stroke={secondaryColor} d="M11.33,11.33l.67-.66v2.66" />
    <polyline
      fill="none"
      stroke={secondaryColor}
      points="8.67 18 6.67 16 8.67 14"
    />
    <polyline
      fill="none"
      stroke={secondaryColor}
      points="15.33 6 17.33 8 15.33 10"
    />
  </Fragment>
);

const RepeatOnce = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default RepeatOnce;
