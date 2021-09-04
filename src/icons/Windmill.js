import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M12,12a3.18,3.18,0,0,0,3.33-3A3.18,3.18,0,0,0,12,6Z" />
    <path
      fill="none"
      d="M12,12a3.18,3.18,0,0,0,3,3.33A3.18,3.18,0,0,0,18,12Z"
    />
    <path
      fill="none"
      d="M12,12a3.18,3.18,0,0,0-3.33,3A3.18,3.18,0,0,0,12,18Z"
    />
    <path fill="none" d="M12,12A3.18,3.18,0,0,0,9,8.67,3.18,3.18,0,0,0,6,12Z" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M12,12a3.18,3.18,0,0,0,3.33-3A3.18,3.18,0,0,0,12,6Z" />
    <path d="M12,12a3.18,3.18,0,0,0,3,3.33A3.18,3.18,0,0,0,18,12Z" />
    <path d="M12,12a3.18,3.18,0,0,0-3.33,3A3.18,3.18,0,0,0,12,18Z" />
    <path d="M12,12A3.18,3.18,0,0,0,9,8.67,3.18,3.18,0,0,0,6,12Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M12,12a3.18,3.18,0,0,0,3.33-3A3.18,3.18,0,0,0,12,6Z"
    />
    <path
      fillOpacity=".2"
      d="M12,12a3.18,3.18,0,0,0,3,3.33A3.18,3.18,0,0,0,18,12Z"
    />
    <path
      fillOpacity=".2"
      d="M12,12a3.18,3.18,0,0,0-3.33,3A3.18,3.18,0,0,0,12,18Z"
    />
    <path
      fillOpacity=".2"
      d="M12,12A3.18,3.18,0,0,0,9,8.67,3.18,3.18,0,0,0,6,12Z"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M12,12a3.18,3.18,0,0,0,3.33-3A3.18,3.18,0,0,0,12,6Z"
    />
    <path
      fill={secondaryColor}
      d="M12,12a3.18,3.18,0,0,0,3,3.33A3.18,3.18,0,0,0,18,12Z"
    />
    <path
      fill={secondaryColor}
      d="M12,12a3.18,3.18,0,0,0-3.33,3A3.18,3.18,0,0,0,12,18Z"
    />
    <path
      fill={secondaryColor}
      d="M12,12A3.18,3.18,0,0,0,9,8.67,3.18,3.18,0,0,0,6,12Z"
    />
  </Fragment>
);

const Windmill = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Windmill;
