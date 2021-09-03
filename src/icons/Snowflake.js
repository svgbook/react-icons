import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M12,9.9V6m1.2,1.2L12,7.8l-1.2-.6" />
    <path
      fill="none"
      d="M13.82,11l1.82-1L17.2,9m-.44,1.64L15.64,9.9l-.08-1.34"
    />
    <path
      fill="none"
      d="M13.82,13.05l1.82,1,1.56.9m-1.64.44.08-1.34,1.12-.74"
    />
    <path fill="none" d="M12,14.1V18m-1.2-1.2,1.2-.6,1.2.6" />
    <path
      fill="none"
      d="M10.18,13.05l-1.82,1L6.8,15m.44-1.64,1.12.74.09,1.34"
    />
    <path fill="none" d="M10.18,11l-1.82-1L6.8,9m1.65-.44L8.36,9.9l-1.12.74" />
    <polygon
      fill="none"
      points="13.82 10.95 13.82 13.05 12 14.1 10.18 13.05 10.18 10.95 12 9.9 13.82 10.95"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M12,9.9V6m1.2,1.2L12,7.8l-1.2-.6" />
    <path
      fill="none"
      d="M13.82,11l1.82-1L17.2,9m-.44,1.64L15.64,9.9l-.08-1.34"
    />
    <path
      fill="none"
      d="M13.82,13.05l1.82,1,1.56.9m-1.64.44.08-1.34,1.12-.74"
    />
    <path fill="none" d="M12,14.1V18m-1.2-1.2,1.2-.6,1.2.6" />
    <path
      fill="none"
      d="M10.18,13.05l-1.82,1L6.8,15m.44-1.64,1.12.74.09,1.34"
    />
    <path fill="none" d="M10.18,11l-1.82-1L6.8,9m1.65-.44L8.36,9.9l-1.12.74" />
    <polygon points="13.82 10.95 13.82 13.05 12 14.1 10.18 13.05 10.18 10.95 12 9.9 13.82 10.95" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M12,9.9V6m1.2,1.2L12,7.8l-1.2-.6" />
    <path
      fill="none"
      strokeOpacity=".2"
      d="M13.82,11l1.82-1L17.2,9m-.44,1.64L15.64,9.9l-.08-1.34"
    />
    <path
      fill="none"
      d="M13.82,13.05l1.82,1,1.56.9m-1.64.44.08-1.34,1.12-.74"
    />
    <path
      fill="none"
      strokeOpacity=".2"
      d="M12,14.1V18m-1.2-1.2,1.2-.6,1.2.6"
    />
    <path
      fill="none"
      d="M10.18,13.05l-1.82,1L6.8,15m.44-1.64,1.12.74.09,1.34"
    />
    <path
      fill="none"
      strokeOpacity=".2"
      d="M10.18,11l-1.82-1L6.8,9m1.65-.44L8.36,9.9l-1.12.74"
    />
    <polygon
      fillOpacity=".2"
      points="13.82 10.95 13.82 13.05 12 14.1 10.18 13.05 10.18 10.95 12 9.9 13.82 10.95"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      stroke={secondaryColor}
      d="M12,9.9V6m1.2,1.2L12,7.8l-1.2-.6"
    />
    <path
      fill="none"
      d="M13.82,11l1.82-1L17.2,9m-.44,1.64L15.64,9.9l-.08-1.34"
    />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M13.82,13.05l1.82,1,1.56.9m-1.64.44.08-1.34,1.12-.74"
    />
    <path fill="none" d="M12,14.1V18m-1.2-1.2,1.2-.6,1.2.6" />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M10.18,13.05l-1.82,1L6.8,15m.44-1.64,1.12.74.09,1.34"
    />
    <path fill="none" d="M10.18,11l-1.82-1L6.8,9m1.65-.44L8.36,9.9l-1.12.74" />
    <polygon
      fill={secondaryColor}
      points="13.82 10.95 13.82 13.05 12 14.1 10.18 13.05 10.18 10.95 12 9.9 13.82 10.95"
    />
  </Fragment>
);

const Snowflake = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Snowflake;
