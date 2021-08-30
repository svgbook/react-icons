import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="12" cy="12" r="4.2" />
    <path
      fill="none"
      d="M16.09,13c1.37,1.28,2.13,2.4,1.85,2.94-.44.87-3.47-.16-6.75-2.3S5.61,9,6.06,8.11c.27-.54,1.75-.26,3.48.48"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <circle cx="12" cy="12" r="4.2" />
    <path
      fill="none"
      d="M16.09,13c1.37,1.28,2.13,2.4,1.85,2.94-.44.87-3.47-.16-6.75-2.3S5.61,9,6.06,8.11c.27-.54,1.75-.26,3.48.48"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fillOpacity=".2" cx="12" cy="12" r="4.2" />
    <path
      fill="none"
      d="M16.09,13c1.37,1.28,2.13,2.4,1.85,2.94-.44.87-3.47-.16-6.75-2.3S5.61,9,6.06,8.11c.27-.54,1.75-.26,3.48.48"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx="12" cy="12" r="4.2" />
    <path
      fill="none"
      d="M16.09,13c1.37,1.28,2.13,2.4,1.85,2.94-.44.87-3.47-.16-6.75-2.3S5.61,9,6.06,8.11c.27-.54,1.75-.26,3.48.48"
    />
  </Fragment>
);

const Planet = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Planet;
