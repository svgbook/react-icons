import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M6,10.67l2-2,2,2,2-2,2,2,2-2,2,2" />
    <path fill="none" d="M6,15.33l2-2,2,2,2-2,2,2,2-2,2,2" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M6,10.67l2-2,2,2,2-2,2,2,2-2,2,2" />
    <path fill="none" d="M6,15.33l2-2,2,2,2-2,2,2,2-2,2,2" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" strokeOpacity=".2" d="M6,10.67l2-2,2,2,2-2,2,2,2-2,2,2" />
    <path fill="none" d="M6,15.33l2-2,2,2,2-2,2,2,2-2,2,2" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M6,10.67l2-2,2,2,2-2,2,2,2-2,2,2" />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M6,15.33l2-2,2,2,2-2,2,2,2-2,2,2"
    />
  </Fragment>
);

const ZodiacAquarius = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default ZodiacAquarius;
