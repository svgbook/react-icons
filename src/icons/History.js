import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <polyline fill="none" points="11.98 9.39 11.98 12.06 13.31 13.39" />
    <path fill="none" d="M6,11.39a6,6,0,1,1,.33,2.67M6,17.39V14.06H9.35" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <polyline fill="none" points="11.98 9.39 11.98 12.06 13.31 13.39" />
    <path fill="none" d="M6,11.39a6,6,0,1,1,.33,2.67M6,17.39V14.06H9.35" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <polyline
      fill="none"
      strokeOpacity=".2"
      points="11.98 9.39 11.98 12.06 13.31 13.39"
    />
    <path fill="none" d="M6,11.39a6,6,0,1,1,.33,2.67M6,17.39V14.06H9.35" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <polyline
      fill="none"
      stroke={secondaryColor}
      points="11.98 9.39 11.98 12.06 13.31 13.39"
    />
    <path fill="none" d="M6,11.39a6,6,0,1,1,.33,2.67M6,17.39V14.06H9.35" />
  </Fragment>
);

const History = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default History;
