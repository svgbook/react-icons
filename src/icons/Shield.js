import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M12,6a8,8,0,0,0,5.67,2,8,8,0,0,1-5.42,9.93L12,18A8,8,0,0,1,6.26,8.25c0-.09,0-.17.07-.25A8,8,0,0,0,12,6"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M12,6a8,8,0,0,0,5.67,2,8,8,0,0,1-5.42,9.93L12,18A8,8,0,0,1,6.26,8.25c0-.09,0-.17.07-.25A8,8,0,0,0,12,6" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M12,6a8,8,0,0,0,5.67,2,8,8,0,0,1-5.42,9.93L12,18A8,8,0,0,1,6.26,8.25c0-.09,0-.17.07-.25A8,8,0,0,0,12,6"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M12,6a8,8,0,0,0,5.67,2,8,8,0,0,1-5.42,9.93L12,18A8,8,0,0,1,6.26,8.25c0-.09,0-.17.07-.25A8,8,0,0,0,12,6"
    />
  </Fragment>
);

const Shield = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Shield;
