import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="10" y1="10.67" x2="10.01" y2="10.67" />
    <line x1="14" y1="10.67" x2="14.01" y2="10.67" />
    <path fill="none" d="M10.33,14.17a2.34,2.34,0,0,1,3.3,0l0,0" />
    <path fill="none" d="M15.71,15.74a1.33,1.33,0,1,0,1.93,0l-1-1.09Z" />
    <path
      fill="none"
      d="M17.91,13A5.66,5.66,0,0,0,18,12a6,6,0,1,0-6,6,5.77,5.77,0,0,0,1.33-.15"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="10" y1="10.67" x2="10.01" y2="10.67" />
    <line x1="14" y1="10.67" x2="14.01" y2="10.67" />
    <path fill="none" d="M10.33,14.17a2.34,2.34,0,0,1,3.3,0l0,0" />
    <path d="M15.71,15.74a1.33,1.33,0,1,0,1.93,0l-1-1.09Z" />
    <path
      fill="none"
      d="M17.91,13A5.66,5.66,0,0,0,18,12a6,6,0,1,0-6,6,5.77,5.77,0,0,0,1.33-.15"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line x1="10" y1="10.67" x2="10.01" y2="10.67" />
    <line x1="14" y1="10.67" x2="14.01" y2="10.67" />
    <path fill="none" d="M10.33,14.17a2.34,2.34,0,0,1,3.3,0l0,0" />
    <path fillOpacity=".2" d="M15.71,15.74a1.33,1.33,0,1,0,1.93,0l-1-1.09Z" />
    <path
      fill="none"
      d="M17.91,13A5.66,5.66,0,0,0,18,12a6,6,0,1,0-6,6,5.77,5.77,0,0,0,1.33-.15"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line x1="10" y1="10.67" x2="10.01" y2="10.67" />
    <line x1="14" y1="10.67" x2="14.01" y2="10.67" />
    <path fill="none" d="M10.33,14.17a2.34,2.34,0,0,1,3.3,0l0,0" />
    <path
      fill={secondaryColor}
      d="M15.71,15.74a1.33,1.33,0,1,0,1.93,0l-1-1.09Z"
    />
    <path
      fill="none"
      d="M17.91,13A5.66,5.66,0,0,0,18,12a6,6,0,1,0-6,6,5.77,5.77,0,0,0,1.33-.15"
    />
  </Fragment>
);

const EmojiCry = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default EmojiCry;
