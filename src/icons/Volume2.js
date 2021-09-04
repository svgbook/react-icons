import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M15.78,9a3.78,3.78,0,0,1,.76,5.29,3.91,3.91,0,0,1-.76.76"
    />
    <path
      fill="none"
      d="M9,14.27H7.46a.75.75,0,0,1-.75-.76v-3a.75.75,0,0,1,.75-.76H9l2.64-3.4a.6.6,0,0,1,.82-.26.62.62,0,0,1,.32.64V17.29a.61.61,0,0,1-.5.7.59.59,0,0,1-.64-.32L9,14.27"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M15.78,9a3.78,3.78,0,0,1,.76,5.29,3.91,3.91,0,0,1-.76.76"
    />
    <path d="M9,14.27H7.46a.75.75,0,0,1-.75-.76v-3a.75.75,0,0,1,.75-.76H9l2.64-3.4a.6.6,0,0,1,.82-.26.62.62,0,0,1,.32.64V17.29a.61.61,0,0,1-.5.7.59.59,0,0,1-.64-.32L9,14.27" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M15.78,9a3.78,3.78,0,0,1,.76,5.29,3.91,3.91,0,0,1-.76.76"
    />
    <path
      fillOpacity=".2"
      d="M9,14.27H7.46a.75.75,0,0,1-.75-.76v-3a.75.75,0,0,1,.75-.76H9l2.64-3.4a.6.6,0,0,1,.82-.26.62.62,0,0,1,.32.64V17.29a.61.61,0,0,1-.5.7.59.59,0,0,1-.64-.32L9,14.27"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      d="M15.78,9a3.78,3.78,0,0,1,.76,5.29,3.91,3.91,0,0,1-.76.76"
    />
    <path
      fill={secondaryColor}
      d="M9,14.27H7.46a.75.75,0,0,1-.75-.76v-3a.75.75,0,0,1,.75-.76H9l2.64-3.4a.6.6,0,0,1,.82-.26.62.62,0,0,1,.32.64V17.29a.61.61,0,0,1-.5.7.59.59,0,0,1-.64-.32L9,14.27"
    />
  </Fragment>
);

const Volume2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Volume2;
