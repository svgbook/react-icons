import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M10,8.67v-2A.67.67,0,0,1,10.67,6h2.66a.67.67,0,0,1,.67.67v2"
    />
    <path
      fill="none"
      d="M7.34,8.67l.67,8A1.33,1.33,0,0,0,9.34,18h5.32A1.33,1.33,0,0,0,16,16.66l.67-8Z"
    />
    <line x1="6.68" y1="8.67" x2="17.32" y2="8.67" />
    <line x1="10.67" y1="11.33" x2="10.67" y2="15.33" />
    <line x1="13.33" y1="11.33" x2="13.33" y2="15.33" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M17.32,8.17H14.5V6.68a1.17,1.17,0,0,0-1.17-1.17H10.67A1.17,1.17,0,0,0,9.5,6.68V8.17H6.68a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h.2l.63,7.49a1.83,1.83,0,0,0,1.83,1.83h5.32a1.82,1.82,0,0,0,1.83-1.79l.63-7.53h.2a.5.5,0,0,0,.5-.5A.5.5,0,0,0,17.32,8.17ZM10.5,6.68a.17.17,0,0,1,.17-.17h2.66a.17.17,0,0,1,.17.17V8.17h-3Zm.67,8.65a.5.5,0,0,1-1,0v-4a.5.5,0,0,1,1,0Zm2.66,0a.5.5,0,0,1-1,0v-4a.5.5,0,0,1,1,0Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M10,8.67v-2A.67.67,0,0,1,10.67,6h2.66a.67.67,0,0,1,.67.67v2"
    />
    <path
      fillOpacity=".2"
      d="M7.34,8.67l.67,8A1.33,1.33,0,0,0,9.34,18h5.32A1.33,1.33,0,0,0,16,16.66l.67-8Z"
    />
    <line x1="6.68" y1="8.67" x2="17.32" y2="8.67" />
    <line x1="10.67" y1="11.33" x2="10.67" y2="15.33" />
    <line x1="13.33" y1="11.33" x2="13.33" y2="15.33" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      d="M10,8.67v-2A.67.67,0,0,1,10.67,6h2.66a.67.67,0,0,1,.67.67v2"
    />
    <path
      fill={secondaryColor}
      d="M7.34,8.67l.67,8A1.33,1.33,0,0,0,9.34,18h5.32A1.33,1.33,0,0,0,16,16.66l.67-8Z"
    />
    <line x1="6.68" y1="8.67" x2="17.32" y2="8.67" />
    <line x1="10.67" y1="11.33" x2="10.67" y2="15.33" />
    <line x1="13.33" y1="11.33" x2="13.33" y2="15.33" />
  </Fragment>
);

const Trash = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Trash;
