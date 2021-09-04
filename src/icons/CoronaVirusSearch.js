import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M14.84,11.68a3.16,3.16,0,1,0-3.16,3.16" />
    <path fill="none" d="M11.68,8.53V6m-.63,0h1.27" />
    <path fill="none" d="M13.92,9.45,15.7,7.67m-.44-.45.89.89" />
    <path fill="none" d="M14.84,11.68h2.53m0-.63v1.27" />
    <path fill="none" d="M11.68,14.84v2.53m.64,0H11.05" />
    <path fill="none" d="M9.45,13.92,7.67,15.7m.44.45-.89-.89" />
    <path fill="none" d="M8.53,11.68H6m0,.64V11.05" />
    <path fill="none" d="M9.45,9.45,7.67,7.67m-.45.44.89-.89" />
    <circle fill="none" cx="15.16" cy="15.16" r="1.58" />
    <line x1="16.42" y1="16.42" x2="18" y2="18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M14.84,11.68a3.16,3.16,0,1,0-3.16,3.16" />
    <path fill="none" d="M11.68,8.53V6m-.63,0h1.27" />
    <path fill="none" d="M13.92,9.45,15.7,7.67m-.44-.45.89.89" />
    <path fill="none" d="M14.84,11.68h2.53m0-.63v1.27" />
    <path fill="none" d="M11.68,14.84v2.53m.64,0H11.05" />
    <path fill="none" d="M9.45,13.92,7.67,15.7m.44.45-.89-.89" />
    <path fill="none" d="M8.53,11.68H6m0,.64V11.05" />
    <path fill="none" d="M9.45,9.45,7.67,7.67m-.45.44.89-.89" />
    <circle cx="15.16" cy="15.16" r="1.58" />
    <line x1="16.42" y1="16.42" x2="18" y2="18" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M14.84,11.68a3.16,3.16,0,1,0-3.16,3.16" />
    <path fill="none" d="M11.68,8.53V6m-.63,0h1.27" />
    <path fill="none" d="M13.92,9.45,15.7,7.67m-.44-.45.89.89" />
    <path fill="none" d="M14.84,11.68h2.53m0-.63v1.27" />
    <path fill="none" d="M11.68,14.84v2.53m.64,0H11.05" />
    <path fill="none" d="M9.45,13.92,7.67,15.7m.44.45-.89-.89" />
    <path fill="none" d="M8.53,11.68H6m0,.64V11.05" />
    <path fill="none" d="M9.45,9.45,7.67,7.67m-.45.44.89-.89" />
    <circle fill="none" strokeOpacity=".2" cx="15.16" cy="15.16" r="1.58" />
    <line strokeOpacity=".2" x1="16.42" y1="16.42" x2="18" y2="18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M14.84,11.68a3.16,3.16,0,1,0-3.16,3.16" />
    <path fill="none" d="M11.68,8.53V6m-.63,0h1.27" />
    <path fill="none" d="M13.92,9.45,15.7,7.67m-.44-.45.89.89" />
    <path fill="none" d="M14.84,11.68h2.53m0-.63v1.27" />
    <path fill="none" d="M11.68,14.84v2.53m.64,0H11.05" />
    <path fill="none" d="M9.45,13.92,7.67,15.7m.44.45-.89-.89" />
    <path fill="none" d="M8.53,11.68H6m0,.64V11.05" />
    <path fill="none" d="M9.45,9.45,7.67,7.67m-.45.44.89-.89" />
    <circle
      fill="none"
      stroke={secondaryColor}
      cx="15.16"
      cy="15.16"
      r="1.58"
    />
    <line stroke={secondaryColor} x1="16.42" y1="16.42" x2="18" y2="18" />
  </Fragment>
);

const CoronaVirusSearch = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default CoronaVirusSearch;
