import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <rect fill="none" x="6" y="7.33" width="12" height="9.33" rx="1.33" />
    <path fill="none" d="M8.67,10.67h.66v2.66" />
    <path fill="none" d="M13.33,13.33V10.67l2,2.66V10.67" />
    <line x1="11.33" y1="11" x2="11.33" y2="11.01" />
    <line x1="11.33" y1="13" x2="11.33" y2="13.01" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M16.67,6.83H7.33A1.84,1.84,0,0,0,5.5,8.67v6.66a1.84,1.84,0,0,0,1.83,1.84h9.34a1.84,1.84,0,0,0,1.83-1.84V8.67A1.84,1.84,0,0,0,16.67,6.83Zm-6.84,6.5a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5V11.17H8.67a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h.66a.5.5,0,0,1,.5.5Zm2-.32a.5.5,0,0,1-.5.5.51.51,0,0,1,0-1,.5.5,0,0,1,.5.5Zm0-2a.5.5,0,0,1-.5.5.51.51,0,0,1,0-1,.5.5,0,0,1,.5.5Zm4,2.32a.5.5,0,0,1-.34.48.41.41,0,0,1-.16,0,.51.51,0,0,1-.4-.2l-1.1-1.46v1.16a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5V10.67a.5.5,0,0,1,.35-.48.48.48,0,0,1,.55.18l1.1,1.46V10.67a.5.5,0,0,1,.5-.5.5.5,0,0,1,.5.5Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <rect fillOpacity=".2" x="6" y="7.33" width="12" height="9.33" rx="1.33" />
    <path fill="none" d="M8.67,10.67h.66v2.66" />
    <path fill="none" d="M13.33,13.33V10.67l2,2.66V10.67" />
    <line x1="11.33" y1="11" x2="11.33" y2="11.01" />
    <line x1="11.33" y1="13" x2="11.33" y2="13.01" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <rect
      fill={secondaryColor}
      x="6"
      y="7.33"
      width="12"
      height="9.33"
      rx="1.33"
    />
    <path fill="none" d="M8.67,10.67h.66v2.66" />
    <path fill="none" d="M13.33,13.33V10.67l2,2.66V10.67" />
    <line x1="11.33" y1="11" x2="11.33" y2="11.01" />
    <line x1="11.33" y1="13" x2="11.33" y2="13.01" />
  </Fragment>
);

const OneToMany = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default OneToMany;
