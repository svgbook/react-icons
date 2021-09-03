import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="12" cy="12" r="2.67" />
    <path
      fill="none"
      d="M6,12h.67M12,6v.67M17.33,12H18m-6,5.33V18M7.73,7.73l.47.47m8.07-.47-.47.47m0,7.6.47.47M8.2,15.8l-.47.47"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <circle cx="12" cy="12" r="2.67" />
    <path
      fill="none"
      d="M6,12h.67M12,6v.67M17.33,12H18m-6,5.33V18M7.73,7.73l.47.47m8.07-.47-.47.47m0,7.6.47.47M8.2,15.8l-.47.47"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fillOpacity=".2" cx="12" cy="12" r="2.67" />
    <path
      fill="none"
      strokeOpacity=".2"
      d="M6,12h.67M12,6v.67M17.33,12H18m-6,5.33V18M7.73,7.73l.47.47m8.07-.47-.47.47m0,7.6.47.47M8.2,15.8l-.47.47"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx="12" cy="12" r="2.67" />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M6,12h.67M12,6v.67M17.33,12H18m-6,5.33V18M7.73,7.73l.47.47m8.07-.47-.47.47m0,7.6.47.47M8.2,15.8l-.47.47"
    />
  </Fragment>
);

const Sun = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Sun;
