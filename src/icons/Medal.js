import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M12,6V8.25M9,6v4.5M15,6v4.5" />
    <path
      fill="none"
      d="M12,16.88,9.75,18l.38-2.62-1.5-1.5,2.25-.38L12,11.25l1.13,2.25,2.25.38-1.5,1.5L14.25,18Z"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M12,6V8.25M9,6v4.5M15,6v4.5" />
    <path d="M12,16.88,9.75,18l.38-2.62-1.5-1.5,2.25-.38L12,11.25l1.13,2.25,2.25.38-1.5,1.5L14.25,18Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M12,6V8.25M9,6v4.5M15,6v4.5" />
    <path
      fillOpacity=".2"
      d="M12,16.88,9.75,18l.38-2.62-1.5-1.5,2.25-.38L12,11.25l1.13,2.25,2.25.38-1.5,1.5L14.25,18Z"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M12,6V8.25M9,6v4.5M15,6v4.5" />
    <path
      fill={secondaryColor}
      d="M12,16.88,9.75,18l.38-2.62-1.5-1.5,2.25-.38L12,11.25l1.13,2.25,2.25.38-1.5,1.5L14.25,18Z"
    />
  </Fragment>
);

const Medal = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Medal;
