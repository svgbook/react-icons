import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M6.67,6.67v6.66A1.33,1.33,0,0,0,8,14.67h8a1.33,1.33,0,0,0,1.33-1.34V6.67Z"
    />
    <line x1="6" y1="6.67" x2="18" y2="6.67" />
    <line x1="12" y1="14.67" x2="12" y2="17.33" />
    <line x1="10" y1="17.33" x2="14" y2="17.33" />
    <path fill="none" d="M9.33,12l2-2,1.34,1.33,2-2" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M18,6.17H6a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h.17v6.16A1.84,1.84,0,0,0,8,15.17h3.5v1.66H10a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5.5.5,0,0,0-.5-.5H12.5V15.17H16a1.84,1.84,0,0,0,1.83-1.84V7.17H18a.5.5,0,0,0,.5-.5A.5.5,0,0,0,18,6.17ZM15,9.69l-2,2a.5.5,0,0,1-.35.14.52.52,0,0,1-.36-.14l-1-1L9.69,12.35a.51.51,0,0,1-.36.15A.5.5,0,0,1,9,12.35a.48.48,0,0,1,0-.7l2-2a.47.47,0,0,1,.35-.15.49.49,0,0,1,.36.15l1,1L14.31,9a.5.5,0,0,1,.71.71Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M6.67,6.67v6.66A1.33,1.33,0,0,0,8,14.67h8a1.33,1.33,0,0,0,1.33-1.34V6.67Z"
    />
    <line x1="6" y1="6.67" x2="18" y2="6.67" />
    <line x1="12" y1="14.67" x2="12" y2="17.33" />
    <line x1="10" y1="17.33" x2="14" y2="17.33" />
    <path fill="none" d="M9.33,12l2-2,1.34,1.33,2-2" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M6.67,6.67v6.66A1.33,1.33,0,0,0,8,14.67h8a1.33,1.33,0,0,0,1.33-1.34V6.67Z"
    />
    <line x1="6" y1="6.67" x2="18" y2="6.67" />
    <line x1="12" y1="14.67" x2="12" y2="17.33" />
    <line x1="10" y1="17.33" x2="14" y2="17.33" />
    <path fill="none" d="M9.33,12l2-2,1.34,1.33,2-2" />
  </Fragment>
);

const Presentation = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Presentation;
