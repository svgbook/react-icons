import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M12.75,18V13.5a.76.76,0,0,1,.75-.75H18V7.5A1.5,1.5,0,0,0,16.5,6h-9A1.5,1.5,0,0,0,6,7.5v9A1.5,1.5,0,0,0,7.5,18h5.25"
    />
    <line x1="12.75" y1="18" x2="18" y2="12.75" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M12.75,18V13.5a.76.76,0,0,1,.75-.75H18V7.5A1.5,1.5,0,0,0,16.5,6h-9A1.5,1.5,0,0,0,6,7.5v9A1.5,1.5,0,0,0,7.5,18h5.25" />
    <line x1="12.75" y1="18" x2="18" y2="12.75" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M12.75,18V13.5a.76.76,0,0,1,.75-.75H18V7.5A1.5,1.5,0,0,0,16.5,6h-9A1.5,1.5,0,0,0,6,7.5v9A1.5,1.5,0,0,0,7.5,18h5.25"
    />
    <line x1="12.75" y1="18" x2="18" y2="12.75" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M12.75,18V13.5a.76.76,0,0,1,.75-.75H18V7.5A1.5,1.5,0,0,0,16.5,6h-9A1.5,1.5,0,0,0,6,7.5v9A1.5,1.5,0,0,0,7.5,18h5.25"
    />
    <line x1="12.75" y1="18" x2="18" y2="12.75" />
  </Fragment>
);

const Note = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Note;
