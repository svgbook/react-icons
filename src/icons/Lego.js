import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M8.67,7.33h.66V6h5.34V7.33h.66a2,2,0,0,1,2,2v6a2,2,0,0,1-2,2V18H8.67v-.67a2,2,0,0,1-2-2v-6a2,2,0,0,1,2-2"
    />
    <line x1="10.33" y1="11.33" x2="10.34" y2="11.33" />
    <line x1="13.67" y1="11.33" x2="13.67" y2="11.33" />
    <path fill="none" d="M10.33,14a2.33,2.33,0,0,0,3.3,0l0,0" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M15.33,6.83h-.16V6a.5.5,0,0,0-.5-.5H9.33a.5.5,0,0,0-.5.5v.83H8.67a2.5,2.5,0,0,0-2.5,2.5v6a2.5,2.5,0,0,0,2,2.45V18a.5.5,0,0,0,.5.5h6.66a.5.5,0,0,0,.5-.5v-.22a2.5,2.5,0,0,0,2-2.45v-6A2.5,2.5,0,0,0,15.33,6.83Zm-5,4h0a.5.5,0,0,1,.5.5.5.5,0,1,1-.51-.5ZM14,14.35a3,3,0,0,1-2,.84,2.77,2.77,0,0,1-2-.84.5.5,0,1,1,.71-.7,1.83,1.83,0,0,0,2.59,0,.52.52,0,0,1,.72,0A.48.48,0,0,1,14,14.35Zm-.36-2.52a.5.5,0,1,1,.5-.5A.5.5,0,0,1,13.67,11.83Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M8.67,7.33h.66V6h5.34V7.33h.66a2,2,0,0,1,2,2v6a2,2,0,0,1-2,2V18H8.67v-.67a2,2,0,0,1-2-2v-6a2,2,0,0,1,2-2"
    />
    <line x1="10.33" y1="11.33" x2="10.34" y2="11.33" />
    <line x1="13.67" y1="11.33" x2="13.67" y2="11.33" />
    <path fill="none" d="M10.33,14a2.33,2.33,0,0,0,3.3,0l0,0" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M8.67,7.33h.66V6h5.34V7.33h.66a2,2,0,0,1,2,2v6a2,2,0,0,1-2,2V18H8.67v-.67a2,2,0,0,1-2-2v-6a2,2,0,0,1,2-2"
    />
    <line x1="10.33" y1="11.33" x2="10.34" y2="11.33" />
    <line x1="13.67" y1="11.33" x2="13.67" y2="11.33" />
    <path fill="none" d="M10.33,14a2.33,2.33,0,0,0,3.3,0l0,0" />
  </Fragment>
);

const Lego = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Lego;
