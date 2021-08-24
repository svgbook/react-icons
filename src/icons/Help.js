import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="12" cy="12" r="6" />
    <line x1="12" y1="15.33" x2="12" y2="15.34" />
    <path
      fill="none"
      d="M12,13a1,1,0,0,1,.67-1,1.73,1.73,0,0,0-1.24-3.24,1.8,1.8,0,0,0-.76.57"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M12,5.5A6.5,6.5,0,1,0,18.5,12,6.51,6.51,0,0,0,12,5.5Zm.5,9.84a.5.5,0,1,1-.5-.5.5.5,0,0,1,.5.5Zm1.59-4.05a2.27,2.27,0,0,1-1.24,1.18.5.5,0,0,0-.35.5.5.5,0,0,1-.47.53h0a.51.51,0,0,1-.5-.47,1.5,1.5,0,0,1,1-1.5,1.16,1.16,0,0,0,.67-.65,1.18,1.18,0,0,0,0-.94,1.26,1.26,0,0,0-.65-.69,1.22,1.22,0,0,0-.94,0,1.18,1.18,0,0,0-.55.41A.5.5,0,0,1,10.27,9a2.15,2.15,0,0,1,1-.73,2.23,2.23,0,0,1,2.84,3Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fillOpacity=".2" cx="12" cy="12" r="6" />
    <line x1="12" y1="15.33" x2="12" y2="15.34" />
    <path
      fill="none"
      d="M12,13a1,1,0,0,1,.67-1,1.73,1.73,0,0,0-1.24-3.24,1.8,1.8,0,0,0-.76.57"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx="12" cy="12" r="6" />
    <line x1="12" y1="15.33" x2="12" y2="15.34" />
    <path
      fill="none"
      d="M12,13a1,1,0,0,1,.67-1,1.73,1.73,0,0,0-1.24-3.24,1.8,1.8,0,0,0-.76.57"
    />
  </Fragment>
);

const Help = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Help;
