import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="12" cy="12" r="6" />
    <line x1="8.67" y1="9.67" x2="10.67" y2="11.67" />
    <path d="M8.67,11.67l2-2" />
    <line x1="13.33" y1="9.67" x2="15.33" y2="11.67" />
    <path d="M13.33,11.67l2-2" />
    <path fill="none" d="M10.33,14a2.33,2.33,0,0,0,3.3,0l0,0" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M12,5.5A6.5,6.5,0,1,0,18.5,12,6.51,6.51,0,0,0,12,5.5ZM9,12a.5.5,0,0,1-.35.15A.51.51,0,0,1,8.31,12a.51.51,0,0,1,0-.71L9,10.67,8.31,10A.5.5,0,1,1,9,9.31l.65.65.64-.65a.51.51,0,0,1,.71,0A.5.5,0,0,1,11,10l-.64.65.64.64A.5.5,0,0,1,11,12a.5.5,0,0,1-.35.15.51.51,0,0,1-.36-.15l-.64-.64Zm5,2.33a2.86,2.86,0,0,1-2,.84,2.79,2.79,0,0,1-2-.84.5.5,0,1,1,.71-.7,1.83,1.83,0,0,0,2.59,0,.51.51,0,0,1,.72,0A.47.47,0,0,1,14,14.35Zm1.67-3a.51.51,0,0,1,0,.71.51.51,0,0,1-.36.15A.5.5,0,0,1,15,12l-.64-.64-.65.64a.51.51,0,0,1-.36.15A.5.5,0,0,1,13,12a.5.5,0,0,1,0-.71l.65-.64L13,10a.5.5,0,0,1,0-.71.51.51,0,0,1,.71,0l.65.65L15,9.31a.5.5,0,1,1,.71.71l-.64.65Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fillOpacity=".2" cx="12" cy="12" r="6" />
    <line x1="8.67" y1="9.67" x2="10.67" y2="11.67" />
    <path d="M8.67,11.67l2-2" />
    <line x1="13.33" y1="9.67" x2="15.33" y2="11.67" />
    <path d="M13.33,11.67l2-2" />
    <path fill="none" d="M10.33,14a2.33,2.33,0,0,0,3.3,0l0,0" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx="12" cy="12" r="6" />
    <line x1="8.67" y1="9.67" x2="10.67" y2="11.67" />
    <path d="M8.67,11.67l2-2" />
    <line x1="13.33" y1="9.67" x2="15.33" y2="11.67" />
    <path d="M13.33,11.67l2-2" />
    <path fill="none" d="M10.33,14a2.33,2.33,0,0,0,3.3,0l0,0" />
  </Fragment>
);

const EmojiCrazy = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default EmojiCrazy;
