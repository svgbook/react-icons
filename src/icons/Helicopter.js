import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M6,10.33l.67,1.34h4" />
    <path
      fill="none"
      d="M18,13a1.33,1.33,0,0,1-1.34,1.33H12A1.34,1.34,0,0,1,10.66,13V11A1.34,1.34,0,0,1,12,9.67h1.34c.22,0,.45,0,.66,0v2.63h3.92A2.86,2.86,0,0,1,18,13Z"
    />
    <line x1="12.67" y1="9.67" x2="12.67" y2="7.67" />
    <line x1="7.33" y1="7.67" x2="17.33" y2="7.67" />
    <path
      fill="none"
      d="M17.92,12.33H14V9.7C16,9.86,17.59,10.74,17.92,12.33Z"
    />
    <line x1="14" y1="16.33" x2="14" y2="14.33" />
    <line x1="16.67" y1="16.33" x2="11.33" y2="16.33" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M6,10.33l.67,1.34h4" />
    <path d="M18,13a1.33,1.33,0,0,1-1.34,1.33H12A1.34,1.34,0,0,1,10.66,13V11A1.34,1.34,0,0,1,12,9.67h1.34c.22,0,.45,0,.66,0v2.63h3.92A2.86,2.86,0,0,1,18,13Z" />
    <line x1="12.67" y1="9.67" x2="12.67" y2="7.67" />
    <line x1="7.33" y1="7.67" x2="17.33" y2="7.67" />
    <path
      fill="none"
      d="M17.92,12.33H14V9.7C16,9.86,17.59,10.74,17.92,12.33Z"
    />
    <line x1="14" y1="16.33" x2="14" y2="14.33" />
    <line x1="16.67" y1="16.33" x2="11.33" y2="16.33" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M6,10.33l.67,1.34h4" />
    <path
      fillOpacity=".2"
      d="M18,13a1.33,1.33,0,0,1-1.34,1.33H12A1.34,1.34,0,0,1,10.66,13V11A1.34,1.34,0,0,1,12,9.67h1.34c.22,0,.45,0,.66,0v2.63h3.92A2.86,2.86,0,0,1,18,13Z"
    />
    <line x1="12.67" y1="9.67" x2="12.67" y2="7.67" />
    <line x1="7.33" y1="7.67" x2="17.33" y2="7.67" />
    <path
      fill="none"
      d="M17.92,12.33H14V9.7C16,9.86,17.59,10.74,17.92,12.33Z"
    />
    <line x1="14" y1="16.33" x2="14" y2="14.33" />
    <line x1="16.67" y1="16.33" x2="11.33" y2="16.33" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M6,10.33l.67,1.34h4" />
    <path
      fill={secondaryColor}
      d="M18,13a1.33,1.33,0,0,1-1.34,1.33H12A1.34,1.34,0,0,1,10.66,13V11A1.34,1.34,0,0,1,12,9.67h1.34c.22,0,.45,0,.66,0v2.63h3.92A2.86,2.86,0,0,1,18,13Z"
    />
    <line x1="12.67" y1="9.67" x2="12.67" y2="7.67" />
    <line x1="7.33" y1="7.67" x2="17.33" y2="7.67" />
    <path
      fill="none"
      d="M17.92,12.33H14V9.7C16,9.86,17.59,10.74,17.92,12.33Z"
    />
    <line x1="14" y1="16.33" x2="14" y2="14.33" />
    <line x1="16.67" y1="16.33" x2="11.33" y2="16.33" />
  </Fragment>
);

const Helicopter = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Helicopter;
