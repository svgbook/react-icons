import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <polygon
      fill="none"
      points="14.47 6.53 14.46 10.91 15.83 13.92 15.83 15.56 8.17 15.56 8.17 13.92 9.54 10.91 9.54 6.53 14.47 6.53"
    />
    <line x1="12" y1="15.56" x2="12" y2="20.49" />
    <line x1="8.99" y1="6.53" x2="15.01" y2="6.53" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <polygon points="14.47 6.53 14.46 10.91 15.83 13.92 15.83 15.56 8.17 15.56 8.17 13.92 9.54 10.91 9.54 6.53 14.47 6.53" />
    <line x1="12" y1="15.56" x2="12" y2="20.49" />
    <line x1="8.99" y1="6.53" x2="15.01" y2="6.53" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <polygon
      fillOpacity=".2"
      points="14.47 6.53 14.46 10.91 15.83 13.92 15.83 15.56 8.17 15.56 8.17 13.92 9.54 10.91 9.54 6.53 14.47 6.53"
    />
    <line x1="12" y1="15.56" x2="12" y2="20.49" />
    <line x1="8.99" y1="6.53" x2="15.01" y2="6.53" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <polygon
      fill={secondaryColor}
      points="14.47 6.53 14.46 10.91 15.83 13.92 15.83 15.56 8.17 15.56 8.17 13.92 9.54 10.91 9.54 6.53 14.47 6.53"
    />
    <line x1="12" y1="15.56" x2="12" y2="20.49" />
    <line x1="8.99" y1="6.53" x2="15.01" y2="6.53" />
  </Fragment>
);

const Pinned = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Pinned;
