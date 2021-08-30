import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M15.33,6,18,8.67,8.67,18,6,15.33Z" />
    <path fill="none" d="M14.67,8.67l-1-1" />
    <path fill="none" d="M12.67,10.67l-1-1" />
    <path fill="none" d="M10.67,12.67l-1-1" />
    <path fill="none" d="M8.67,14.67l-1-1" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M18.35,9,9,18.35a.5.5,0,0,1-.35.15.51.51,0,0,1-.36-.15L5.65,15.69a.5.5,0,0,1,0-.71L7.3,13.33a.51.51,0,0,0,0,.69l.36.36.64.64a.51.51,0,0,0,.36.15A.5.5,0,0,0,9,15a.5.5,0,0,0,0-.71l-1-1a.51.51,0,0,0-.69,0l2-2a.51.51,0,0,0,0,.69l.36.36.64.64a.51.51,0,0,0,.36.15A.5.5,0,0,0,11,13a.5.5,0,0,0,0-.71l-1-1a.51.51,0,0,0-.69,0l2-2a.51.51,0,0,0,0,.69l.36.36.64.64a.51.51,0,0,0,.36.15A.5.5,0,0,0,13,11a.5.5,0,0,0,0-.71l-1-1a.51.51,0,0,0-.69,0l2-2a.51.51,0,0,0,0,.69l.36.36.64.64a.51.51,0,0,0,.36.15A.5.5,0,0,0,15,9a.5.5,0,0,0,0-.71l-1-1a.51.51,0,0,0-.69,0L15,5.65a.5.5,0,0,1,.71,0l2.66,2.66A.5.5,0,0,1,18.35,9Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fillOpacity=".2" d="M15.33,6,18,8.67,8.67,18,6,15.33Z" />
    <path fill="none" d="M14.67,8.67l-1-1" />
    <path fill="none" d="M12.67,10.67l-1-1" />
    <path fill="none" d="M10.67,12.67l-1-1" />
    <path fill="none" d="M8.67,14.67l-1-1" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill={secondaryColor} d="M15.33,6,18,8.67,8.67,18,6,15.33Z" />
    <path fill="none" d="M14.67,8.67l-1-1" />
    <path fill="none" d="M12.67,10.67l-1-1" />
    <path fill="none" d="M10.67,12.67l-1-1" />
    <path fill="none" d="M8.67,14.67l-1-1" />
  </Fragment>
);

const Ruler = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Ruler;
